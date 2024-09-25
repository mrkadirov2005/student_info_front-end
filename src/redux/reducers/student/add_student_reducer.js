import { createSlice } from '@reduxjs/toolkit'
import Add_student_thunk from './thunks/add_student_thunk'

const initialState = {
    status:0     
}

export const student_slice = createSlice({
  name: 'student_slice',
  initialState,
  reducers: {
    
  },
  extraReducers:(builder)=>{
builder.addCase(Add_student_thunk.fulfilled,(state,action)=>{
  state.status=action.payload.status
  
})
builder.addCase(Add_student_thunk.rejected,(state,action)=>{
  state.status=action.payload.status
})
builder.addCase(Add_student_thunk.pending,(state,action)=>{
  state.status="pending"
})
  }
})

// Action creators are generated for each case reducer function
export const {} = student_slice.actions

export default student_slice.reducer