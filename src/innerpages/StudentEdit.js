import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
const StudentEdit = () => {
  const { sid } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user/${sid}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const editStudentData = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/user/${sid}`, { name, email, phone, address })
      .then((res) => {
        alert("Studentinfo Updated Suc...");
        navigate("/editstudent");
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
              <h1>Edit Student</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto">
              <form className={innerStyles.bx_shadow}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                <div className="mb-1">
                  <input
                    type="button"
                    value="Edit Student"
                    className="btn btn-success"
                    onClick={editStudentData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default StudentEdit;
