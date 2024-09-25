import React, { useState } from 'react';
import './edit_teacher.css'; // Make sure you import the CSS
import { useDispatch, useSelector } from 'react-redux';
import { toggle_edit_teacher } from '../../redux/reducers/modals_reducers/admin_page_data';
import Edit_teacher_thunk from '../../redux/reducers/teacher/thunks/edit_teacher';
import { Get_teachers_selector } from '../../redux/selectors';
import Get_teachers_thunk from '../../redux/reducers/admin_page_data/thunks/get_teacher';
const EditTeacherModal = ({ isOpen, onClose, onSubmit }) => {
    
    const dispatch=useDispatch()
    const teacher_status=useSelector(state=>state.teacher.status)

    const Teachers_data=useSelector(Get_teachers_selector)
    const [formData, setFormData] = useState({
        type: 'teacher',
        UID: '',
        prop: '',
        current: '',
        updated: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        console.log(formData)
        dispatch(Edit_teacher_thunk(formData))
        setTimeout(() => {
            if(teacher_status=="fulfilled"){
                alert("Successfully Edited")
                dispatch(toggle_edit_teacher())
                dispatch(Get_teachers_thunk)
            }
        }, 600);

    };

    const [current,setCurrent]=useState("")
    const getCurrentValue=(UID,property)=>{
        var CurrentValue=""
        for(let x in Teachers_data.data){
            if(Teachers_data.data[x]["email"]==UID){
            CurrentValue=Teachers_data.data[x][property]
            }
        }
        alert(CurrentValue)
        formData["current"]=CurrentValue
        setCurrent(CurrentValue)
    }


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>&times;</span>
                <h2>Edit Teacher Information</h2>
                <form onSubmit={handleSubmit}>
                    <label>Type</label>
                    <input
                        type="text"
                        name="type"
                        value="teacher"
                        onChange={handleChange}
                        placeholder="Enter type"
                        
                    />
                    <label>UID</label>
                    <select
                        type="text"
                        name="UID"
                        value={formData.UID}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    >
                    <option value={null}>empty</option>
                        {
                            
                            Teachers_data.data.map(item=><option value={item.email}>{item.email}</option>)
                            }
                    </select>
                    <label>Property</label>
                    <select
                        type="text"
                        name="prop"
                        value={formData.prop}
                        onChange={handleChange}
                        placeholder="Enter property to edit"
                        required
                    >
                        <option value={"firstname"}>firstname</option>
                        <option value={"lastname"}>lastname</option>
                        <option value={"username"}>username</option>
                        <option value={"email"}>email</option>
                        <option value={"address"}>address</option>
                        <option value={"password"}>password</option>
                        <option value={"loggedIn"}>loggedIn</option>
                        <option value={"phone_number"}>phone_number</option>
                        <option value={"subject"}>subject</option>
                        <option value={"groups"}>groups</option>
                        <option value={"rank"}>rank</option>
                    </select>
                    <label>Current Value</label>
                    <input
                        type="text"
                        name="current"
                        value={current}
                        onChange={()=>getCurrentValue(formData.UID,formData.prop)}
                        placeholder="Automatically entered"
                        id="current_value"
                        required
                    />
                    <label>New Value</label>
                    <input
                        type="text"
                        name="new"
                        onChange={(e)=>formData.updated=e.target.value}
                        placeholder="Enter new value"
                        required
                    />
                </form>
                    <button type="submit" className="save" onClick={(e)=>handleSubmit(e)}>{teacher_status==="pending"?"pending":"submit"}</button>

                    <button type="button" className="cancel" onClick={()=>dispatch(toggle_edit_teacher())}>Cancel</button>
            </div>
        </div>
    );
};

export default EditTeacherModal;
