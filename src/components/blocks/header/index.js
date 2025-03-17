import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/assets/images/logo.svg" alt="Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
