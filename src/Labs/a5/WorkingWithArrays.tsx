import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
      });

      const [todos, setTodos] = useState<any[]>([]);

      const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
      };
    
      const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
      };
      const removeTodo = async (todo :any) => {
        const response = await axios
          .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
      };

      const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      };
    
      const fetchTodoById = async (id : Number ) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
      };
    
      const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };
    
      const deleteTodo = async (todo: any) => {
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
      };
      const updateTodo = async () => {
        const response = await axios.put(`${API}/${todo.id}`, todo);
        setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      };

      useEffect(() => {
        fetchTodos();
      }, []);
    

    return (
      <div>
        <h2>Working with Arrays</h2>

        <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => fetchTodoById(todo.id)}>Edit</button>
            <button onClick={() => removeTodo(todo)}>Remove</button>
            {todo.title}
          </li>
        ))}
      </ul>


      <h4>Retrieving Arrays</h4>
      <a className="btn btn-primary" href={API}>
        Get Todos
      </a>

      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a className="btn btn-success" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>


      <textarea
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <input
        value={todo.due}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <label>
        <input
          value={todo.completed.toString()}
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>
      <br />
      <button onClick={postTodo}> Post Todo </button>
      <br />
      <button onClick={updateTodo}>Update Todo</button>

      
      <br />
      <button onClick={createTodo}>Create Todo</button>

      



  <h3>Filtering Array Items</h3>
  <a className="btn btn-success"
  href={`${API}?completed=true`}>
    Get Completed Todos
  </a>

  <h3>Creating new Items in an Array</h3>
  <a className="btn btn-success"
  href={`${API}/create`}>
    Create Todo
  </a>

  <h3>Deleting from an Array</h3>
      <a 
      className="btn btn-danger"
      href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>

      
      <br />
      <button onClick={() => deleteTodo(todo)} className="btn btn-danger">
        Delete
      </button>
   

      <h2>Working with Arrays</h2>
      <input
        type="number"
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: parseInt(e.target.value),
          })
        }
      />
      <br></br>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <h3>Updating an Item in an Array</h3>
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>
      
      <br />
      <button onClick={updateTitle}>Update Title</button>

     <br></br> 
     <br></br>


      <h3>Editing Completed and Description</h3>
      <input
        type="text"
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Update Description
      </a>
      <br />
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
      />
      <a
        className="btn btn-primary"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Update Completed
      </a>




      </div>

    );
  }
  export default WorkingWithArrays;
  
  