import styles from "./Catalog.module.css";
import OrderControl from "./OrderControl";

type CatalogCardProps = {
  image: string;
  title: string;
  text: string;
};

const CatalogCard: React.FC<CatalogCardProps> = ({
  image,
  title,
  text,
}) => {
  return (
    <article className={styles["catalog-card"]}>
      <figure className={styles["catalog-img-wrap"]}>
        <img src={image} alt={title} />
      </figure>

      <div className={styles["catalog-details"]}>
        <h3 className={styles["catalog-title"]}>{title}</h3>
        <p className={styles["catalog-text"]}>{text}</p>

        <footer className={styles["catalog-footer"]}>
          <span className={styles["catalog-price"]}>150 ₽/шт.</span>
         <OrderControl price={150} />
        </footer>
      </div>
    </article>
  );
};

export default CatalogCard;
