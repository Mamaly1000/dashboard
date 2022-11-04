import React from "react";
// text editor
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
// dummy data
import { EditorData } from "../data/dummy";
// component
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="dark:text-gray-200 dark:bg-secondry-dark-bg pb-5  m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor,Image,Link,Toolbar,QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
