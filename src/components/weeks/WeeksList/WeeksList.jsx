import React from "react";
import WeeksItem from "../WeeksItem";
import styles from "./WeekList.module.scss";
const WeeksList = ({ weeks }) => {
  return (
    <>
      <ul className={styles.list}>
        {weeks.map((week) => (
          <WeeksItem key={week} week={week} />
        ))}
      </ul>
    </>
  );
};

export default WeeksList;
