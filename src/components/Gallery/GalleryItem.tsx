import styles from "./Gallery.module.css";
import type { GalleryItemProps } from "./Gallery.types";

const GalleryItem: React.FC<GalleryItemProps> = ({ image }) => {
  return (
    <div className={styles["gallery__item"]}>
      <img src={image.src} alt={image.alt} />
    </div>
  );
};

export default GalleryItem;
