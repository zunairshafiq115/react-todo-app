import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MainComponent from "./components/MainComponent";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/add-todo-list" element={<TodoList />} />
      <Route path="/show-todo" element={<Todo />} />
      <Route path="/dashboard" element={<MainComponent/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
