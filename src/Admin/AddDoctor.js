import React, { useState } from "react";
import innerStyles from "../innerpages/innerpage.module.css";
import axios from "axios";

const AddDoctor = () => {
  const [tname, setTname] = useState("");
  const [dname, setDname] = useState("");
  const [exp, setExp] = useState("");
  const [qualification, setQualification] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const addTreatment = (e) => {
    e.preventDefault();
    axios
      .post(`https://mernback4pmmay.onrender.com/doctor`, {
        tname,
        dname,
        exp,
        qualification,
        phone,
        address,
      })
      .then((res) => {
        alert("Doctor added succ..");
        setTname("");
        setDname("");
        setExp("");
        setQualification("");
        setPhone("");
        setAddress("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
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
                <input
                  type="text"
                  name="dname"
                  placeholder="D.Name"
                  className="form-control"
                  value={dname}
                  onChange={(e) => setDname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="exp"
                  placeholder="Exp"
                  className="form-control"
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="qualification"
                  placeholder="Qualification"
                  className="form-control"
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between">
                <div className="mb-1">
                  <input type="submit" value="Add Doctor" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
