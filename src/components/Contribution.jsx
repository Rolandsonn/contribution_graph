import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchDate";
import img from "../assets/corner.svg";
import Months from "./months/MonthsList/MonthsList";
import Weeks from "./weeks";

const Contribution = () => {
  const [data, setData] = useState([]);
  const [selectedCell, setSelectedCell] = useState(null);
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const months = [
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
    "Январь",
    "Февраль",
    "Март",
  ];
  //. Получение данных и преобразование в массив состоящий из объектов
  useEffect(() => {
    fetchData().then((res) => {
      const contributionsArray = Object.entries(res).map(([date, count]) => ({
        date,
        count,
      }));
      setData(contributionsArray);
    });
  }, []);

  //. Условия на соответствие блоков цветам
  const getBlockColor = (count) => {
    if (count === 0) {
      return "no-contributions";
    } else if (count >= 1 && count <= 9) {
      return "color-1-9";
    } else if (count >= 10 && count <= 19) {
      return "color-10-19";
    } else if (count >= 20 && count <= 29) {
      return "color-20-29";
    } else {
      return "color-30-plus";
    }
  };

  //. Формат даты по макету
  const formatDate = (date) => {
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return date.toLocaleString("ru-RU", options);
  };

  //. Основная логика генерирования блоков
  const generateGraph = () => {
    const today = new Date();
    const graph = [];

    graph.push(<Months months={months} />);
    graph.push(<Weeks weeks={daysOfWeek} />);

    for (let i = 0; i < 357; i++) {
      const currentDate = new Date(today);

      currentDate.setDate(today.getDate() - (357 - i));

      let count = 0;
      const dataPoint = data.find((item) => {
        return item.date === currentDate.toISOString().slice(0, 10);
      });

      if (dataPoint) {
        count = dataPoint.count;
      }

      const isSelected = selectedCell === i;
      const className = `graph-cell ${
        isSelected ? "selected" : ""
      } ${getBlockColor(count)}`;

      graph.push(
        <div
          onClick={() => {
            if (selectedCell === i) {
              setSelectedCell(null);
            } else {
              setSelectedCell(i);
            }
          }}
          key={i}
          className={className}
        >
          {isSelected && (
            <div className="tooltip">
              <div className="tooltip__date">
                <p className="tooltip__count">{count} Contributions</p>
                {formatDate(currentDate)}
              </div>
              <img src={img} alt="corner" className="tooltip__corner" />
            </div>
          )}
        </div>
      );
    }
    return graph;
  };

  return (
    <>
      <div className="contribution-graph">{generateGraph()}</div>
    </>
  );
};

export default Contribution;
