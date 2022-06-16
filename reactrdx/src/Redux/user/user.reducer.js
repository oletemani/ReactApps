import {LOADDATA_SUCCESS} from './user.action'

let initialState = {
    users : []
}
let userReducer = (state=initialState,action) =>{
    console.log(action);
    console.log("in reducer----------");
    console.log(action.payload)
    switch(action.type){
        case LOADDATA_SUCCESS:
            return {users : action.payload}
        default:
            return state
    }
}

export {userReducer}