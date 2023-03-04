import { SEARCH_VAL } from "./Action"


export const reducer = (state,action) => {
     let val = ""
    switch (action.type) {
        case SEARCH_VAL : 
            val = action.payload.location
        return {...state, loation : val }
       

         
    
        default:
           return state
    }


}