
import React, { useState } from 'react';

import Add from "../Add";
import { start } from "repl";
import { useParams } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
import ReduxExamples from './ReduxExamples';
import HelloRedux from './ReduxExamples/HelloRedux';
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';
import TodoList from './ReduxExamples/todos/TodoList';
import TodoForm from './ReduxExamples/todos/TodoForm';
import TodoItem from './ReduxExamples/todos/TodoItem';

function sayHello() {
    alert("Hello");
  }


const Assignment4 = () => {
    return(
      <>
        <h1>Assignment 4</h1>
        <ClickEvent />
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <ReduxExamples/>
        <HelloRedux/>
        <CounterRedux/>
        <AddRedux/>
        <TodoList/>
      </>
    );
  };
  export default Assignment4;

