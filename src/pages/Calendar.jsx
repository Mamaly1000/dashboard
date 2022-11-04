import React from "react";

// schedule pakage
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
// calender pakage
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// dummy data
import { scheduleData } from "../data/dummy";
// components
import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg m-2 pb-5 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Calender" category="App" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021,0,10)}
      >
        <Inject
          services={[Day, Week, Month, Agenda, Resize, WorkWeek, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
