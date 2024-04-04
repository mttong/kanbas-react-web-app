
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import courses  from "../Database/courses.json";
import React from 'react'; 
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import {useState, useEffect} from "react";
import axios from "axios";


const API_BASE = process.env.REACT_APP_API_BASE;
function Courses() {
  const { courseId } = useParams();
  const COURSES_API = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState<any>({ _id: "" });

  const [isNavigationOpen, setIsNavigationOpen] = useState(true); // Added state for navigation open/close

  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();


   // Handle toggle of navigation
   const toggleNavigation = () => {
    setIsNavigationOpen(!isNavigationOpen); // Toggle the state
  };


  //NOT SURE IF THESE R STILL NECESSARY 
   // Extract the current section from the URL path
   const pathSections = location.pathname.split('/'); // This will create an array of path segments

const currentSection = pathSections[4] || 'Home'; // Default to 'Home' if the array is empty
// Check if the 6th index exists (5th in 0-indexed array)
const additionalSection = pathSections[5] && pathSections[5] !== "" ? pathSections[5] : null;

  return (
    <div>
      <h1>
        <button onClick={toggleNavigation} className="btn-primary" style={{ background: 'none', border: 'none', outline: 'none' }}> 
        <HiMiniBars3 /> 
        </button>

      
        Course {'>'} {course?._id} {'>'} {currentSection} {additionalSection ? ` > ${additionalSection}` : ""}
         </h1>
      
      {isNavigationOpen && <CourseNavigation /> }
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