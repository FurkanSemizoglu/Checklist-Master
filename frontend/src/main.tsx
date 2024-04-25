import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewCheckList from './NewCheckList.tsx';
import Checklists from './Checklists.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/checkLists" element={<Checklists />} />
      <Route path="/newCheckList" element={<NewCheckList />} />
    </Routes>
  </BrowserRouter>

)
