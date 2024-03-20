
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import courses  from "../Database/courses.json";
import React from 'react'; 
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

interface Course {
    _id: string;
    name: string;
    number : string;
    startDate : string;
    endDate : string; 
    image : string
  }

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams<{courseId: string}>();


  const course = courses.find((course : Course) => course._id === courseId);
  const location = useLocation();

   // Extract the current section from the URL path
   const pathSections = location.pathname.split('/'); // This will create an array of path segments

const currentSection = pathSections[4] || 'Home'; // Default to 'Home' if the array is empty
// Check if the 6th index exists (5th in 0-indexed array)
const additionalSection = pathSections[5] && pathSections[5] !== "" ? pathSections[5] : null;

  return (
    <div>
      <h1><HiMiniBars3 /> Course {'>'} {course?._id} {'>'} {currentSection} {additionalSection ? ` > ${additionalSection}` : ""} </h1>
      
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} /> 
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;