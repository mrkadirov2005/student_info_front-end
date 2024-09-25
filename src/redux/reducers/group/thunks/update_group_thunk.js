import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Edit_group_thunk=createAsyncThunk("/edit_group_data", async (formData,{rejectWithValue})=>{
    console.log(formData)
    try {
        const response= await axios.post("http://localhost:7000/edit",{body:formData})
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
    
 } )
 export default Edit_group_thunk