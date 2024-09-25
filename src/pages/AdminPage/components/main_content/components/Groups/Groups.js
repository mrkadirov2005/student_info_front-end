import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Delete_group_thunk from "../../../../../../redux/reducers/group/thunks/delete_group";
import { Get_admin_page_groups_data, Get_edit_group_selector, Get_teachers_selector } from "../../../../../../redux/selectors";
import { toggle_edit_group } from "../../../../../../redux/reducers/modals_reducers/admin_page_data";
const RenderGroups = () => {
  
    const DB_state=useSelector(Get_admin_page_groups_data)
    console.log(DB_state)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const group_status=useSelector(Get_admin_page_groups_data)

    return (
      <div>

        <h1>Groups:</h1>
        <button  onClick={(e)=>navigate("/add_group")}>create a group</button>
        <ul>
          {DB_state.map((group) => (
            <li key={group.uid}>
              <strong>{group.uid}</strong> <br />
              <span>{group.group_data.name}</span> <br />
              <span>{group.group_data.teacher}</span> <br />
              <span>Students: {Object.keys(group.students_data).length}</span>

            <div className='mainContent_buttons'>
            <button onClick={()=>dispatch(toggle_edit_group())}>Edit</button>
            <button onClick={()=>{
                dispatch(Delete_group_thunk({type:'group',"UID":group.uid,comment:"no comment"}))
                
                }}>{group_status==="pending"?"pending":"delete"}</button>
            </div>
            </li>
            
          ))}
        </ul>
      </div>
    );
  };
  export default RenderGroups