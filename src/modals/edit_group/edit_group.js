import React, { useState } from "react";
import "./edit_group.css"; // Import the CSS for the modal
import { useDispatch, useSelector } from "react-redux";
import { toggle_edit_group } from "../../redux/reducers/modals_reducers/admin_page_data";
import { Get_admin_page_groups_data } from "../../redux/selectors";
import Edit_group_thunk from "../../redux/reducers/group/thunks/update_group_thunk";

const EditGroupModal = () => {
    const dispatch = useDispatch();
    const admin_page_groups_data = useSelector(Get_admin_page_groups_data) || []; // Ensure it's at least an empty array

    const [selectedStudents, setSelectedGroupSts] = useState();
    const [isAdd, setIsAdd] = useState(false);
    const [UID, setUID] = useState("");
    const [newGrST, setNewGrST] = useState("");
    const [newGrST_surname, setNewGrST_surname] = useState("");
    const [newGrST_phone_number, setNewGrST_phone_number] = useState("");
    const [operation, setOperation] = useState("add");
    const [order, setOrder] = useState();

    const formData = {
        type: "group",
        UID: UID,
        operation: operation,
        name: newGrST,
        surname: newGrST_surname,
        phone_number: newGrST_phone_number,
        rank: 0,
        order
    };

    // Handle selecting a group
    const handleChooseGroup = (e) => {
        const groupUID = e.target.value;
        setUID(groupUID);
        const selectedGroup = admin_page_groups_data.find(group => group.uid === groupUID);
        if (selectedGroup) {
            const { name, teacher, phone_number } = selectedGroup.group_data;
            document.getElementById("edit_group_name").innerText = name;
            document.getElementById("edit_group_teacher").innerText = teacher;
            document.getElementById("edit_group_phone_number").innerText = phone_number;
            setSelectedGroupSts(selectedGroup.students_data);
        }
    };

    // Add new student
    const handleAddStudent = (e) => {
        e.preventDefault();
        setOperation("add");
        dispatch(Edit_group_thunk(formData));
    };

    // Delete student
    const handleDeleteStudent = (studentId) => {
        setOperation("delete");
        dispatch(Edit_group_thunk({
            type: "group",
            UID,
            operation: "delete",
            studentId: studentId,
        }));
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="modal-close" onClick={() => dispatch(toggle_edit_group())}>&times;</span>
                <h2 className="modal-title">Edit Group Information</h2>
                
                <form>
                    <label className="group-label" htmlFor="groupName">Group Name</label>
                    <select
                        className="group-select"
                        id="groupName"
                        name="groupName"
                        onChange={handleChooseGroup}
                        placeholder="Enter group name"
                        required
                    >
                        <option value={null}>Select Group</option>
                        {Array.isArray(admin_page_groups_data) && admin_page_groups_data.length > 0 ? (
                            admin_page_groups_data.map((group) => (
                                <option value={group.uid} key={group.uid}>{group.uid}</option>
                            ))
                        ) : (
                            <option value="">No groups available</option>
                        )}
                    </select>

                    <label className="group-label">Group Data</label>
                    <table className="group-table">
                        <thead>
                            <tr>
                                <th className="group-header">Name</th>
                                <th className="group-header">Teacher</th>
                                <th className="group-header">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="group-cell" id="edit_group_name"></td>
                                <td className="group-cell" id="edit_group_teacher"></td>
                                <td className="group-cell" id="edit_group_phone_number"></td>
                            </tr>
                        </tbody>
                    </table>

                    <label className="group-label">Group Members</label>
                    <table className="members-table">
                        <thead>
                            <tr>
                                <th className="members-header">ID</th>
                                <th className="members-header">Name</th>
                                <th className="members-header">Surname</th>
                                <th className="members-header">Phone Number</th>
                                <th className="members-header">Rank</th>
                                <th className="members-header">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedStudents
                                ? Object.keys(selectedStudents).map((key) => (
                                    <tr key={key}>
                                        <td className="members-cell">{key}</td>
                                        <td className="members-cell">{selectedStudents[key].name}</td>
                                        <td className="members-cell">{selectedStudents[key].surname}</td>
                                        <td className="members-cell">{selectedStudents[key].phone_number}</td>
                                        <td className="members-cell">{selectedStudents[key].rank}</td>
                                        <td className="members-cell">
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteStudent(key)}
                                                className="delete-group-student"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                                : ""}
                        </tbody>
                    </table>

                    <div className="modal-actions">
                        <button type="button" className="modal-save" onClick={() => setIsAdd(!isAdd)}>
                            {!isAdd ? "Add to this group" : "Close Form"}
                        </button>

                        <button type="button" className="modal-cancel" onClick={() => dispatch(toggle_edit_group())}>
                            Cancel
                        </button>
                    </div>
                </form>

                {isAdd && (
                    <div>
                        <form onSubmit={handleAddStudent}>
                            <input
                                type="text"
                                id="new_st_name"
                                value={newGrST}
                                onChange={(e) => setNewGrST(e.target.value)}
                                placeholder="Enter new student name"
                                required
                            />
                            <input 
                                type="text"
                                id="new_st_surname"
                                value={newGrST_surname}
                                onChange={(e) => setNewGrST_surname(e.target.value)}
                                placeholder="Enter new student surname"
                                required
                            />
                            <input
                                type="text"
                                id="new_st_phone_number"
                                value={newGrST_phone_number}
                                onChange={(e) => setNewGrST_phone_number(e.target.value)}
                                placeholder="Enter new student phone number"
                                required
                            />
                            <input
                                type="number"
                                id="new_st_rank"
                                value={0}
                                disabled
                                placeholder="Rank is initially zero"
                            />
                            <input
                                type="number"
                                id="new_st_id"
                                placeholder="Enter order number"
                                onChange={(e) => setOrder(e.target.value)}
                                required={false}
                            />
                        </form>
                        <button type="submit" onClick={(e) => handleAddStudent(e)} className="add-btn">
                            Add Now
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditGroupModal;
