import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      {/* Add buttons here */}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle />
              <FaPlusCircle /><FaEllipsisV />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle /><FaEllipsisV /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;