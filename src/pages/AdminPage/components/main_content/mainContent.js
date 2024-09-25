import React, { useEffect, useState } from 'react';
import './main_content.css'; // Main content-specific styles
import { useDispatch, useSelector } from 'react-redux';
import { Get_connection_status, Get_delete_teacher_selector, Get_edit_group_selector, Get_teachers_editor_selector, Get_teachers_selector } from '../../../../redux/selectors';
import EditTeacherModal from '../../../../modals/edit_teacher/edit_teacher';
import { toggle_delete_teacher, toggle_edit_group, toggle_edit_teacher } from '../../../../redux/reducers/modals_reducers/admin_page_data';
import Delete_teacher_modal from '../../../../modals/delete_teacher/delete_teacher';
import Delete_teacher_thunk from '../../../../redux/reducers/teacher/thunks/delete_teacher_thunk';
import { Link, useNavigate } from 'react-router-dom';
import EditGroupModal from '../../../../modals/edit_group/edit_group';
import Delete_group_thunk from '../../../../redux/reducers/group/thunks/delete_group';
import RenderTeachers from './components/Teachers/Teachers';
import { setConnectionStatus } from '../../../../redux/reducers/settings/settings';
import RenderReports from './components/Reports/Reports';
import RenderGroups from './components/Groups/Groups';
import HomePage from './components/Home/Home';
const MainContent = ({ activePage }) => {

  const dispatch=useDispatch()
    const DB_state=useSelector(Get_teachers_selector)
    const teachers_editor_selector=useSelector(Get_teachers_editor_selector)
    const delete_teachers_selector=useSelector(Get_delete_teacher_selector)
    const edit_group_selector=useSelector(Get_edit_group_selector)
    

    // select the status of all sectors to manage status
    const student_status=useSelector(state=>state.student.status)
    const group_status=useSelector(state=>state.group.status)
    const admin_page_status=useSelector(state=>state.admin_page.status)
    const connection_status=useSelector(Get_connection_status)
    const navigate=useNavigate()
    console.log(teachers_editor_selector)


console.log(DB_state["data"])
console.log(DB_state.status)
      // check connection speed
      useEffect(() => {
      
        if ('connection' in navigator) {
          const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
          console.log('Effective network type:', connection.effectiveType);
          if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
              dispatch(setConnectionStatus('You are on a slow network.'));
            } else {
              dispatch(setConnectionStatus('You have a good connection.'));
          }
        }
      }, [])
        
    
    
      
  return (
    <div className="main-content">
      <h1>{activePage}</h1>
    {connection_status==="You are on a slow network."?"low internet connection":<div className="content">
        {/* The content here will depend on the active page */}
        <p>
          This is the {activePage} section. The content will change based on the selected menu option.</p>
{activePage==="Manage Teachers" && DB_state.status=="fulfilled"?<RenderTeachers/>:""}
{activePage==="Manage Groups" && DB_state.status=="fulfilled"?<RenderGroups/>:""}
{activePage==="Dashboard" && DB_state.status==='fulfilled'?<HomePage></HomePage>:""}
{activePage==="Reports" && DB_state.status==='fulfilled'?<RenderReports></RenderReports>:""}
{teachers_editor_selector && activePage=="Manage Teachers"?<EditTeacherModal/>:""}
{delete_teachers_selector && activePage=="Manage Teachers"?<Delete_teacher_modal/>:""}
{edit_group_selector && activePage=="Manage Groups"?<EditGroupModal/>:""}

        
      </div>}
      
    </div>
  );
};

export default MainContent;
