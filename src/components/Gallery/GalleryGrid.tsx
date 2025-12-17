import styles from "./Gallery.module.css";
import GalleryItem from "./GalleryItem";
import type { GalleryGridProps } from "./Gallery.types";

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  return (
    <div className={styles["gallery__grid"]}>
      {images.map((image) => (
        <GalleryItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default GalleryGrid;
