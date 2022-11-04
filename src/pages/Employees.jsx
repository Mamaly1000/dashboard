import React from "react";

// packages
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
  Search,
  Toolbar,
  PdfExport,
  ExcelExport,
  ContextMenu,
  Edit,
  Sort,
} from "@syncfusion/ej2-react-grids";

// data
import { employeesData, contextMenuItems, employeesGrid } from "../data/dummy";

// components
import { Header } from "../components";

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg  m-2 md:m-10 mt-20 p-2 pb-5 md:p-10 bg-white rounded-3xl ">
      <Header title="Employees" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        allowExcelExport
        allowPdfExport
        editSettings={editing}
        contextMenuItems={contextMenuItems}
        style={{ border: "0 solid #fff" }}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            ContextMenu,
            Sort,
            Toolbar,
            Page,
            Search,
            PdfExport,
            Edit,
            ExcelExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
