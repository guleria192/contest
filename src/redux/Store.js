import {createStore} from 'redux'
import { reducer } from './Reducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const INITIAL_STORE = {

    location :[]
        

    

}



export const store = createStore(reducer , INITIAL_STORE,composeWithDevTools())