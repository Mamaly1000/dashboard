import React from "react";
// kanban pakage
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
// dummy data
import { kanbanData, kanbanGrid } from "../data/dummy";
// component
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg pb-5 m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Kanban" category="App" />
      <KanbanComponent
        id="kanban"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
        keyField="Status"
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
