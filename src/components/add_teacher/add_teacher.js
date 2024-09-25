import React, { useState } from "react";
import "./add_teacher.css"; // Import the CSS file
import { useDispatch, useSelector } from "react-redux";
import Add_teacher_thunk from "../../redux/reducers/teacher/thunks/add_teacher_thunk";
import { Add_teacher_selector } from "../../redux/selectors";
import { display_error } from "../../middleware/display_error";
import { Navigate, useNavigate } from "react-router-dom";

const TeacherForm = () => {
const dispatch=useDispatch()
const getTeacherStatus=useSelector(Add_teacher_selector)

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    address: "",
    password: "",
    loggedIn: false,
    phone_number: "",
    subject: "",
    groups: "",
    rank: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const navigate=useNavigate()



  const handleSubmit=()=>{
    dispatch(Add_teacher_thunk(formData))
    
    }

  return (
    <div className="teacher-form-container">
      <h1>Teacher Registration Form</h1>
      <form >
        <label className="form-label">
          First Name:
          <input
            className="form-input"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Last Name:
          <input
            className="form-input"
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Username:
          <input
            className="form-input"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Email:
          <input
            className="form-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Address:
          <input
            className="form-input"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Password:
          <input
            className="form-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Logged In:
          <input
            className="form-checkbox"
            type="checkbox"
            name="loggedIn"
            checked={formData.loggedIn}
            onChange={handleChange}
          />
        </label>
        
        <label className="form-label">
          Phone Number:
          <input
            className="form-input"
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Subject:
          <input
            className="form-input"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        
        <label className="form-label">
          Groups:
          <input
            className="form-input"
            type="text"
            name="groups"
            value={formData.groups}
            onChange={(e) => setFormData({ ...formData, groups: e.target.value })}
            required
          />
        </label>
        
        <label className="form-label">
          Rank:
          <input
            className="form-input"
            type="text"
            name="rank"
            value={formData.rank}
            onChange={handleChange}
          />
        </label>
        

        <em>{display_error(getTeacherStatus)}</em>

        
      </form>
        <button className="form-button"  type="submit" onClick={()=>handleSubmit()}>Submit data</button>
    </div>
  );
};

export default TeacherForm;
