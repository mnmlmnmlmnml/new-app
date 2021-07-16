import React from "react";
import styles from "./index.module.scss";

export function Card() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <h3 className={styles.text}>Order Summary</h3>
        <p>
          <a className={styles.link} href="#">
            edit order
          </a>
        </p>
      </div>
      <div className={styles.card}>
        <img className={styles.img} src="" alt="картинка товара"></img>
        <span className={styles.name}></span>
        <span className={styles.color}></span>
        <span className={styles.quantity}></span>
        <span className={styles.price}></span>
      </div>
      <hr className={styles.line}></hr>
    </div>
  );
}
