// here is the list of items selected from the state.
export const Add_student_selector=(state)=>state.student.status
export const Add_teacher_selector=(state)=>state.teacher.status
export const Add_group_selector=(state)=>state.group.status
export const Get_teachers_selector=(state)=>state.admin_page
export const Get_teachers_editor_selector=(state)=>state.modals.edit_teacher_modal
export const Get_delete_teacher_selector=(state)=>state.modals.delete_teacher_modal
export const Get_edit_group_selector=(state)=>state.modals.edit_group_modal
// this is for edit group modal
export const Get_admin_page_groups_data=(state)=>state.admin_page.data
export const Get_teacher_status=(state)=>state.teacher.status
// get connection status
export const Get_connection_status=(state)=>state.settings.connectionStatus
