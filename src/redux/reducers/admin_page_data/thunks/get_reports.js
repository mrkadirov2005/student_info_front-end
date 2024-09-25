import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Get_reports_thunk=createAsyncThunk("/get_reports_thunk", async (payload,{rejectWithValue})=>{
    try {
        const response= await axios.get("http://localhost:7000/get_admin_reports")
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
 } )
 export default Get_reports_thunk