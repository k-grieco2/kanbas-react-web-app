import React, { useEffect, useState } from "react";
import { assignments, courses } from "../../Kanbas/Database/";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import Breadcrumb from 'rsuite/Breadcrumb';
import axios from "axios";

interface BreadcrumbItem {
  content: string;
  href: string;
}

function Courses() {
  const { courseId } = useParams();
  const COURSES_API = "https://kanbas-node-server-app-ch6c.onrender.com/api/courses";
  const location = useLocation();
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
        `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
      findCourseById(courseId);
  }, [courseId]);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let startIndex = 2
    let assignmentName = '';
    if (pathSegments.length > 3) {
      const assignmentId = pathSegments[4];
      const assignment = assignments.find(assignment => assignment._id === assignmentId);
      if (assignment) {
        assignmentName = assignment.title;
      }
    }
    const newBreadcrumbItems = pathSegments.slice(startIndex).map((segment, index): BreadcrumbItem => {
      if (index === 0 && course) {
        return {
          content: course.name,
          href: `#/${pathSegments.slice(0, index + 3,).join('/')}`,
        };
      } else if (index === pathSegments.length - 3) {
        return {
          content: assignmentName || segment,
          href: '',
        };
      } else if (index === 1) { // Add this condition for the course link
        return {
          content: segment,
          href: `#/${pathSegments.slice(0, index + 3).join('/')}`, // Construct the href for the course link
        };
      } else {
        return {
          content: segment,
          href: `#/${pathSegments.slice(0, index + 3).join('/')}`,
        };
      }
    });
    setBreadcrumbItems(newBreadcrumbItems);
  }, [location, courses, assignments]);
  return (
    <div>
      <h6 style={{padding: "5px"}}>
      <div className="d-none d-md-block">
      <Breadcrumb separator=" > ">
      
          {breadcrumbItems.map((item , index) => (
            <Breadcrumb.Item key={index} href={item.href}>
              {index === 0 ? <span style={{color: "black"}}><HiMiniBars3 /></span> : null} &nbsp;
              {item.content}
            </Breadcrumb.Item>
          ))}
        
      </Breadcrumb>
      <hr />
      </div>
           
      </h6>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
            <br />
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;