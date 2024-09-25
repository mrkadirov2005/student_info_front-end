import { createSlice } from '@reduxjs/toolkit'
import Edit_teacher_thunk from './thunks/edit_teacher'
import Add_teacher_thunk from './thunks/add_teacher_thunk'
const initialState = {
    status:0     
}

export const teacher_slice = createSlice({
  name: 'teacher_slice',
  initialState,
  reducers: {
    
  },
  extraReducers:(builder)=>{
builder.addCase(Add_teacher_thunk.fulfilled,(state,action)=>{
  state.status=action.payload.status
})
builder.addCase(Add_teacher_thunk.rejected,(state,action)=>{
  state.status=action.payload.status
})
builder.addCase(Add_teacher_thunk.pending,(state)=>{
  state.status="pending"
})
builder.addCase(Edit_teacher_thunk.fulfilled,(state,action)=>{
  state.status="fulfilled"
})
builder.addCase(Edit_teacher_thunk.rejected,(state,action)=>{
  state.status="rejected"
})
builder.addCase(Edit_teacher_thunk.pending,(state)=>{
  state.status="pending"
})
  }
})

// Action creators are generated for each case reducer function
export const {} = teacher_slice.actions

export default teacher_slice.reducer