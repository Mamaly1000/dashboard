import React from "react";

// pakages
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Selection,
  Page,
  Edit,
  Inject,
  Toolbar,
  Sort,
  Filter,
  PdfExport,
  ExcelExport,
  ContextMenu,
  Search,
} from "@syncfusion/ej2-react-grids";

// data
import { customersData, customersGrid, contextMenuItems } from "../data/dummy";

// component
import { Header } from "../components";

const Customers = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg m-2 md:m-10 mt-20 p-2 pb-5 md:p-10 bg-white rounded-3xl ">
      <Header title="Customers" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete","Search"]}
        width="auto"
        style={{ border: "0 solid #fff" }}
        allowExcelExport
        allowPdfExport
        editSettings={editing}
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Toolbar,
            Page,
            Selection,
            Edit,
            Sort,
            Filter,
            PdfExport,
            ExcelExport,
            ContextMenu,
            Search,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
