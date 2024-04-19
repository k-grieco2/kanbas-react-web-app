import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFileInvoice } from "react-icons/fa";
import {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourse,
  setCourses,
} from "./reducer";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../store";

function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state: KanbasState) => state.coursesReducer.courses);
  const course = useSelector((state: KanbasState) => state.coursesReducer.course);
  const handleDeleteCourse = (courseId: string) => {
    client.deleteCourse(courseId).then((status) => {
      dispatch(deleteCourse(courseId));
    });
  };
  const handleAddCourse = () => {
    client.createCourse(course).then((course) => {
      dispatch(addCourse(course));
    });
  };
  const handleUpdateCourse = async () => {
    const status = await client.updateCourse(course);
    dispatch(updateCourse(course));
  };
  useEffect(() => {
    client.findAllCourses()
      .then((courses) =>
        dispatch(setCourses(courses))
    );
  }, []);
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control" 
      onChange={(e) => dispatch(setCourse({ ...course, name: e.target.value })) }/>
      <input value={course.number} className="form-control" 
      onChange={(e) => dispatch(setCourse({ ...course, number: e.target.value })) }/>
      <input value={course.startDate ? new Date(course.startDate).toISOString().split('T')[0] : ''} className="form-control" type="date" 
      onChange={(e) => dispatch(setCourse({ ...course, startDate: e.target.value })) }/>
      <input value={course.endDate ? new Date(course.endDate).toISOString().split('T')[0] : ''} className="form-control" type="date" 
      onChange={(e) => dispatch(setCourse({ ...course, endDate: e.target.value })) }/>
      <button className="btn btn-primary mb-4" onClick={handleAddCourse} >
        Add
      </button>
      <button onClick={handleUpdateCourse} className="btn btn-light mb-4">
        Update
      </button>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                    </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn" style={{color: "gray"}}>
                  <FaFileInvoice/>  </Link>
                  <span className="float-end">
                  <button className="btn btn-light" onClick={(event) => {
                        dispatch(setCourse(course))
                      }}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteCourse(course._id)}>
                      Delete
                    </button>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;