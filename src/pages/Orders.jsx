import React from "react";

// packages
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";

// data
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";

// components
import { Header } from "../components";

// context
import { useStateContext } from "../context/ContextProvider";

const Orders = () => {
  const { currentMode } = useStateContext();
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg  m-2 md:m-10 mt-20 p-2 pb-5 md:p-10 bg-white rounded-3xl ">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        contextMenuItems={contextMenuItems}
        style={{
          backgroundColor: currentMode === "Dark" ? "#33373e" : "#fff",
          border: "0 solid #fff",
        }}
        editSettings={editing}
        allowExcelExport
        allowPdfExport
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            ContextMenu,
            Sort,
            Edit,
            PdfExport,
            ExcelExport,
            Filter,
            Page,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
