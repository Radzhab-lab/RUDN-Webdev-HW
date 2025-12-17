import styles from "./Header.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderAddress from "./HeaderAddress";
import HeaderContacts from "./HeaderContacts";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderLogo />
        <div className={styles.container__section} >

        <HeaderAddress />
        <HeaderContacts />
        </div>
      </div>
    </header>
  );
};

export default Header;
