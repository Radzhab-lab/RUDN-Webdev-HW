import { useState } from "react";
import styles from "./Catalog.module.css";

type OrderControlProps = {
  price: number; 
};

const OrderControl: React.FC<OrderControlProps> = ({ price }) => {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => Math.max(prev - 1, 0));

  if (count === 0) {
    return (
      <button className={styles.button} onClick={increase}>
        Заказать
      </button>
    );
  }

  return (
    <div className={styles.counter}>
      <button className={styles.counterBtn} onClick={decrease}>
        −
      </button>

      <span className={styles.count}>{count}</span>

      <button className={styles.counterBtn} onClick={increase}>
        +
      </button>

      <span className={styles.total}>
        {count * price} ₽
      </span>
    </div>
  );
};

export default OrderControl;
