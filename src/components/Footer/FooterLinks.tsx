import styles from "./Footer.module.css";

const FooterLinks: React.FC = () => {
  return (
    <div className={styles.links}>
      <a href="#" className={styles.link}>
        Согласие на обработку данных
      </a>

      <a href="#" className={styles.link}>
        Служба поддержки
      </a>

      <a href="#" className={styles.link}>
        Политика конфиденциальности
      </a>
    </div>
  );
};

export default FooterLinks;
