import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Edit_teacher_thunk=createAsyncThunk("/edit_teacher", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.post("http://localhost:7000/edit",{body:formData})
        if(response.status==400){
            rejectWithValue({"message":"already existing Teacher"})
            return
        }
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Edit_teacher_thunk