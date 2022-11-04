import React from "react";
// syncfusion chart component
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
  Inject,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
// dummy data
import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
// context
import { useStateContext } from "../../context/ContextProvider";

const LineChart = () => {
  const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
      legendSettings={{ background: "white" }}
    >
      <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
