import React, { useContext, useState } from "react";
import axios from "axios";
import innerStyles from "../innerpages/innerpage.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Store } from "../App";
const Admin = () => {
  const [token, setToken] = useContext(Store);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const addStudent = (e) => {
    e.preventDefault();
    axios
      .post(`https://mernback9ammarch-1.onrender.com/login`, { email, password })
      .then((res) => {
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (token) {
    navigate("/admindashboard");
  }
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Admin Login</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <form className={innerStyles.bx_shadow} onSubmit={addStudent}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-1">
                    <input type="submit" value="Admin Login" />
                  </div>
                  <div className="float-end">
                    <NavLink to="/register" className="text-end">
                      Clieck here for New User
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admin;
