import React from "react";

import { Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = ({ data, states }) => {
  console.log(data, states);
  console.log(data.confirmed, data.deaths, data.recovered);

  const barChart = data ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)"
            ],
            data: [data.confirmed,data.recovered, data.deaths]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${states}` }
      }}
    />
  ) : null;

  return (<div className={styles.container}>{barChart}</div>);
};

export default Chart;
