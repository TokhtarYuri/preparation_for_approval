import { NextResponse } from 'next/server';

/**
 * Валидация данных формы
 */
function validateFormData(phone, name, email) {
  const errors = [];

  // Валидация телефона
  if (!phone || typeof phone !== 'string') {
    errors.push('Телефон обов\'язковий');
  } else {
    const phoneTrimmed = phone.trim();
    
    // Проверяем формат: может начинаться с +, затем только цифры
    // Или только цифры без +
    let phoneDigits = '';
    let hasPlus = false;
    
    if (phoneTrimmed.startsWith('+')) {
      hasPlus = true;
      phoneDigits = phoneTrimmed.substring(1).replace(/\D/g, '');
    } else {
      phoneDigits = phoneTrimmed.replace(/\D/g, '');
    }
    
    // Проверяем длину
    const totalLength = hasPlus ? phoneDigits.length + 1 : phoneDigits.length;
    
    if (totalLength > 15) {
      errors.push('Телефон занадто довгий. Максимум 15 символів.');
    } else if (phoneDigits.length < 10) {
      errors.push('Телефон занадто короткий. Мінімум 10 цифр.');
    } else if (hasPlus && phoneTrimmed.length !== phoneDigits.length + 1) {
      // Если есть +, проверяем что после него только цифры
      errors.push('Після + можуть бути тільки цифри');
    } else if (!hasPlus && phoneTrimmed.length !== phoneDigits.length) {
      // Если нет +, проверяем что только цифры
      errors.push('Телефон може містити тільки цифри або + на початку');
    }
  }

  // Валидация имени
  if (!name || typeof name !== 'string') {
    errors.push('Ім\'я обов\'язкове');
  } else {
    const nameTrimmed = name.trim();
    if (nameTrimmed.length < 2) {
      errors.push('Ім\'я повинно містити мінімум 2 символи');
    }
    if (!/^[A-Za-zА-Яа-яЇїЄєІіҐґ\s'-]+$/.test(nameTrimmed)) {
      errors.push('Ім\'я містить недопустимі символи');
    }
  }

  // Валидация email
  if (!email || typeof email !== 'string') {
    errors.push('Email обов\'язковий');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      errors.push('Невірний формат email');
    }
  }

  return errors;
}

/**
 * Очистка и форматирование телефона
 * Сохраняет + если он есть в начале
 */
function formatPhone(phone) {
  if (!phone) return '';
  const phoneTrimmed = phone.trim();
  
  // Если начинается с +, сохраняем его
  if (phoneTrimmed.startsWith('+')) {
    const digits = phoneTrimmed.substring(1).replace(/\D/g, '');
    return '+' + digits;
  }
  
  // Иначе только цифры
  return phoneTrimmed.replace(/\D/g, '');
}

