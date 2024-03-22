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
  const [thisDescription, setThisDescription] = useState('');
  const [thisPoints, setThisPoints] = useState('');
  const [thisDueDate, setThisDueDate] = useState('');
  const [thisFromDate, setThisFromDate] = useState('');
  const [thisUntilDate, setThisUntilDate] = useState('');
  const { assignmentId } = useParams();
  const assignments = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    const updatedAttributes: { [key: string]: any} = {};
    if (thisTitle !== "") {
      updatedAttributes.title = thisTitle;
    } else { updatedAttributes.title = assignment.title; }
    if (thisDescription !== "") {
      updatedAttributes.description = thisDescription;
    } else { updatedAttributes.description = assignment.description; }
    if (thisPoints !== "") {
      updatedAttributes.points = thisPoints;
    } else { updatedAttributes.points = assignment.points; }
    if (thisDueDate !== "") {
      updatedAttributes.dueDate = thisDueDate;
    } else { updatedAttributes.dueDate = assignment.dueDate; }
    if (thisFromDate !== "") {
      updatedAttributes.availableFromDate = thisFromDate;
    } else { updatedAttributes.availableFromDate = assignment.availableFromDate; }
    if (thisUntilDate !== "") {
      updatedAttributes.availableUntilDate = thisUntilDate
    } else { updatedAttributes.availableUntilDate = assignment.availableUntilDate}
    
    if (assignment) {
      dispatch(updateAssignment({ _id: assignmentId, ...updatedAttributes }));
    } else {
      dispatch(addAssignment({ ...updatedAttributes, course: courseId }));
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
      <textarea className="form-control mb-2" defaultValue={assignment?.description} onChange={(e) => setThisDescription(e.target.value)}></textarea>
      <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md">
        <div className="row">
        <div className="row">
          <div className="col-md-2">
          Points
          </div>
          <div className="col-md">
            <input type="number" max={100} min={0} className="form-control" defaultValue={assignment?.points} onChange={(e) => setThisPoints(e.target.value)}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 mt-3">
            Assign
          </div>
          <div className="col-md border rounded mt-3 mb-3">
            <div className="mt-2">Due</div>
            <input type="date" name="" className="form-control" defaultValue={assignment?.dueDate} onChange={(e) => setThisDueDate(e.target.value)}/>
            <div className="row">
            <div className="col-md-6 mt-3 mb-4">
              Available from
              <input type="date" className="form-control" defaultValue={assignment?.availableFromDate} onChange={(e) => setThisFromDate(e.target.value)}/>
            </div>
            <div className="col-md-6 mt-3 mb-4">
            Until
            <input className="form-control" type="date" defaultValue={assignment?.availableUntilDate} onChange={(e) => setThisUntilDate(e.target.value)}/>
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