import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Add_teacher_thunk=createAsyncThunk("/add_new_tch", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.post("http://localhost:7000/add_teacher",{body:formData})
        if(response.status==400){
            rejectWithValue({"message":"already existing Teacher"})
            return
        }
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Add_teacher_thunk