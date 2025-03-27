import styles from "./Header.module.css";
import LogoSRC from "../../../images/logo.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={LogoSRC} alt="Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
