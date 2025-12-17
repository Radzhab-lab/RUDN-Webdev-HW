import styles from "./Footer.module.css";

const FooterCopyright: React.FC = () => {
  return (
    <div className={styles.copy}>
      © nazvaniesaita.ru, 2054 | Название компании или ИП ОГРН 000000000000
    </div>
  );
};

export default FooterCopyright;
