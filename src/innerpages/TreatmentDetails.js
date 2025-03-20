import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import innerStyles from "./innerpage.module.css";
import axios from "axios";

const TreatmentDetails = () => {
  const [data, setData] = useState("");
  const [doc, setDoc] = useState([]);
  const { treatname } = useParams();
  useEffect(() => {
    axios
      .get(`https://mernback9ammarch.onrender.com/treatment/${treatname}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://mernback9ammarch.onrender.com/doctor/${treatname}`)
      .then((res) => {
        setDoc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{treatname}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>{data.tdesc}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="py-4">
                {doc.map((doctor) => {
                  return (
                    <div className="mb-4 border-bottom d-flex justify-content-between">
                      <div>
                        <h6>{doctor.dname}</h6>
                        <p>
                          {doctor.exp} , {doctor.qualification}
                        </p>
                        <p>{doctor.phone}</p>
                        <p>{doctor.address}</p>
                      </div>
                      <div>
                        <NavLink
                          to={`/bookappointment/${doctor.tname}/${doctor.dname}`}
                        >
                          <button className="btn btn-success mt-5">
                            Book Appointment
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TreatmentDetails;
