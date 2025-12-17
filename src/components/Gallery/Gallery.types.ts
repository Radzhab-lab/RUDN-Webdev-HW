export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

export type GalleryItemProps = {
  image: GalleryImage;
};

export type GalleryGridProps = {
  images: GalleryImage[];
};
