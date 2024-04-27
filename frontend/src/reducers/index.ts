const INITIAL_STATE = {
    checklists: []
}


const reducer = (state = INITIAL_STATE, action) => {    
    switch(action.type){
        case 'ADD_CHECKLIST':
            return {
                ...state,
                checklists: [...state.checklists, action.payload]
            }
        default:
            return state
    }
}

export default reducer;