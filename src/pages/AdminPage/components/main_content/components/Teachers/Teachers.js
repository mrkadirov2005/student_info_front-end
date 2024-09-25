import React from "react";
import { useNavigate } from "react-router-dom";
import { Get_delete_teacher_selector, Get_teachers_editor_selector, Get_teachers_selector } from "../../../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { toggle_delete_teacher, toggle_edit_teacher } from "../../../../../../redux/reducers/modals_reducers/admin_page_data";

const RenderTeachers = () => {

    const dispatch=useDispatch()

    const handleDeleteTeacher=()=>{
        dispatch(toggle_delete_teacher())
      }

      const EditTeacherEnable=(e)=>{
        e.preventDefault()
        dispatch(toggle_edit_teacher())
        }

    const DB_state=useSelector(Get_teachers_selector)
    const teachers_editor_selector=useSelector(Get_teachers_editor_selector)
    const delete_teachers_selector=useSelector(Get_delete_teacher_selector)
    const teacher_status=useSelector(state=>state.teacher.status)


    const navigate=useNavigate()
    return (
      <div className="table-container">
      <button onClick={()=>navigate("/add_teacher")}>add_teacher</button>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Subject</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone_number</th>
              <th>Groups</th>
              <th>Rank</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {DB_state["data"].map((t) => (
              <tr key={t.lastname}>
                <td>{t.firstname}</td>
                <td>{t.lastname}</td>
                <td>{t.subject}</td>
                <td>{t.address}</td>
                <td>{t.email}</td>
                <td>{t.phone_number}</td>
                <td>{t.groups}</td>
                <td>{t.rank}</td>
                <td>
                  <button className="button_edit button" onClick={(e)=>EditTeacherEnable(e)} >{teachers_editor_selector?"close":"Edit"}</button>
                </td>
                <td>
                  <button className="button" onClick={(e)=>handleDeleteTeacher()}>{teacher_status=="pending"?"pending":" delete"}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default RenderTeachers
  
  