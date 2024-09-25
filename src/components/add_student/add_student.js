import React, { useState } from 'react';
import './add_student.css'
import Add_student_thunk from '../../redux/reducers/student/thunks/add_student_thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Add_student_selector, Get_teacher_status } from '../../redux/selectors';
import { display_error } from '../../middleware/display_error';
import { useNavigate } from 'react-router-dom';

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    address: '',
    password: '',
    phone_number: '',
    subjects: '',
    group: '',
    loggedIn: false,
  });
  const dispatch=useDispatch()
  const add_student_status=useSelector(Add_student_selector)
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSubmit=()=>{
    dispatch(Add_student_thunk(formData))
    setTimeout(() => {
      if(add_student_status!="pending" || add_student_status<250){
        navigate("/admin")
      }else{
        alert("error occured: "+add_student_status)
      }
    }, 2000);
    }
      
  // // const handleSubmit = (e) => {
  // //   e.preventDefault();
  // //   // Validation
  // //   if (!formData.firstname || !formData.lastname || !formData.username || !formData.email || !formData.password || !formData.phone_number || !formData.subjects || !formData.group) {
  // //     alert('Please fill out all required fields.');
  // //     return;
  // //   }

  //   // Parsing subjects 
  //   try {
  //     formData.subjects = formData.subjects.split(',').map(subj => subj.trim());
      
  //   } catch (error) {
  //     return;
  //   }

  //   console.log('Form Data Submitted:', formData);
  //   // Here you can send formData to your API or server
  // };

  return (
    <div className="add_student_container">
      <h1>User Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone_number">Phone Number:</label>
        <input
          type="number"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          required
        />

        <label htmlFor="subjects">Subjects (comma separated):</label>
        <input
          type="text"
          id="subjects"
          name="subjects"
          value={formData.subjects}
          onChange={handleChange}
          required
        />

        <label htmlFor="group">Group:</label>
        <input
          type="text"
          id="group"
          name="group"
          value={formData.group}
          onChange={handleChange}
          required
        />

        
        <label htmlFor="loggedIn">Logged In:</label>
        <input
          type="checkbox"
          id="loggedIn"
          name="loggedIn"
          checked={formData.loggedIn}
          onChange={handleChange}
        />

        <button type="submit" onClick={()=>handleSubmit()}>{add_student_status==="pending"?"pending":"Submit"}</button>
        <em>{display_error(add_student_status)}</em>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
