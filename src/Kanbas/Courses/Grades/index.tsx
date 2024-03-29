import { FaCog, FaFileExport, FaFileImport, FaFilter } from "react-icons/fa";
import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="col-md-10">
      <span className="float-end">
                    <button className="btn btn-light"><FaFileImport/> Import</button>
                    <button className="btn btn-light"><FaFileExport/> Export</button>
                    <button className="btn btn-light"><FaCog/></button>
      </span><br/><br />
      <table style={{width: "100%"}}>
        <div className="row">
          <div className="col">
            <h4>Student Names</h4>
            <input type="text" placeholder="Search Students" style={{width: "100%"}}/><br/>
          </div>
          <div className="col">
            <h4>Assignment Names</h4>
            <input type="text" placeholder="Search Assignments" style={{width: "100%"}}/><br/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <br />
          <button className="btn btn-light"><FaFilter/> Apply Filters</button>
          </div>
        </div>
      </table><br />
      
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover table-sm">
          <thead>
            <th>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td key={assignment._id}>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;