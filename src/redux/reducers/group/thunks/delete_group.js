import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Delete_group_thunk=createAsyncThunk("/delete_group", async (formData,{rejectWithValue})=>{
    try {
        const response= await axios.post("http://localhost:7000/delete",{body:formData})
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Delete_group_thunk