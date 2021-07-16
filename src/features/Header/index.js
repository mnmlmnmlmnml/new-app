import React from "react";
import styles from "./index.module.scss";
import svg from "./icons/basket.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <h2 className={styles.text}>Shop</h2>
      <div className={styles.wrapper}>
        <span className={styles.desc}>cart</span>
        <img className={styles.img} src={svg} alt="корзина" />
      </div>
    </div>
  );
}
