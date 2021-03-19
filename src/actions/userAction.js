import axios from "axios";
import { FIND_ALL_USER, FIND_ALL_USER_FAILURE } from "../constants/types";

export const getUsers = () => async dispatch => {
    try{
        const result = await axios.get(`http://jsonplaceholder.typicode.com/users`)
        dispatch( {
            type: FIND_ALL_USER,
            payload: result.data
        })
    }
    catch(error){
        dispatch( {
            type: FIND_ALL_USER_FAILURE,
            payload: error,
        })
    }

}