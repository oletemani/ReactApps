import {combineReducers} from 'redux';
import {messagereducer} from './message/message.reducer'
import {productReducer} from './product/product.reducer'
import {userReducer} from './user/user.reducer'

let rootReducer = combineReducers({message: messagereducer, product: productReducer, user:userReducer})


export { rootReducer}