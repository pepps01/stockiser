import React, { useState } from "react";
import { Chart } from "react-charts";
function MyChart() {
  const data = React.useMemo(
    () => [
      [
        [1, 5],
        [2, 6],
        [3, 3],
        [4, 5],
        [5, 7],
        [6, 8],
        [7, 8],
        [8, 7],
        [9, 6],
        [10, 4],
      ],
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default MyChart;
