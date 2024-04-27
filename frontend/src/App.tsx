import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage.tsx";
import NewCheckList from "./NewCheckList.tsx";
import Checklists from "./Checklists.tsx";

import { Provider } from "react-redux";

// Import your reducer here
// import { reducer } from "./reducers";

// Define your reducer here
// const reducer = ...

//const store = createStore(reducer); 


 // <Provider store={store}>


 
function App() {
 
  return (  
 <>
    <Router>
      <Routes>
     
        <Route path="/" element={<MainPage />} />
        <Route path="/checkLists" element={<Checklists />} />
        <Route path="/newCheckList" element={<NewCheckList />} />
   
      </Routes>
    </Router>
 
 </>
  );
}
  
export default App;

