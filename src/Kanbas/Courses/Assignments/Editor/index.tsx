import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import {
  addAssignment,
  updateAssignment,
} from "../reducer";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../../store";


function AssignmentEditor() 
  {
  const dispatch = useDispatch();
  const [thisTitle, setThisTitle] = useState('');
  const { assignmentId } = useParams();
  const assignments = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignment) {
      if (thisTitle !== "") {
        dispatch(updateAssignment({ _id: assignmentId, title: thisTitle }));
      }
    } else {
      dispatch(addAssignment({ title: thisTitle, course: courseId }));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  
  return (
    
    <div className="col-md-10">
      <span className="float-end">
        <span style={{color: "green"}}><FaCheckCircle/> Published </span>&nbsp;
        <button className="btn btn-light"><FaEllipsisV/></button>
      </span><br />
      <hr />
      <h4>Assignment Name</h4>
      <input defaultValue={assignment?.title} onChange={(e) => setThisTitle(e.target.value)}
             className="form-control mb-2" />
      <textarea className="form-control mb-2"></textarea>
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md">
        <div className="row">
        <div className="row">
          <div className="col-md-2">
          Points
          </div>
          <div className="col-md">
            <input type="number" max={100} min={0} className="form-control"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3">
            Assign
          </div>
          <div className="col-md border rounded mt-3 mb-3">
            <div className="mt-2">Due</div>
            <input type="date" name="" className="form-control" />
            <div className="row">
            <div className="col-md-6 mt-3 mb-4">
              Available from
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-6 mt-3 mb-4">
            Until
            <input className="form-control" type="date" defaultValue="2100-12-31"/>
            </div>
            </div>
          </div>
          
        </div>
        </div> 
        
        
      </div>
      
      <hr />
      </div>
      <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-light float-end">
        Cancel
      </Link>
    </div>
  );
}
export default AssignmentEditor;