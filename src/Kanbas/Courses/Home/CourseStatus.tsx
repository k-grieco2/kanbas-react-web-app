import React from "react";
import { FaBan, FaCheckCircle, FaFileImport, FaCloudUploadAlt, FaBullseye, FaChartBar, FaBullhorn, FaBell, FaCalendarAlt } from "react-icons/fa"

function CourseStatus() {
    return(
        <>
        <button className="btn btn-light" style={{width: "50%"}}><FaBan/>Unpublish</button>
        <button className="btn btn-success" disabled style={{width: "50%"}}><FaCheckCircle/>Published</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaFileImport/> Import Existing Content</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaCloudUploadAlt/> Import From Commons</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaBullseye/> Choose Home Page</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaChartBar/> View Course Stream</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaBullhorn/> New Announcement</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaChartBar/> New Analytics</button><br/>
        <button className="btn btn-outline-dark" style={{width: "100%"}}><FaBell/> View Course Notifications</button><br/>
        <br/>
        <h3>Coming Up</h3>
        <FaCalendarAlt/>View Calendar
        <ul>
            <li><FaCalendarAlt/>Lecture CS4550.12631.202410 Sep 7 at 11:45am</li>
            <li><FaCalendarAlt/>Lecture CS4550.12631.202410 Sep 11 at 11:45am</li>
            <li><FaCalendarAlt/>CS5610 06 SP23 Lecture Sep 11 at 6pm</li>
        </ul>
</>
    )

}
export default CourseStatus;