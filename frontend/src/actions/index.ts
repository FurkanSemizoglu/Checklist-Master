import { Dispatch } from "redux";
//import { Action } from "./your-action-types-file"; // Import your Action type if defined
import axios from "axios";  

export const getChecklists = () => (dispatch: Dispatch<any>) => {
  axios
    .get("http://localhost:5050/api/getItems")
    .then((response) => {
      console.log("response.data", response.data);
      dispatch({ type: "GET_CHECKLISTS_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "GET_CHECKLISTS_ERROR", payload: error });
    });
};
