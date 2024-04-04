import React, { useState, useEffect } from "react";
import axios from "axios";
import { Checkbox } from "rsuite";

function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [todos, setTodos] = useState<any[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
    };    
    const deleteTodo = async (todo: any) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    const fetchTodoById = async (id: any) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const updateTitle = async () => {
        try {
            const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
            setTodos(response.data);
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };
    const updateTodo = async () => {
        try {
            const response = await axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };     
    useEffect(() => {
        fetchTodos();
    }, []);
    return (
      <div>
        <h3>Working with Arrays</h3>
        <input value={todo.id} type="number" className="form-control"
            onChange={(e) => setTodo({ ...todo,
            id: parseInt(e.target.value) })}/>
        <input type="text" value={todo.title} className="form-control"
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <textarea value={todo.description} className="form-control"
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}/>
        <h3>Updating an Item in an Array</h3>
        <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary" >
            Update Title to {todo.title}
        </a>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary" href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
        <a className="btn btn-primary" href={`${API}/${todo.id}`}>
            Get Todo by ID
        </a>
        <h3>Filtering Array Items</h3>
        <a className="btn btn-primary" href={`${API}?completed=true`}>
            Get Completed Todos
        </a>
        <h3>Creating new Items in an Array</h3>
        <a className="btn btn-primary" style={{width: 350}} href={`${API}/create`}>
            Create Todo
        </a>
        <h3>Deleting from an Array</h3>
        <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
            Delete Todo with ID = {todo.id}
        </a>
        <h3>Complete Todo</h3>
        <Checkbox defaultChecked={todo.completed}
        onChange={(e) => setTodo({ ...todo,
            completed: !todo.completed})}>
            Complete Todo ID = {todo.id}
        </Checkbox>
        <a className="btn btn-primary" href={`${API}/${todo.id}/completed/${todo.completed}`}>
            Update Todo ID = {todo.id}
        </a>
        <h3>Describe Todo</h3>
        <a href={`${API}/${todo.id}/title/${todo.description}`} className="btn btn-primary" >
            Update Description to {todo.description}
        </a> 
        <br />
        <a className="btn btn-primary mb-4" href={`${API}/${todo.id}/description/${todo.description}`}>
            Describe Todo ID = {todo.id}
        </a><br />
        
        {/* Input fields */}
        <input value={todo.id} type="number" className="form-control"
            onChange={(e) => setTodo({ ...todo,
            id: parseInt(e.target.value) })}/>
        <input type="text" value={todo.title} className="form-control"
            onChange={(e) => setTodo({
            ...todo, title: e.target.value })}/>
        <textarea value={todo.description} className="form-control"
            onChange={(e) => setTodo({
            ...todo, description: e.target.value })}/>
        <input value={todo.due} type="date" className="form-control"
            onChange={(e) => setTodo({
            ...todo, due: e.target.value })} />
        <br />
        <label>
            <input checked={todo.completed} type="checkbox"
            onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })} />
            &nbsp; Completed
        </label>
        <button onClick={postTodo} className="btn btn-warning w-100">Post Todo</button>
        <button onClick={updateTodo} className="btn btn-danger w-100">
            Update Todo
        </button>
        <button onClick={createTodo} className="btn btn-primary w-100">
            Create Todo
        </button>
        <button onClick={updateTitle} className="btn btn-success w-100">
            Update Title
        </button>
        

        {/* Task list */}
        {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
        {errorMessage}
        </div>
        )}
        <ul className="list-group">
        {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
                <input checked={todo.completed} type="checkbox" readOnly />
                &nbsp; {todo.title}
                <p>{todo.description}</p>
                <p>{todo.due}</p>
                <button onClick={() => fetchTodoById(todo.id)} className="btn btn-warning float-end">
                    Edit
                </button>
                <button onClick={() => deleteTodo(todo)} className="btn btn-danger float-end">
                    Delete
                </button>
            </li>
        ))}
        </ul>
        </div>
    )
}
export default WorkingWithArrays;