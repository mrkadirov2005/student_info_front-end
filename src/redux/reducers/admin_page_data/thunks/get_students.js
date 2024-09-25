import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Get_students_thunk=createAsyncThunk("/get_students_tch", async (payload,{rejectWithValue})=>{
    try {
        const response= await axios.get("http://localhost:7000/get_students")
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
 } )
 export default Get_students_thunk