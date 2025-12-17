import styles from "./Header.module.css";

const HeaderAddress: React.FC = () => {
  return (
    <div className={styles.address}>
      <span className={styles.addressIcon}></span>
      <span>г. Санкт Петербург, <br />ул. Куйбышева 31</span>
    </div>
  );
};

export default HeaderAddress;
