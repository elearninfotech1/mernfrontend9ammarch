import React, { useEffect, useState } from "react";
import innerStyles from "./innerpage.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Treatments = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mernback9ammarch.onrender.com/treatment`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <main>
      <section className={innerStyles.bread}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Treatments</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">
          <div className="row">
            {data.map((treat) => {
              return (
                <div class="col-md-3" key={treat._id}>
                  <NavLink to={`/treatmentdetails/${treat.tname}`}>
                    <div className={`mb-4 ${innerStyles.bx_shadow}`}>
                      {treat.tname}
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Treatments;
