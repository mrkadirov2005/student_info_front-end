import React from 'react';
import './menu.css'; // Menu-specific styles
import Get_teachers_thunk from '../../../../redux/reducers/admin_page_data/thunks/get_teacher';
import { useDispatch } from 'react-redux';
import Get_students_thunk from '../../../../redux/reducers/admin_page_data/thunks/get_students';
import Get_groups_thunk from '../../../../redux/reducers/admin_page_data/thunks/get_groups';
import Get_reports_thunk from '../../../../redux/reducers/admin_page_data/thunks/get_reports';
import Get_dashboard_data_thunk from '../../../../redux/reducers/admin_page_data/thunks/get_dashboard_data';

const Menu = ({ handleMenuClick }) => {
  
  const dispatch=useDispatch()


  const handle_get_teachers=()=>{
    handleMenuClick('Manage Teachers')
    dispatch(Get_teachers_thunk())

  }
  // const handle_get_students=()=>{
  //   handleMenuClick('Manage Students')

  //   dispatch(Get_students_thunk())

  // }
  const handle_get_groups=()=>{
    handleMenuClick("Manage Groups")
    dispatch(Get_groups_thunk())
  }

  const handle_get_reports=()=>{
    handleMenuClick("Reports")
    dispatch(Get_reports_thunk())
  }
  const handle_get_dashboard_data=()=>{
    handleMenuClick("Dashboard")
    dispatch(Get_dashboard_data_thunk())
  }



  return (
    <div className="menu">
      <h2>Admin Panel</h2>
      <ul >
        <button onClick={() => handle_get_dashboard_data()}>Dashboard</button>
        <button onClick={()=>handle_get_teachers()}>Manage Teachers</button>
        <button onClick={() => handle_get_groups()}>Manage Groups</button>
        <button onClick={() => handle_get_reports()}>Reports</button>
        <button onClick={() => handleMenuClick('Settings')}>Settings</button>
      </ul>
    </div>
  );
};

export default Menu;
