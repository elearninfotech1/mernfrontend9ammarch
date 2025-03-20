import React from "react";
import { Route, Routes } from "react-router-dom";
//import StudentData from "./innerpages/StudentData";
import AddStudent from "./innerpages/AddStudent";
import DeleteStudent from "./innerpages/DeleteStudent";
import EditStudent from "./innerpages/EditStudent";
import Invalid from "./innerpages/Invalid";
import StudentEdit from "./innerpages/StudentEdit";
import Admin from "./Admin/Admin";
import Register from "./Admin/Register";
import AdminDashboard from "./Admin/AdminDashboard";
import AddTreatment from "./Admin/AddTreatment";
import DeleteTreatment from "./Admin/DeleteTreatment";
import AddDoctor from "./Admin/AddDoctor";
import DeleteDoctor from "./Admin/DeleteDoctor";
import AddOffer from "./Admin/AddOffer";
import DeleteOffer from "./Admin/DeleteOffer";
import Home from "./innerpages/Home";
import TreatmentDetails from "./innerpages/TreatmentDetails";
import AboutUs from "./innerpages/AboutUs";
import Treatments from "./innerpages/Treatments";
import Offers from "./innerpages/Offers";
import BookAppointment from "./innerpages/BookAppointment";
import SampleForm from "./innerpages/SampleForm";
import ContactUs from "./innerpages/ContactUs";
import EditTreatment from "./Admin/EditTreatment";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/bookappointment" element={<BookAppointment />} />
        <Route
          path="/bookappointment/:dtname/:ddname"
          element={<BookAppointment />}
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/treatmentdetails/:treatname"
          element={<TreatmentDetails />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edittreatment/:ttname" element={<EditTreatment />} />

        <Route path="/admindashboard" element={<AdminDashboard />}>
          <Route path="" element={<AddTreatment />} />
          <Route path="deletetreatment" element={<DeleteTreatment />} />
          <Route path="adddoctor" element={<AddDoctor />} />
          <Route path="deletedoctor" element={<DeleteDoctor />} />
          <Route path="addoffer" element={<AddOffer />} />
          <Route path="deleteoffer" element={<DeleteOffer />} />
        </Route>

        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/sampleform" element={<SampleForm />} />
        <Route path="/deletestudent" element={<DeleteStudent />} />
        <Route path="/editstudent" element={<EditStudent />} />
        <Route path="/studentedit/:sid" element={<StudentEdit />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
    </div>
  );
};

export default Routing;
