import React, { useState } from 'react';
import './add_group.css'; // Import the CSS file
import Add_group_thunk from '../../redux/reducers/group/thunks/add_group_thunk';
import { useDispatch, useSelector } from 'react-redux';
import { Add_group_selector } from '../../redux/selectors';
import { display_error } from '../../middleware/display_error';


const Add_group = () => {

const dispatch=useDispatch()
const getGroupStatus=useSelector(Add_group_selector)
const gData={
    name:"",
    teacher:"",
    phone_number:""
}
const stData={
    name:"",
    surname:"",
    phone_number:"",
    rank:""

}
const formData={
    uid:"",
    group_data:gData,
    students_data:stData
}

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <section className="admin-panel-form">
    <form  >
      <h2>Admin Panel Form</h2>

      <div className="form-group">
        <label htmlFor="uid">Group UID:</label>
        <input
          type="text"
          id="uid"
          name="uid"
          onChange={(e)=>formData.uid=e.target.value}
          required
        />
      </div>

      <div className="form-group">
        <h3>Group Data</h3>
        <label htmlFor="group_name">Group Name:</label>
        <input
          type="text"
          id="group_name"
          name="group_data.name"
          onChange={(e)=>gData.name=e.target.value}
          required
        />

        <label htmlFor="teacher">Teacher Name:</label>
        <input
          type="text"
          id="teacher"
          name="group_data.teacher"
          onChange={(e)=>gData.teacher=e.target.value}
          required
        />

        <label htmlFor="group_phone_number">Phone Number:</label>
        <input
          type="text"
          id="group_phone_number"
          name="group_data.phone_number"
          onClick={(e)=>gData.phone_number=e.target.value}
          required
        />
      </div>

      <div className="form-group">
        <h3>Student Data</h3>
        <label htmlFor="student_name">Student Name:</label>
        <input
          type="text"
          id="student_name"
          name="students_data.1.name"
          onChange={(e)=>stData.name=e.target.value}
          required
        />

        <label htmlFor="student_surname">Student Surname:</label>
        <input
          type="text"
          id="student_surname"
          name="students_data.1.surname"
          
          onChange={(e)=>stData.surname=e.target.value}
          required
        />

        <label htmlFor="student_phone_number">Student Phone Number:</label>
        <input
          type="text"
          id="student_phone_number"
          name="students_data.1.phone_number"
          
          onChange={(e)=>stData.phone_number=e.target.value}
          required
        />

        <label htmlFor="student_rank">Student Rank:</label>
        <input
          type="text"
          id="student_rank"
          name="students_data.1.rank"
         
          onChange={(e)=>stData.rank=e.target.value}
          required
        />
      </div>

    
    </form>
    <button className="form-button"  type="submit" onClick={()=>
      {dispatch(Add_group_thunk(formData))
       console.log(formData)}
      }>Submit data</button>
      <em>{display_error(getGroupStatus)}</em>
      </section>
  );
};

export default Add_group;
