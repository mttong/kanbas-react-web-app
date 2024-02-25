import React from 'react';
import { FaBell, FaStream, FaHome, FaChartBar, FaEnvelopeOpenText, FaClipboardList, FaTimesCircle } from 'react-icons/fa';
import "./index.css";


function StatusBar() {
  const items = [
    { icon: <FaClipboardList />, text: 'Import Existing Content' },
    { icon: <FaHome />, text: 'Import from Commons' },
    { icon: <FaStream />, text: 'Choose Home Page' },
    { icon: <FaBell />, text: 'View Course Stream' },
    { icon: <FaEnvelopeOpenText />, text: 'New Announcement' },
    { icon: <FaChartBar />, text: 'New Analytics' },
    { icon: <FaBell />, text: 'View Course Notifications' },
  ];

 // Dummy onClick handler for demonstration
   const handleButtonClick = () => console.log("Dummy Function RN");
  
   const todos = [
    { id: 1, text: 'Grade A1 - ENV + HTML', dueDate: 'Sep 18 at 11:59pm', points: 100 },
    { id: 2, text: 'Grade A2 - CSS + BOOTSTRAP', dueDate: 'Oct 2 at 11:59pm', points: 100 },
    { id: 3, text: 'Grade A3 - REACT + ROUTER', dueDate: 'Nov 4 at 11:59pm', points: 100 }
  ];

  return (
    <div className="status-bar">
      {items.map((item, index) => (
        <button key={index} className="status-bar-item" onClick={() => handleButtonClick()}>
          {item.icon}
          <span className="status-bar-text">{item.text}</span>
        </button>
      ))}


<h3 style={{ color: 'red' , borderBottom: '2px solid red', paddingBottom: '8px'}}>To Do</h3>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <span className="todo-due">{todo.dueDate}</span>
            <span className="todo-points">{todo.points} points</span>
          </li>
        ))}
      </ul>
    </div>

    
  );
}

export default StatusBar;
