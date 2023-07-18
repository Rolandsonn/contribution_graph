import React from "react";
import MonthItem from "../MonthItem";

const MonthsList = ({ months }) => {
  return (
    <div className="months-row">
      {months.map((month) => (
        <MonthItem key={month} month={month} />
      ))}
    </div>
  );
};

export default MonthsList;
