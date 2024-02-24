import { FaBan, FaBell, FaBullhorn, FaBullseye, FaCalendarAlt, FaChartBar, FaCheckCircle, FaCloudUploadAlt, FaFileImport } from "react-icons/fa";
import ModuleList from "../Modules/List";
import CourseStatus from "./CourseStatus";

function Home() {
  return (
    <>
    <div className="container-fluid row">
        <div className="col-md-8">
          <div className="flex-fill flex-row">
            <h2>Home</h2>
          </div>
          <div>
            <ModuleList />
          </div>
        </div>
        <div className="col-md-4">
        <h2>Course Status</h2>
        <CourseStatus/>
        </div>
    </div>
    </>
  );
}
export default Home;