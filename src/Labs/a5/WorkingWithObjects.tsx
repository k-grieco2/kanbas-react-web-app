import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: 1, name: "Intro to Programming",
        description: "Python for beginners.", course: "CS5610",
    });
    const API_BASE = process.env.REACT_APP_API_BASE;
    const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
    const MODULE_URL = `${API_BASE}/a5/module`;
    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
          .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    function update(checkbox: any) {
        if(checkbox.checked == true) {
            setAssignment({ ...assignment,
                completed: true });
        } else {
            setAssignment({ ...assignment,
                completed: false });
        }
    }
    useEffect(() => {
        fetchAssignment();
    }, []);    
    return(
        <div>
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <input onChange={(e) => setAssignment({
                    ...assignment, title: e.target.value })}
                value={assignment.title} type="text" className="form-control w-50" />
            <button className="btn btn-primary" onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button className="btn btn-primary" onClick={fetchAssignment} >
                Fetch Assignment
            </button>
            <br />
            <br />
            <input type="text" className="form-control w-50"
                onChange={(e) => setAssignment({ ...assignment,
                    title: e.target.value })}
                value={assignment.title}/>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Assignment Title
            </a>
            <br />
            <input type="number" className="form-control w-50"
                onChange={(e) => setAssignment({ ...assignment,
                    score: parseInt(e.target.value) })}
                value={assignment.score}/>
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <br />
            <input type="checkbox" id="assignment_complete"
                onClick={(e) => update(e.target)}
                     defaultChecked={assignment.completed}/>
            <label htmlFor="assignment_complete">Complete Assignment</label>
            <br />
            <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Assignment Completion Status
            </a>
            <br />
            <input type="text" className="form-control w-50"
                onChange={(e) => setModule({ ...module,
                    name: e.target.value })}
                value={module.name}/>
            <a className="btn btn-danger" href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <br />
            <input type="text" className="form-control w-50"
                onChange={(e) => setModule({ ...module,
                    description: e.target.value })}
                value={module.description}/>
            <a className="btn btn-danger" href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <br />
            <h4>Retrieving Objects</h4>
            <a className="btn btn-primary" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/assignment">
                Get Assignment
            </a>
            <a className="btn btn-danger" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/module">
                Get Module
            </a>
            <h4>Retrieving Properties</h4>
            <a className="btn btn-primary" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/assignment/title">
                Get Assignment Title
            </a>
            <a className="btn btn-primary" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/assignment/score">
                Get Assignment Score
            </a>
            <a className="btn btn-primary" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/assignment/completed">
                Get Assignment Completion Status
            </a>
            <br />
            <a className="btn btn-danger" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/module/name">
                Get Module Title
            </a>
            <a className="btn btn-danger" href="https://kanbas-node-server-app-ch6c.onrender.com/a5/module/description">
                Get Module Description
            </a>
        </div>
    );
}
export default WorkingWithObjects;