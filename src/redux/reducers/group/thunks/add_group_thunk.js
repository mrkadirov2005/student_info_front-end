import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Add_group_thunk=createAsyncThunk("/add_new_group", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.post("http://localhost:7000/add_group",{body:formData})
        if(response.status==400){
            rejectWithValue({"message":"already existing group"})
            return
        }
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Add_group_thunk