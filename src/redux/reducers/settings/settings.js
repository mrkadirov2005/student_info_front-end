import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    connectionStatus:""  
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setConnectionStatus:(state,action)=>{
state.connectionStatus=action.payload
    }
  }

})

// Action creators are generated for each case reducer function
export const {setConnectionStatus} = settingsSlice.actions

export default settingsSlice.reducer