import React, { useState, useEffect } from "react";
import axios from "axios";

const SampleForm = () => {
  const [students, setStudents] = useState([]); // Store student data from API
  const [editRowId, setEditRowId] = useState(null); // Track which row is being edited
  const [editedData, setEditedData] = useState({}); // Store edited row data

  // Fetch student data from API
  useEffect(() => {
    axios
      .get("http://localhost:4000/user") // Adjust API URL as needed
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Enable editing when clicking "Edit" button
  const handleEditClick = (id, student) => {
    setEditRowId(id);
    setEditedData({ ...student }); // Copy the current row data for editing
  };

  // Handle changes in input fields
  const handleInputChange = (e, field) => {
    setEditedData({
      ...editedData,
      [field]: e.target.value,
    });
  };

  // Save changes and send `PUT` request to update API
  const handleSave = (id) => {
    axios
      .put(`http://localhost:4000/students/${id}`, editedData) // Send updated data
      .then(() => {
        // Update the local state with new data
        setStudents(
          students.map((student) => (student.id === id ? editedData : student))
        );
        setEditRowId(null); // Exit edit mode
      })
      .catch((error) => console.error("Error updating student:", error));
  };

  return (
    <div className="container">
      <h2>Student List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                {editRowId === student.id ? (
                  <input
                    type="text"
                    value={editedData.name || ""}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>
                {editRowId === student.id ? (
                  <input
                    type="text"
                    value={editedData.email || ""}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                ) : (
                  student.email
                )}
              </td>
              <td>
                {editRowId === student.id ? (
                  <input
                    type="text"
                    value={editedData.phone || ""}
                    onChange={(e) => handleInputChange(e, "phone")}
                  />
                ) : (
                  student.phone
                )}
              </td>
              <td>
                {editRowId === student.id ? (
                  <button
                    className="btn btn-success"
                    onClick={() => handleSave(student.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditClick(student.id, student)}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleForm;
