import axios from "axios";
import React, { useEffect, useState } from "react";
import "datatables.net-dt/css/dataTables.dataTables.min.css";
import DataTable from "datatables.net-dt/js/dataTables.dataTables.min.js";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CreateIcon from "@mui/icons-material/Create";
const DeleteTreatment = () => {
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
    setTimeout(() => {
      new DataTable("#mytable");
    }, 1000);
  });
  const deleteTreatmentData = (tid) => {
    axios
      .delete(`https://mernback9ammarch.onrender.com/treatment/${tid}`)
      .then((res) => {
        alert("Treatment Deleted Succ..");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-bordered display" id="mytable">
                <thead>
                  <tr>
                    <th>T.Name</th>
                    <th>T.Desc</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((treatment) => {
                    return (
                      <tr>
                        <td>{treatment.tname}</td>
                        <td>{treatment.tdesc}</td>
                        <td className="d-flex">
                          <button
                            className="btn btn-danger me-2"
                            onClick={() => deleteTreatmentData(treatment._id)}
                          >
                            <DeleteIcon />
                          </button>
                          <NavLink to={`/edittreatment/${treatment.tname}`}>
                            <button className="btn btn-success">
                              <CreateIcon />
                            </button>
                          </NavLink>
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
  );
};

export default DeleteTreatment;
