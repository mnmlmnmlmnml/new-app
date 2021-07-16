import React from "react";
import styles from "./index.module.scss";

export function Card(props) {
  const { data } = props;
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
      {data.map((item) => (
        <div className={styles.cart}>
          <img
            className={styles.img}
            src={item.img}
            alt="картинка товара"
          ></img>
          <div className={styles.card}>
            <span className={styles.desc__bold}>{item.text}</span>
            <span className={styles.desc}>{item.name}</span>
            <span className={styles.desc}>{item.color}</span>
            <span className={styles.desc}>Quantity: {item.quantity}</span>
          </div>
          <div>
            <span className={styles.desc}>{item.price}</span>
          </div>
        </div>
      ))}
      <hr className={styles.line}></hr>
    </div>
  );
}
