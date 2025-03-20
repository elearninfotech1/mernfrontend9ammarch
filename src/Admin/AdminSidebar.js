import React from "react";
import { NavLink } from "react-router-dom";
import adminStyles from "./admin.module.css";
const AdminSidebar = () => {
  return (
    <div className={adminStyles.sidebar}>
      <ul>
        <li>
          <NavLink to="">Add Treatment</NavLink>
        </li>
        <li>
          <NavLink to="deletetreatment">Delete & Edit Treatment</NavLink>
        </li>
        <li>
          <NavLink to="adddoctor">Add Doctor</NavLink>
        </li>
        <li>
          <NavLink to="deletedoctor">Delete & Edit Doctor</NavLink>
        </li>
        <li>
          <NavLink to="addoffer">Add Offer</NavLink>
        </li>
        <li>
          <NavLink to="deleteoffer">Delete & Edit Offer</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
