import React, { useEffect, useState } from "react";
import axios from "axios";
import innerStyles from "./innerpage.module.css";
import banner from "./banner.jpg";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://mernback4pmmay.onrender.com/treatment`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <main>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <img src={banner} alt="Banner" className="w-100" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div className="container">
          <h1 className={innerStyles.title}>
            Our <span>Treatments</span>
          </h1>
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

export default Home;
