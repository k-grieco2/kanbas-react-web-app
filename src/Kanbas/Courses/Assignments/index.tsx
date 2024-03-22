import React from "react";
import { FaBook, FaCheckCircle, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import {
  deleteAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  function check(assignmentId: any) {
    if (window.confirm("Are you sure you want to remove this assignment?")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (
    <>
      <span>
        <input type="text" placeholder="Search for Assignment" style={{width: "40%"}} />
        <span className="float-end">
          <button className="btn btn-light"><FaPlus/> Group</button>
          <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
          <button className="btn btn-danger"><FaPlus/> Assignment</button>
          </Link>
          <button className="btn btn-light"><FaEllipsisV/></button>
        </span>
      </span><br />
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV /> ASSIGNMENTS
            <span className="float-end">
            <span className="border border-secondary rounded">
                      40% of Total
            </span> &nbsp;
              <span style={{color: "green"}}><FaCheckCircle /></span> &nbsp;
              <FaPlusCircle /> <FaEllipsisV />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <table className="row">
                  <div className="col-md-1">
                  <FaEllipsisV /><FaBook/>
                  </div>
                  <div className="col" style={{width: "80%"}}>
                  <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title} <br />
                   Multiple Modules | Not available yet
                   </Link>
                  </div>
                  <div className="col" style={{width: "10%"}}>
                  <span className="float-end">
                  <span style={{color: "green"}}><FaCheckCircle /></span><FaEllipsisV />
                  <span>
                    <button className="form-control" onClick={() => check(assignment._id)}>Delete</button>
                  </span>
                  </span>
                  </div>
                </table>
                
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;