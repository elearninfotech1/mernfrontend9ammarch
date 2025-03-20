import React, { useState } from "react";
import { useParams } from "react-router-dom";
import innerStyles from "./innerpage.module.css";
import axios from "axios";

const BookAppointment = () => {
  const { dtname, ddname } = useParams();
  const [tname, setTname] = useState(dtname || "");
  const [dname, setDname] = useState(ddname || "");
  const [pname, setPname] = useState("");
  const [bdate, setBdate] = useState("");
  const [btime, setBtime] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const bookAppointmentData = (e) => {
    e.preventDefault();
    axios
      .post(`https://mernback9ammarch.onrender.com/bookappointment`, {
        tname,
        dname,
        pname,
        bdate,
        btime,
        phone,
        email,
        subject,
        message,
      })
      .then((res) => {
        alert("Appointment succ..");
        setTname("");
        setDname("");
        setPname("");
        setBdate("");
        setBtime("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
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
              <h1>Book Appointment</h1>
            </div>
          </div>
        </div>
      </section>
      <section className={`py-5 ${innerStyles.aboutus}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <form
                className={innerStyles.bx_shadow}
                onSubmit={bookAppointmentData}
              >
                <div className="row">
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <input
                        type="text"
                        name="pname"
                        placeholder="P.Name"
                        className="form-control"
                        value={pname}
                        onChange={(e) => setPname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <input
                        type="date"
                        name="bdate"
                        className="form-control"
                        value={bdate}
                        onChange={(e) => setBdate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <input
                        type="time"
                        name="btime"
                        placeholder="T.Name"
                        className="form-control"
                        value={btime}
                        onChange={(e) => setBtime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
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
                  </div>
                  <div className="col-md-6">
                    <div className="mb-4">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-4">
                      <textarea
                        name="message"
                        placeholder="Message"
                        className="form-control"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-4">
                      <input
                        type="submit"
                        value="Book Appointment"
                        className="btn btn-success"
                      />
                    </div>
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

export default BookAppointment;
