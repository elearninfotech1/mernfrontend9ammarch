import React, { useEffect, useState } from "react";
import axios from "axios";
import innerStyles from "./innerpage.module.css";
const DeleteStudent = () => {
  const [stu, setStu] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/user`)
      .then((res) => {
        setStu(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const deleteData = (sid) => {
    //alert(sid);
    axios
      .delete(`http://localhost:4000/user/${sid}`)
      .then((res) => {
        alert("Data Deleted Suc...");
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
              <h1>Delete Student</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {stu.map((student) => {
                      return (
                        <tr key={student._id}>
                          <td>{student.name}</td>
                          <td>{student.email}</td>
                          <td>{student.phone}</td>
                          <td>{student.address}</td>
                          <td>
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteData(student._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DeleteStudent;
