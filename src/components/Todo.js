import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./style.css";
import { useStore } from "react-stores";
import { UserStore } from "../store/UserStore";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const user = useStore(UserStore);
  
  const removeTodo = (index) => {
    if(index <=0){
   
    console.log('index........')}

else
    console.log("Could not find index");
  };

  if (user.todo) {  
    console.log(user.secondState.data)
    return (
      <div>
        <h1>
          Wellcome {user.nameState.username} {user.secondState.lastname}
        </h1>
        <div>
          {user.secondState.data.map((data, index) => (
            <Row key={index} className="list-todo">
              <Col>{index}</Col>
              <Col>{data.name} </Col>
              <Col>{data.task}</Col>
              <Col>
                <Button onClick={removeTodo}>Remove</Button>
              </Col>
            </Row>
          ))}
        </div>
        <div></div>
      </div>
    );
  }
  return (
    <>
      <h1>No todo found</h1>
    </>
  );
};

export default Todo;

// import React from "react";
// import { Button, Col, Row } from "react-bootstrap";
// import './style.css';

// const Todo = ({ todos, removeTodo }) => {
//   return (
//     <>
//     <div>
//       {todos.map((todo, index) =>(
//       <Row key={index} className="list-todo">
//         <Col key={todo.id}>{todo.text}</Col>
//         <Col>
//           <Button onClick={() => removeTodo(todo.id)}>Remove</Button>
//         </Col>
//       </Row>
//       ))}
//   </div>

//     </>
//   );
// };

// export default Todo;
