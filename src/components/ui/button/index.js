'use client';

import styles from "./Button.module.css";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button className={`${styles.button} ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
