import styles from "./Gallery.module.css";

const GalleryHeader: React.FC = () => {
  return (
    <div className={styles["gallery__header"]}>
      <h2 className={styles["gallery__title"]}>
        Более 3.000 заказов за два года
      </h2>
      <p className={styles["gallery__subtitle"]}>
        Посмотрите реальные фотографии заказов из нашего Instagram
      </p>
    </div>
  );
};

export default GalleryHeader;
