import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
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
      <input value={assignment?.title}
             className="form-control mb-2" />
      <hr />
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