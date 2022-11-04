import React from "react";
// importing charts requirements
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "./../../data/dummy";
import { useStateContext } from "../../context/ContextProvider";
import { Padding } from "@syncfusion/ej2/charts";

const Stacked = ({ width, height }) => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: "#f4f4f4" }}
      highlightColor={
        currentMode === "Dark" ? "rgba(255 255 255/.2)" : "rgba(0 0 0 /.2)"
      }
      animationComplete={true}
      allowExport={true}
      background={currentMode === "Dark" ? "#33373e" : "#fff"}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
