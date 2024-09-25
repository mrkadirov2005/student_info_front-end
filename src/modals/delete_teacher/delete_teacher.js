// import staff
import React from 'react';
import './delete_teacher'; // Make sure you import the CSS
import { useDispatch, useSelector } from 'react-redux';
import { toggle_delete_teacher, toggle_edit_teacher } from '../../redux/reducers/modals_reducers/admin_page_data';
import { Get_teachers_selector } from '../../redux/selectors';
import Delete_teacher_thunk from '../../redux/reducers/teacher/thunks/delete_teacher_thunk';
import { Get_teacher_status } from '../../redux/selectors';
// component
const Delete_teacher_modal = () => {
    // hooks
    const dispatch=useDispatch()
    const Teachers_data=useSelector(Get_teachers_selector)
    const teacher_status=useSelector(Get_teacher_status)

const formData={
        type: 'teacher',
        UID: '',
        comment: '',
    };

    
// function to submit delete request assigned to delete button
    const handleSubmit = () => {
        console.log(formData)
        dispatch(Delete_teacher_thunk(formData))
        dispatch(toggle_delete_teacher())
        console.log(formData)
        window.location.reload()
    };

    


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Edit Teacher Information</h2>
                <form onSubmit={handleSubmit}>
                    <label>Type</label>
                    <input
                        type="text"
                        name="type"
                        value="teacher"
                        onChange={(e)=>formData.type="teacher"}
                        placeholder="Enter type"
                        
                    />
                    <label>UID</label>
                    <select
                        type="text"
                        name="UID"
                        onChange={(e)=>formData.UID=e.target.value}
                        placeholder="Enter email"
                        required
                    >
                    <option value={" "}>empty</option>
                        {Teachers_data.data.map(item=><option value={item.email}>{item.email}</option>)}
                    </select>
                    <textarea onChange={(e)=>formData.comment=e.target.value}/>
                    
                    
                </form>
                    <button type="submit" className="save" onClick={(e)=>handleSubmit(e)}>{Get_teacher_status==="pending"?"pending":"delete"}</button>

                    <button type="button" className="cancel" onClick={()=>dispatch(toggle_delete_teacher())}>Cancel</button>
            </div>
        </div>
    );
};

export default Delete_teacher_modal;
