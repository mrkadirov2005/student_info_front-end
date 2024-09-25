import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Delete_teacher_thunk=createAsyncThunk("/delete_teacher_thunk", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.post("http://localhost:7000/delete",{body:formData})
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Delete_teacher_thunk