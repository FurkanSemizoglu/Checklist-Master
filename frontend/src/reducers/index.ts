interface Action {
    type: string;
    payload: [] | string; // Checklist[] or string depending on the action
}


const INITIAL_STATE = {
    checklists: [],
    message : ''
}

const reducer = (state = INITIAL_STATE, action: Action) => { 
    console.log("action payloadd "  , action.payload)   
    console.log("action typeee "  , action.type)  
    console.log("action STATE İNİTİAL "  , state)  
    switch(action.type){
        case "GET_CHECKLISTS_SUCCESS":
            console.log("action payloadd "  , action.payload)   
            console.log("action STATE İNİTİAL wokrk"  , state) 
            return {
                ...state,
                checklists: action.payload,
                
            }
        case 'GET_CHECKLISTS_ERROR':
            console.log("action payloadd  fail"  , action.payload)   
              console.log("action STATE İNİTİAL "  , state) 
            return {
                ...state,
                message: action.payload
            }       
        default:  
        console.log("action payloadd  fail"  , action.payload)  
            console.log("action STATE deafult "  , state)           
            return state
    }
}

export default reducer;
