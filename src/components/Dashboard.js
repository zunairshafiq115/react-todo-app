import React from "react";
import { useStore } from 'react-stores';
import { UserStore } from "../store/UserStore";
import { Button, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const user = useStore(UserStore);
  if (user.auth) {
    return (
      <div><h1>Wellcome {user.nameState.username}</h1>
      <h3>{user.secondState.data.map((data, index) => (
            <Row key={index} className="list-todo">
              <Col>{index}</Col>
              <Col>{data.name} </Col>
              <Col>{data.task}</Col>
            </Row>
          ))}</h3>
</div>
    )
  }
  return (
    <div>
      <h1>Please Login</h1>
    </div>
  );
};

export default Dashboard;
