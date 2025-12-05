# Миграция на Next.js - Инструкция

Проект успешно мигрирован с Create React App на Next.js 14 (App Router).

## Что изменилось

### Структура проекта
- Создана папка `app/` с `layout.js` и `page.js`
- Компоненты остались в `src/components/`
- API routes созданы в `app/api/send-lead/`
- Конфигурация: `next.config.js`, `jsconfig.json`

### Изменения в компонентах
- Добавлен `'use client'` директив в компоненты с хуками React (useState, useEffect) и обработчиками событий
- Обновлена форма регистрации для работы с Next.js API route

### API для Bitrix24
- Создан API route: `app/api/send-lead/route.js`
- Webhook URL настраивается через переменную окружения `BITRIX24_WEBHOOK_URL`

## Установка и запуск

### 1. Установите зависимости
```bash
npm install
```

### 2. Настройте переменные окружения
Создайте файл `.env.local` на основе `.env.local.example`:
```bash
BITRIX24_WEBHOOK_URL=https://your-domain.bitrix24.ru/rest/1/your-webhook-code/crm.lead.add
```

### 3. Запустите dev сервер
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### 4. Сборка для production
```bash
npm run build
npm start
```

## Команды

- `npm run dev` - запуск dev сервера
- `npm run build` - сборка для production
- `npm run start` - запуск production сервера
- `npm run lint` - проверка кода линтером

## Google Tag Manager

GTM уже подключен в `app/layout.js` с ID: `GTM-529CXQHB`

## Что дальше

1. ✅ Миграция на Next.js - завершена
2. ⏳ Настройка Bitrix24 Webhook (добавить URL в .env.local)
3. ⏳ Настройка SEO (мета-теги, Open Graph, структурированные данные)
4. ⏳ Оптимизация изображений (next/image)
5. ⏳ Настройка событий GTM

## Важные замечания

- Все компоненты с хуками React должны иметь `'use client'` директиву
- API routes работают только на сервере (не требуют 'use client')
- Изображения из `src/images/` импортируются как модули
- Статические файлы (favicon, manifest) остаются в `public/`


