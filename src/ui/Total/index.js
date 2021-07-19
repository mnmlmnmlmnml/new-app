import React from "react";
import styles from "./index.module.scss";

export function Total(props) {
  const { sum, taxes, shipping } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <span className={styles.text}>Subtotal</span>
        <span className={styles.price}>{sum} $</span>
      </div>
      <div className={styles.column}>
        <span className={styles.text}>Shipping</span>
        <span className={styles.price}>
          {shipping === 0 ? "Free" : shipping}
        </span>
      </div>
      <div className={styles.column}>
        <span className={styles.text}>Taxes</span>
        <span className={styles.price}>{taxes} $</span>
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.column}>
        <span className={styles.text__desc}>Total</span>
        <span className={styles.price__desc}>{sum + taxes} $</span>
      </div>
    </div>
  );
}
