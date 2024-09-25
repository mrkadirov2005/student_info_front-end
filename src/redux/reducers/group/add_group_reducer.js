import { createSlice } from '@reduxjs/toolkit'
import Add_group_thunk from './thunks/add_group_thunk'
import Edit_group_thunk from './thunks/update_group_thunk'
import Delete_group_thunk from './thunks/delete_group'

const initialState = {
    status: 0     
}

export const group_slice = createSlice({
  name: 'group_slice',
  initialState,
  reducers: {
    // If you have any synchronous reducers, you can define them here
  },
  extraReducers: (builder) => {
    // Handle Add Group Thunk
    builder
      .addCase(Add_group_thunk.fulfilled, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(Add_group_thunk.rejected, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(Add_group_thunk.pending, (state) => {
        state.status = null;
      });

    // Handle Edit Group Thunk
    builder
      .addCase(Edit_group_thunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
      })
      .addCase(Edit_group_thunk.rejected, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(Edit_group_thunk.pending, (state) => {
        state.status = "rejected";
      });

    // Handle Delete Group Thunk
    builder
      .addCase(Delete_group_thunk.fulfilled, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(Delete_group_thunk.rejected, (state, action) => {
        state.status = action.payload.status;
      })
      .addCase(Delete_group_thunk.pending, (state) => {
        state.status = null;
      });
  }
});

// Action creators are generated for each case reducer function
// If no synchronous reducers are defined, this will be empty
export const {} = group_slice.actions;

export default group_slice.reducer;
