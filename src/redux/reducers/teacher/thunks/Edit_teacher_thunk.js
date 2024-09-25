import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Edit_Teacher_data_thunk=createAsyncThunk("/Edit_Teacher_data_thunk", async (payload,type,UID,data,{rejectWithValue})=>{
    try {
        const response= await axios.get("http://localhost:7000/edit",{type,UID,data})
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
 } )
 export default Edit_Teacher_data_thunk