import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({ _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
    
  };
  return (
    <div>
      <h1>Signin</h1>
      <Link to="/Kanbas/Account/Signup">Don't have an account? Sign up here</Link> <br /> <br />
      <input value={credentials.username} className="form-control w-50" onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })}/>
        <br />
      <input value={credentials.password} className="form-control w-50" onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })}/>
        <br />
      <button onClick={signin} className="btn btn-primary"> Signin </button>
    </div>
  );
}
