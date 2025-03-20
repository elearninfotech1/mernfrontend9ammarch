import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import innerStyles from "../innerpages/innerpage.module.css";
import axios from "axios";
const EditTreatment = () => {
  const { ttname } = useParams();
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://mernback9ammarch.onrender.com/treatment/${ttname}`)
      .then((res) => {
        setTname(res.data.tname);
        setTdesc(res.data.tdesc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const editTreatmentData = (e) => {
    e.preventDefault();
    axios
      .put(`https://mernback9ammarch.onrender.com/treatment/${ttname}`, { tname, tdesc })
      .then((res) => {
        alert("Treatment updated succ..");
        navigate("/admindashboard/deletetreatment");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Treatment Edit</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 m-auto">
              <form
                className={innerStyles.bx_shadow}
                onSubmit={editTreatmentData}
              >
                <div className="mb-4">
                  <input
                    type="text"
                    name="tname"
                    placeholder="T.Name"
                    className="form-control"
                    value={tname}
                    onChange={(e) => setTname(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="tdesc"
                    placeholder="T.Desc"
                    className="form-control"
                    value={tdesc}
                    onChange={(e) => setTdesc(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="mb-1">
                    <input type="submit" value="Edit Treatment" />
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

export default EditTreatment;
