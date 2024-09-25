import { createSlice } from '@reduxjs/toolkit'
import Get_teachers_thunk from './thunks/get_teacher'
import Get_groups_thunk from './thunks/get_groups'
import Get_reports_thunk from './thunks/get_reports'
import Get_dashboard_data_thunk from './thunks/get_dashboard_data'
import Edit_group_thunk from '../group/thunks/update_group_thunk'
import Get_students_thunk from './thunks/get_students'

const initialState = {
    data:{},
    status:'loading' | 'pending' |'fulfilled'
}

export const get_teacher_slice = createSlice({
  name: 'get_teacher_slice',
  initialState,
  reducers: {
    
  },
  extraReducers:(builder)=>{
builder.addCase(Get_teachers_thunk.fulfilled,(state,action)=>{
  state.data=action.payload
  state.status="fulfilled"
})
builder.addCase(Get_teachers_thunk.rejected,(state,action)=>{
  state.data=action.payload
  state.status='rejected'

})
builder.addCase(Get_teachers_thunk.pending,(state)=>{
  // state.data=NaN
  state.status='pending'
})
builder.addCase(Get_students_thunk.fulfilled,(state,action)=>{
  state.data=action.payload
  state.status='fulfilled'
})
builder.addCase(Get_students_thunk.rejected,(state,action)=>{
  state.data=action.payload
  state.status='rejected'

})
builder.addCase(Get_students_thunk.pending,(state)=>{
  state.data=NaN
  state.status='pending'
})
builder.addCase(Get_groups_thunk.fulfilled,(state,action)=>{
  state.data=action.payload
  state.status='fulfilled'
})
builder.addCase(Get_groups_thunk.rejected,(state,action)=>{
  state.data=action.payload
  state.status='rejected'
})
builder.addCase(Get_groups_thunk.pending,(state)=>{
  state.data=NaN
  state.status='pending'
})
builder.addCase(Get_reports_thunk.fulfilled,(state,action)=>{
  state.data=action.payload
  state.status='fulfilled'
})
builder.addCase(Get_reports_thunk.rejected,(state,action)=>{
  state.data=action.payload
  state.status='rejected'
})
builder.addCase(Get_reports_thunk.pending,(state)=>{
  state.data=NaN
  state.status='pending'
})
builder.addCase(Get_dashboard_data_thunk.fulfilled,(state,action)=>{
  state.data=action.payload
  state.status='fulfilled'
})
builder.addCase(Get_dashboard_data_thunk.rejected,(state,action)=>{
  state.data=action.payload
  state.status='rejected'
})
builder.addCase(Get_dashboard_data_thunk.pending,(state)=>{
  state.data=NaN
  state.status='pending'
})
builder.addCase(Edit_group_thunk.fulfilled,(state,action)=>{
  state.status='fulfilled'
})
builder.addCase(Edit_group_thunk.rejected,(state,action)=>{
  state.status='rejected'
})
builder.addCase(Edit_group_thunk.pending,(state)=>{
  state.status='pending'
})
  }
})

// Action creators are generated for each case reducer function
export const {} = get_teacher_slice.actions

export default get_teacher_slice.reducer