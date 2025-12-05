import styles from "./Header.module.css";
import LogoSRC from "../../../images/logo.svg"
import { getImageSrc } from "../../../utils/imageHelper";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={getImageSrc(LogoSRC)} alt="Logo" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
