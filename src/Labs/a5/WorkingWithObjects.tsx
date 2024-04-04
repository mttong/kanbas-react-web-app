import React, { useEffect, useState } from "react";
import axios from "axios";


function WorkingWithObjects() {
   // New module state
    const [module, setModule] = useState({
        id: 'module123',
        name: 'Introduction to Redux',
        description: 'Learn how to manage state in React applications using Redux.',
        course: 'React Development',
    });
    
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

      const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
      };


      const MODULE_URL = "http://localhost:4000/a5/module"


      const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
      };

      useEffect(() => {
       fetchAssignment();
      
      }, []);
    

  return (
    <div>
      <h2>Working With Objects</h2>

      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>

      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a className="btn btn-dark"
      href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>

      <h4>Retrieving Properties</h4>
      <a className = "btn btn-dark"
      href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>

        <h4>Get Module</h4>
      <a className="btn btn-dark"
      href="http://localhost:4000/a5/module">
        Get Module
      </a>

      <h4>Get Module Name</h4>
      <a className="btn btn-dark"
      href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a>

      <h4>Modifying Properties</h4>


      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <a className="btn"
      href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      
        <br></br>

        <input type="text"
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
        <a className="btn"
        href={`${MODULE_URL}/name/${module.name}`}>
            Update Module Name
        </a>

        <br></br>
        <input type="text"
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.description}/>
        <a className="btn"
        href={`${MODULE_URL}/description/${module.description}`}>
            Edit Module's Description
        </a>
      

    <br></br>
    <input
        type="number"
        onChange={(e) => 
            setAssignment({ ...assignment, score: Number(e.target.value) })}
        value={assignment.score}
      />
      <a className="btn" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
      </a>

<br></br>
      <input
        type="checkbox"
        onChange={(e) => 
            setAssignment({ ...assignment, completed: e.target.checked })}
        checked={assignment.completed}
      />
      <a className="btn" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
        Update Completed Status
      </a>
  

    
    </div>
  );
}
export default WorkingWithObjects;

