import React, { useContext, useEffect, useState } from "react";
import innerStyles from "../innerpages/innerpage.module.css";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Store } from "../App";
import axios from "axios";
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [token, setToken] = useContext(Store);

  useEffect(() => {
    axios
      .get(`https://mernback9ammarch.onrender.com/admindashboard`, {
        headers: {
          "x-token": token,
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (!token) {
    navigate("/admin");
  }
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{data}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <AdminSidebar />
            </div>
            <div className="col-md-9">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;
