import React from "react";

const MonthItem = ({ month }) => {
  return (
    <div key={month} className="month-cell">
      {month}
    </div>
  );
};

export default MonthItem;