export async function POST(request) {
  console.log('🔵 [API] Запит отримано');
  
  try {
    const body = await request.json();
    console.log('🔵 [API] Тіло запиту:', JSON.stringify(body, null, 2));
    const { phone, name, email, utm } = body;

    // Валидация данных
    console.log('🔵 [API] Початок валідації...');
    const validationErrors = validateFormData(phone, name, email);
    if (validationErrors.length > 0) {
      console.log('🔴 [API] Помилки валідації:', validationErrors);
      return NextResponse.json(
        { success: false, error: validationErrors[0] },
        { status: 400 }
      );
    }
    console.log('✅ [API] Валідація пройдена');

    // Получаем webhook URL из переменных окружения
    let webhookUrl = process.env.BITRIX24_WEBHOOK_URL;
    
    // Убираем кавычки если они есть
    if (webhookUrl) {
      webhookUrl = webhookUrl.trim().replace(/^["']|["']$/g, '');
    }
    
    console.log('🔵 [API] Webhook URL (raw):', webhookUrl ? `${webhookUrl.substring(0, 50)}...` : 'НЕ НАЛАШТОВАНО');
    console.log('🔵 [API] Всі змінні оточення:', Object.keys(process.env).filter(k => k.includes('BITRIX')).join(', ') || 'немає');

    if (!webhookUrl) {
      console.error('🔴 [API] BITRIX24_WEBHOOK_URL не налаштовано в .env.local');
      console.error('🔴 [API] Перевірте, що файл .env.local існує в корені проекту');
      console.error('🔴 [API] Перевірте, що в ньому є рядок: BITRIX24_WEBHOOK_URL=... (БЕЗ кавичок!)');
      console.error('🔴 [API] Перезапустіть сервер після зміни .env.local');
      return NextResponse.json(
        { success: false, error: 'Помилка конфігурації сервера: BITRIX24_WEBHOOK_URL не налаштовано. Перевірте .env.local та перезапустіть сервер.' },
        { status: 500 }
      );
    }

    // Обрабатываем URL: добавляем или заменяем метод на crm.lead.add
    if (webhookUrl.includes('crm.lead.add')) {
      // Если уже есть правильный метод, оставляем как есть
      console.log('🔵 [API] URL вже містить crm.lead.add');
    } else if (webhookUrl.endsWith('/')) {
      // Если заканчивается на /, добавляем метод
      webhookUrl = webhookUrl + 'crm.lead.add';
      console.log('🔵 [API] Додано метод crm.lead.add до URL');
    } else if (webhookUrl.match(/\/crm\.\w+\.\w+(\.json)?$/)) {
      // Если есть другой метод (например crm.deal.add.json), заменяем его
      webhookUrl = webhookUrl.replace(/\/crm\.\w+\.\w+(\.json)?$/, '/crm.lead.add');
      console.log('🔵 [API] Замінено метод на crm.lead.add');
    } else {
      // Если метода нет, добавляем через /
      webhookUrl = webhookUrl.replace(/\/$/, '') + '/crm.lead.add';
      console.log('🔵 [API] Додано /crm.lead.add до URL');
    }
    
    console.log('🔵 [API] Фінальний Webhook URL:', webhookUrl.substring(0, 60) + '...');

    // Форматируем телефон
    const formattedPhone = formatPhone(phone);
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    console.log('🔵 [API] Відформатовані дані:', {
      phone: formattedPhone,
      name: trimmedName,
      email: trimmedEmail,
      utm: utm
    });

    // Формируем данные для Bitrix24
    // Bitrix24 API ожидает данные в формате fields
    const bitrixData = {
      fields: {
        TITLE: `Лід з лендингу: ${trimmedName}`,
        NAME: trimmedName,
        PHONE: [{ VALUE: formattedPhone, VALUE_TYPE: 'WORK' }],
        EMAIL: [{ VALUE: trimmedEmail, VALUE_TYPE: 'WORK' }],
        // UTM параметры (если в вашем Bitrix24 настроены пользовательские поля)
        UTM_SOURCE: utm?.utm_source || '',
        UTM_MEDIUM: utm?.utm_medium || '',
        UTM_CAMPAIGN: utm?.utm_campaign || '',
        UTM_CONTENT: utm?.utm_content || '',
        UTM_TERM: utm?.utm_term || '',
        // Дополнительная информация
        SOURCE_ID: 'WEB', // Источник - веб-сайт
        COMMENTS: `UTM метки: source=${utm?.utm_source || 'немає'}, medium=${utm?.utm_medium || 'немає'}, campaign=${utm?.utm_campaign || 'немає'}`,
      },
    };

    console.log('🔵 [API] Дані для Bitrix24:', JSON.stringify(bitrixData, null, 2));

    // Отправляем в Bitrix24 с таймаутом
    console.log('🔵 [API] Відправка запиту до Bitrix24...');
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 секунд таймаут

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bitrixData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log('🔵 [API] Відповідь від Bitrix24:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = 'Помилка відправки в Bitrix24';
        
        // Пытаемся распарсить ошибку от Bitrix24
        try {
          const errorJson = JSON.parse(errorText);
          if (errorJson.error_description) {
            errorMessage = errorJson.error_description;
          } else if (errorJson.error) {
            errorMessage = errorJson.error;
          }
        } catch (e) {
          // Если не удалось распарсить, используем текст ошибки
          console.error('Помилка Bitrix24 (текст):', errorText);
        }

        console.error('Помилка Bitrix24:', {
          status: response.status,
          statusText: response.statusText,
          error: errorText,
        });

        return NextResponse.json(
          { success: false, error: errorMessage },
          { status: response.status }
        );
      }

      const result = await response.json();
      console.log('🔵 [API] Результат від Bitrix24:', JSON.stringify(result, null, 2));

      // Проверяем ответ Bitrix24 на наличие ошибок
      if (result.error) {
        console.error('🔴 [API] Помилка Bitrix24 API:', result);
        return NextResponse.json(
          { 
            success: false, 
            error: result.error_description || result.error || 'Помилка відправки в Bitrix24' 
          },
          { status: 400 }
        );
      }

      console.log('✅ [API] Лід успішно відправлено в Bitrix24, ID:', result.result);
      return NextResponse.json({
        success: true,
        data: result,
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        console.error('Таймаут запиту до Bitrix24');
        return NextResponse.json(
          { success: false, error: 'Таймаут запиту. Спробуйте пізніше.' },
          { status: 504 }
        );
      }

      throw fetchError;
    }
  } catch (error) {
    console.error('🔴 [API] Помилка обробки запиту:', error);
    console.error('🔴 [API] Stack trace:', error.stack);
    
    // Более детальная обработка ошибок
    if (error instanceof SyntaxError) {
      console.error('🔴 [API] Помилка парсингу JSON');
      return NextResponse.json(
        { success: false, error: 'Помилка формату даних' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: `Внутрішня помилка сервера: ${error.message}` },
      { status: 500 }
    );
  }
}


