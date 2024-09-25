import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Get_dashboard_data_thunk=createAsyncThunk("/get_dashboard_data", async (payload,{rejectWithValue})=>{
    try {
        const response= await axios.get("http://localhost:7000/get_dashboard_data")
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
 } )
 export default Get_dashboard_data_thunk