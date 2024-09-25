import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Add_student_thunk=createAsyncThunk("/add_new_st", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.post("http://localhost:7000/add_student",{body:formData})
        if(response.status==400){
            rejectWithValue({"message":"already existing Pupil"})
            return
        }
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Add_student_thunk