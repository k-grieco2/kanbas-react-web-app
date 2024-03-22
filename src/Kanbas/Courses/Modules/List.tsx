import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus, FaArrowDown, FaSortDown, FaGlasses, FaCaretRight, FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>
      <div className="flex-container">
          <div className="d-flex flex-column">
          <span style={{width: "100%"}}>
            <button className="btn btn-light btn-sm float-end"><FaEllipsisV/></button>
            <button className="btn btn-danger btn-sm float-end"><FaPlus/> Modules</button>
            <button className="btn btn-outline-dark btn-sm float-end"><span style={{color: "green"}}><FaCheckCircle/></span> Publish All <FaCaretDown/></button>
            <button className="btn btn-outline-dark btn-sm float-end">View Progress</button>
            <button className="btn btn-outline-dark btn-sm float-end">Collapse All</button><br /><br />
          </span>
          <hr/>
          <div>
          <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div className="flex-container row">
              <div className="col-md-10">
                <div className="row">
                <input value={module.name}
                  onChange={(e) => 
                    dispatch(setModule({ ...module, name: e.target.value }))}
                />
                </div>
                <div className="row mt-2">
                <textarea value={module.description}
                  onChange={(e) => 
                    dispatch(setModule({ ...module, description: e.target.value }))}
                />
                </div>
                
                
              </div>
              <div className="col-md-2">
              <button className="btn btn-success float-end" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                Add
              </button>
              <button className="btn btn-light float-end" onClick={() => dispatch(updateModule(module))}>
                Update
              </button>
              </div>
            
            </div>
            
            
          </li>
            {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} 
                className="list-group-item"
                onClick={() => setSelectedModule(module)}>
                <button
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
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
                    {module.lessons?.map((lesson: any, index: any) => (
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