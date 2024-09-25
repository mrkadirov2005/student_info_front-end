import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const Get_groups_thunk=createAsyncThunk("/get_group_tch", async (payload,{rejectWithValue})=>{
    try {
        const response= await axios.get("http://localhost:7000/get_groups")
        
    return  (await response.data)
    } catch (error) {
        return rejectWithValue(error)
    }
 } )
 export default Get_groups_thunk