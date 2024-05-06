interface Action {
  type: string;
  payload: [] | string; // Checklist[] or string depending on the action
}

const INITIAL_STATE = {
  checklists: [],
  message: "",
  status: "idle",

};

const reducer = (state = INITIAL_STATE, action: Action) => {
  console.log("action payloadd ", action.payload);
  console.log("action typeee ", action.type);
  console.log("action STATE İNİTİAL ", state);
  switch (action.type) {
    case "GET_CHECKLISTS_SUCCESS":
      console.log("action payloadd ", action.payload);
      console.log("action STATE İNİTİAL wokrk", state);
      return {
        ...state,
        checklists: action.payload,
      };
    case "GET_CHECKLISTS_ERROR":
      return {
        ...state,
        message: action.payload,
      };
    case "GET_SINGLE_CHECKLIST_SUCCESS":

      return {
        ...state,
        checklists: action.payload,
      };
    case "GET_SINGLE_CHECKLIST_ERROR":

      return {
        ...state,
        message: action.payload,
      };
    case "ADD_CHECKLIST_SUCCESS":
      console.log("action payload for add checklist", action.payload)
      window.location.href = "/";
      return {
        ...state,
        message: action.payload,
        status: "success",
      };
    case "ADD_CHECKLIST_ERROR":
      return {
        ...state,
        message: action.payload,
      };


    default:
      console.log("action payloadd  fail", action.payload);
      console.log("action STATE deafult ", state);
      return state;
  }
};

export default reducer;
