import React from "react";
import styles from "./index.module.scss";

export function Input(props) {
  const { onChange, value, placeholder, label, name, data, required, errors } =
    props;
  return (
    <>
      <label className={styles.wrapper}>
        <span className={styles.text}>{label}</span>
        <input
          className={styles.input}
          onChange={onChange}
          value={data[name]}
          placeholder={placeholder}
          label={label}
          name={name}
          required={required}
          data-error={!!errors[name]}
        />
      </label>
      {errors[name] && <span className={styles.error}>{errors[name]}</span>}
    </>
  );
}
