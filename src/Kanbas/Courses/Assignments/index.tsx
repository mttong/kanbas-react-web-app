import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import React from "react";
import "./index.css"; 

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <>
          <div className="assignment-form">
        <div className="left-controls">
          <button type="button" className="form-button"> Group+</button>
          <button type="button" className="form-button"> Assignment+</button>
          <select id="edit-assignment-dates" className="form-select">
            <option value="EDIT-ASSIGNMENT-DATES">Edit Assignment Dates</option>
            <option value="OTHER-OPTION">Other Option</option>
          </select>
        </div>
        <input 
          id="text-fields-search-assignments" 
          placeholder="Search for Assignments"
          className="search-input"
        />
      </div>
      <hr></hr>
      
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item" key={assignment._id}>
                <div>
                  <FaEllipsisV className="me-2" />
                  <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    {assignment.title} 
                  </Link>
                   {' > '} Due: {assignment.dueDate} | Total Points: {assignment.totalPoints}
                </div>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Assignments;
