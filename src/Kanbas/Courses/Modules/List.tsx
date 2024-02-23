import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div className="flex-container">
          <div className="flex-row float-end">
          <div className="float-end">
            <button className="btn btn-outline-dark">Collapse All</button>
            <button className="btn btn-outline-dark">View Progress</button>
            <button className="btn btn-outline-dark"><FaCheckCircle/> Publish All</button>
            <button className="btn btn-danger"><FaPlus/> Modules</button>
            <button className="btn btn-light"><FaEllipsisV/></button>
          </div>
          </div>
          <div className="flex-row">
          <div>
          <ul className="list-group wd-modules">
            {modulesList.map((module, index) => (
              <li key={index}
                className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <div>
                  <FaEllipsisV/>
                  {module.name}
                  <span className="float-end">
                    <FaCheckCircle />
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