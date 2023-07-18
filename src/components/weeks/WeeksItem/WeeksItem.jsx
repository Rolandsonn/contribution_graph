import React from "react";
import styles from "./WeeksItem.module.scss";
const WeeksItem = ({ week }) => {
  return (
    <>
      <li className={styles.item}>{week}</li>
    </>
  );
};

export default WeeksItem;
