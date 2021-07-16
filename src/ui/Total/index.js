import React from "react";
import styles from "./index.module.scss";

export function Total() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <span className={styles.text}>Subtotal</span>
        <span className={styles.price}>400</span>
      </div>
      <div className={styles.column}>
        <span className={styles.text}>Shipping</span>
        <span className={styles.price}>Free</span>
      </div>
      <div className={styles.column}>
        <span className={styles.text}>Taxes</span>
        <span className={styles.price}>12</span>
      </div>
      <hr className={styles.line}></hr>
      <div className={styles.column}>
        <span className={styles.text__desc}>Total</span>
        <span className={styles.price__desc}>410</span>
      </div>
    </div>
  );
}
