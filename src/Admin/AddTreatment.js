import React, { useState } from "react";
import innerStyles from "../innerpages/innerpage.module.css";
import axios from "axios";

const AddTreatment = () => {
  const [tname, setTname] = useState("");
  const [tdesc, setTdesc] = useState("");
  const addTreatment = (e) => {
    e.preventDefault();
    axios
      .post(`https://mernback9ammarch.onrender.com/treatment`, { tname, tdesc })
      .then((res) => {
        alert("Treatment added succ..");
        setTname("");
        setTdesc("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <form className={innerStyles.bx_shadow} onSubmit={addTreatment}>
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
                  <input type="submit" value="Add Treatment" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTreatment;
