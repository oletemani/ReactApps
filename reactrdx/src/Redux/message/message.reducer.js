import {GM,GN} from './message.action'
let initialState = {
    message : "hello"
}
let messagereducer = (state=initialState,action) =>{

    switch(action.type){
        case GM:
            return {message :"Good Morning"}
        case GN:
            return {message :"Good Night"}
        default:
            return state
    }

}

export {messagereducer};