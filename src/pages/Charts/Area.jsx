import React from "react";
// syncfusion chart component
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  AreaSeries,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
// dummy data
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
// component
import { Header } from "../../components";
// context
import { useStateContext } from "../../context/ContextProvider";

const Area = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondry-dark-bg rounded-3xl">
      <Header title="Inflation Rate" category="Chart" />
      <ChartComponent
        id="area-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373e" : "#fff"}
        legendSettings={{ background: "white" }}
      >
        <Inject services={[DateTime, Legend, SplineAreaSeries, AreaSeries]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
