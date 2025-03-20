import React, { useState } from "react";
import axios from "axios";
import innerStyles from "./innerpage.module.css";
const AddStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const addStudent = (e) => {
    e.preventDefault();
    //console.log(name, phone, email, address);
    axios
      .post(`http://localhost:4000/user`, { name, email, phone, address })
      .then((res) => {
        alert("User added succ..");
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
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
              <h1>Add Student</h1>
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
                  <input type="submit" value="Add Student" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AddStudent;
