import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import React, { useState } from 'react';
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "../Add";
import TodoList from "./todos/TodoList";
import { start } from "repl";
import { useParams } from "react-router";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LabState } from "../store"; 

function Assignment3() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
 return (
   <div>
     <h1>Assignment 3</h1>
     <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <PathParameters/>
     <JavaScript/>
     <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
     <TodoList/>

  


   </div>
 )
}
export default Assignment3;

