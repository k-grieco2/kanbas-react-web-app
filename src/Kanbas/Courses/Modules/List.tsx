import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaArrowDown, FaSortDown, FaGlasses, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
    
      <div className="flex-container">
          <div className="d-flex flex-column">
          <span style={{width: "100%"}}>
            <button className="btn btn-light float-end"><FaEllipsisV/></button>
            <button className="btn btn-danger float-end"><FaPlus/> Modules</button>
            <button className="btn btn-outline-dark float-end"><span style={{color: "green"}}><FaCheckCircle/></span> Publish All <FaCaretDown/></button>
            <button className="btn btn-outline-dark float-end">View Progress</button>
            <button className="btn btn-outline-dark float-end">Collapse All</button><br /><br />
          </span>
          <hr/>
          <div>
          <ul className="list-group wd-modules">
            {modulesList.map((module, index) => (
              <li key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <div>
                  <FaEllipsisV/> <FaCaretRight/>
                  {module.name}
                  <span className="float-end">
                    <span style={{color: "green"}}><FaCheckCircle /></span>
                    <FaPlusCircle />
                    <FaEllipsisV />
                  </span>
                </div>
                {selectedModule._id === module._id && (
                  <ul className="list-group">
                    {module.lessons?.map((lesson, index) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle />
                          <FaEllipsisV />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          </div>
          </div>
        </div>
    </>
  );
}
export default ModuleList;