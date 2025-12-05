'use client';

import { useState } from "react";
import styles from "./RegistrationForm.module.css";
import { REGISTRATION_CONTENT } from "../../../constants/text";
import { getUTMParams } from "../../../utils/getUTM";

const RegistrationForm = () => {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors = {};

    // Валидация телефона
    const phoneTrimmed = phone.trim();
    if (!phoneTrimmed) {
      newErrors.phone = "Телефон обов'язковий";
    } else {
      let phoneDigits = '';
      let hasPlus = false;
      
      if (phoneTrimmed.startsWith('+')) {
        hasPlus = true;
        phoneDigits = phoneTrimmed.substring(1).replace(/\D/g, '');
      } else {
        phoneDigits = phoneTrimmed.replace(/\D/g, '');
      }
      
      const totalLength = hasPlus ? phoneDigits.length + 1 : phoneDigits.length;
      
      if (totalLength > 15) {
        newErrors.phone = "Телефон занадто довгий. Максимум 15 символів.";
      } else if (phoneDigits.length < 10) {
        newErrors.phone = "Телефон занадто короткий. Мінімум 10 цифр.";
      } else if (hasPlus && phoneTrimmed.length !== phoneDigits.length + 1) {
        newErrors.phone = "Після + можуть бути тільки цифри";
      } else if (!hasPlus && phoneTrimmed.length !== phoneDigits.length) {
        newErrors.phone = "Телефон може містити тільки цифри або + на початку";
      }
    }

    if (!/^[A-Za-zА-Яа-яЇїЄєІіҐґ\s]{2,}$/.test(name.trim())) {
      newErrors.name = "Ім'я повинно містити лише літери та мінімум 2 символи.";
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email.trim())) {
      newErrors.email = "Введіть коректну email-адресу.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);

    if (!validate()) {
      setLoading(false);
      return;
    }

    const utm = getUTMParams();

    const data = { phone, name, email, utm };

    console.log("📤 Відправка форми:", data);

    try {
      const response = await fetch('/api/send-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      setLoading(false);

      if (result.success) {
        setStatus("Дякуємо! Ваша заявка успішно відправлена.");
        setPhone("");
        setName("");
        setEmail("");
        setErrors({});
      } else {
        setStatus(result.error || "Сталася помилка під час відправки. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error('Помилка відправки:', error);
      setLoading(false);
      setStatus("Сталася помилка під час відправки. Спробуйте ще раз.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{REGISTRATION_CONTENT.title}</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          
          <input
            type="tel"
            placeholder={REGISTRATION_CONTENT.phone}
            className={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <input
            type="text"
            placeholder={REGISTRATION_CONTENT.name}
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}

          <input
            type="email"
            placeholder={REGISTRATION_CONTENT.mail}
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <button type="submit" className={styles.button} disabled={loading}>
            {loading ? "Відправляємо..." : REGISTRATION_CONTENT.button}
          </button>

          {status && <p className={styles.status}>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
