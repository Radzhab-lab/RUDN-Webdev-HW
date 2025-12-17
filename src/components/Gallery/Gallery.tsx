import styles from "./Gallery.module.css";
import GalleryHeader from "./GalleryHeader";
import GalleryGrid from "./GalleryGrid";
import { galleryImages } from "./images";

const Gallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      <GalleryHeader />
      <GalleryGrid images={galleryImages} />
    </div>
  );
};

export default Gallery;
