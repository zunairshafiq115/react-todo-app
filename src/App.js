import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="todo-app">
      <Nav className="justify-content-center" variant="pills" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/add-todo-list">Todo List</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/show-todo">Todo</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/dashboard">Dashboard</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
