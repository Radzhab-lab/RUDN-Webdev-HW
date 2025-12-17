import styles from "./Header.module.css";

const HeaderContacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <a href="tel:88128449549" className={styles.phone}>
        8 (812) 844-95-49
      </a>
      <span className={styles.time}>
        Ежедневно с 9:00 до 20:00
      </span>
    </div>
  );
};

export default HeaderContacts;
