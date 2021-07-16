import React from "react";
import styles from "./index.module.scss";

export function Button(props) {
  const { onClick, disabled, label, type } = props;
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {label}
    </button>
  );
}
