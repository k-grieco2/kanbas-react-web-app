import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
export default function Signup() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      await client.signin({...user, _id: "", role: "USER", firstName: "", lastName: ""});
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      setError(err.response.data.message);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <Link to="/Kanbas/Account/Signin">Have an account? Sign in here</Link> <br /><br />
      {error && <div>{error}</div>}
      <input className="form-control" value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })} /> <br />
      <input className="form-control" value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} /> <br />
      <button className="btn btn-primary" onClick={signup}> Signup </button>
    </div>
  );
}