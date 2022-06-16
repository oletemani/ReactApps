import  Axios  from 'axios';
import { useState } from 'react';

const LOADDATA_SUCCESS = "LOADDATA_SUCCESS";

let LoadDataAction = ()=>{
    
    return async (dispatch)=>{
        try {
            // dispatch({ type: LOAD_DATA });
            let users = [];
           
            await Axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    console.log("inside action - axios")
                    users = response.data;
                    console.log(users);
                    console.log("inside action - before")
                })
                .catch(() => { })
                
            dispatch({ type: LOADDATA_SUCCESS, payload: users })
        }

        catch (err) { }
        
        
    }
}
// let loadDataAction = async ()=>{
//         let users = [];
//         let url="https://jsonplaceholder.typicode.com/users"
//         await Axios.get(url)
//         .then((response)=>{
//             console.log(response.data)
//             users = response.data;
//         })
//         .catch()
//         return {type : LOADDATA_SUCCESS ,payload:users}
// }

export {LoadDataAction, LOADDATA_SUCCESS}