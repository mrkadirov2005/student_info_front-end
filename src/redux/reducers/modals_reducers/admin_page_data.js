import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    edit_teacher_modal:false,
    delete_teacher_modal:false,
    edit_group_modal:false
}

export const get_teacher_slice = createSlice({
  name: 'modals_reducer',
  initialState,
  reducers: {
    toggle_edit_teacher:(state)=>{
      state.edit_teacher_modal=!state.edit_teacher_modal
    },
    toggle_delete_teacher:(state)=>{
      state.delete_teacher_modal=!state.delete_teacher_modal
    },
    toggle_edit_group:(state)=>{
      state.edit_group_modal=!state.edit_group_modal
    },
    

  }

})

// Action creators are generated for each case reducer function
export const {toggle_edit_teacher,toggle_delete_teacher,toggle_edit_group} = get_teacher_slice.actions

export default get_teacher_slice.reducer