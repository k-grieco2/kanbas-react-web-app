import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
import { Routes, Route, Link } from "react-router-dom";
import React from "react";
import E1 from "./e1";
function Labs() {
   return (
     <div className="container-fluid">
       <h1>Labs</h1>
       <Nav />
       <Link to="/Labs/a3">Assignment 3</Link> |
       <Link to="/Labs/a4">Assignment 4</Link> |
       <Link to="/Labs/e1">E1 Sample</Link>
       <Routes>
         <Route path="/a3/*" element={<Assignment3 />} />
         <Route path="/a4/*" element={<Assignment4 />} />
         <Route path="/e1/*" element={<E1/>} />
       </Routes>
     </div>
   );
 }
 export default Labs;