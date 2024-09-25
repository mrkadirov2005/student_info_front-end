import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Get_teachers_thunk=createAsyncThunk("/get_teachers_tch", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.get("http://localhost:7000/get_teachers")
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Get_teachers_thunk