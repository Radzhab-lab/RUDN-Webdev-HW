import styles from "./Catalog.module.css";
import CatalogGrid from "./CatalogGrid";

const Catalog: React.FC = () => {
  return (
    <div className="catalog-container">
      <section className={styles["catalog-section"]}>
        <h2 className={styles["catalog-heading"]}>
          Для любых событий и дорогих вам людей
        </h2>

        <CatalogGrid />
      </section>
    </div>
  );
};

export default Catalog;
