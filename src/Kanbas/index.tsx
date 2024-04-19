import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Account from "./Account";

const API_BASE = process.env.REACT_APP_API_BASE;
function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const COURSES_API = `${API_BASE}/api/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);
  
  
  return (
    <>
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/N" element={<Navigate to="../Dashboard" />} />
          <Route path="Account/*" element={<Account/>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses" element={<Dashboard />} />
          </Routes>
      </div>
    </div>
    </Provider>
    </>
);}
export default Kanbas;