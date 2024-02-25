import React, { useState } from "react";
import "./index.css";
import modules from "../../Database/modules.json";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
}

function ModuleList() {
      // Inline styles for the buttons and select
  const buttonStyle = {
    marginRight: '8px',
    padding: '8px 16px',
    backgroundColor: 'red', // Example color, adjust as needed
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const selectStyle = {
    marginRight: '8px',
    padding: '8px',
    cursor: 'pointer',
  };

  const collapseAll = () => console.log("Collapse All clicked");
  const viewProgress = () => console.log("View Progress clicked");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected option:", event.target.value);
  };
  const addModule = () => console.log("Add Module clicked");

  const { courseId } = useParams<{ courseId: string }>();
  const modulesList = (modules as Module[]).filter((module: Module) => module.course === courseId);
  // Use a Set to keep track of open modules' IDs
  const [openModules, setOpenModules] = useState<Set<string>>(new Set());

  // Toggle module's open/close state
  const toggleModule = (moduleId: string) => {
    setOpenModules(prevOpenModules => {
      const newOpenModules = new Set(prevOpenModules);
      if (newOpenModules.has(moduleId)) {
        newOpenModules.delete(moduleId);
      } else {
        newOpenModules.add(moduleId);
      }
      return newOpenModules;
    });
  };

  return (
    <>
    <br></br>
     <div style={{ marginBottom: '16px' }}>
        <button type="button" style={buttonStyle} onClick={collapseAll}>Collapse All</button>
        <button type="button" style={buttonStyle} onClick={viewProgress}>View Progress</button>
        <select id="select-one-genre" style={selectStyle} onChange={handleSelectChange}>
          <option value="PUBLISH-ALL">Publish All</option>
          <option value="OTHER-OPTION">Other Option</option>
        </select>
        <button type="button" style={{ ...buttonStyle, backgroundColor: 'green' }}>+ Module</button>
      </div>
      <hr></hr>

      <ul className="list-group wd-modules">
        {modulesList.map((module) => (
          <li key={module._id}
            className="list-group-item"
            onClick={() => toggleModule(module._id)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {openModules.has(module._id) && (
              <ul className="list-group">
                {module.lessons.map((lesson, lessonIndex) => (
                  <li className="list-group-item" key={lessonIndex}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;
