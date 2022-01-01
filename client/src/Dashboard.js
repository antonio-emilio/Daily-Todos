import React, { Fragment } from "react";
import "./App.css";

//Componentes
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import PopulationChart from "./components/PopulationChart";
function Dashboard() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo></InputTodo>
        <ListTodos></ListTodos>
        <PopulationChart />
      </div>
    </Fragment>


  );
}

export default Dashboard;
