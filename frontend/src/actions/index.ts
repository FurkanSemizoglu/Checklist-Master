import { Dispatch } from "redux";
//import { Action } from "./your-action-types-file"; // Import your Action type if defined
import axios from "axios";  
import { error } from "console";

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


export const getSingleChecklist = (id: String) => (dispatch : Dispatch<any>) => {

  axios
    .get(`http://localhost:5050/api/getSingleItem`, { params: { id: id } })
    .then((response) => {
      console.log("response.data", response.data);
      dispatch({ type:"GET_SINGLE_CHECKLIST_SUCCESS", payload: response.data });
    })
    .catch((error ) => {
      dispatch({ type: "GET_SINGLE_CHECKLIST_ERROR", payload: error });
    });
} 


export const addChecklist = (data: any) => (dispatch: Dispatch<any>) => {
  console.log("dataa ", data);
  axios
    .post("http://localhost:5050/api/addItems", JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
      dispatch({ type: "ADD_CHECKLIST_SUCCESS", payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: "ADD_CHECKLIST_ERROR", payload: error });
    });
}
