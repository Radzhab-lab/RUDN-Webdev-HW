import styles from "./Catalog.module.css";
import CatalogCard from "./CatalogCard";

import {
  muffin1,
  muffin2,
  muffin3,
  muffin4,
  muffin5,
  muffin6,
  muffin7,
  muffin8,
  muffin9,
} from "./images";

const CatalogGrid: React.FC = () => {
  return (
    <div className={styles["catalog-grid"]}>
      <CatalogCard
        image={muffin1}
        title="Кремовый замок"
        text="Нежный крем любого цвета на выбор, ванильная основа"
      />

      <CatalogCard
        image={muffin2}
        title="Малиновый рай"
        text="Воздушный крем, темная основа и ягода малины"
      />

      <CatalogCard
        image={muffin3}
        title="Фейерверк"
        text="Разноцветный крем, с бисквитной основой"
      />

      <CatalogCard
        image={muffin4}
        title="Мыс безумия"
        text="Разноцветная основа, стружка и нежный крем"
      />

      <CatalogCard
        image={muffin5}
        title="Шоколадный мир"
        text="Ореховая стружка, нежный крем и шоколадная основа"
      />

      <CatalogCard
        image={muffin6}
        title="Слезы дракона"
        text="Нежный крем любого цвета на выбор, вафельная основа"
      />

      <CatalogCard
        image={muffin7}
        title="Летняя фантазия"
        text="Украшения в форме сердец, для любимого человека"
      />

      <CatalogCard
        image={muffin8}
        title="Облачная сказка"
        text="Светлая основа, нежный крем со стружкой сверху"
      />

      <CatalogCard
        image={muffin9}
        title="Темный рыцарь"
        text="Темная основа, нежный крем и вкусные шарики"
      />
    </div>
  );
};

export default CatalogGrid;
