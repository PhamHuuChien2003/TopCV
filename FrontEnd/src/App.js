import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import the library
import { library } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import  HomePage from "./Pages/HomePage/HomePage.jsx"
import LoginPage from "./Pages/LoginPage/LoginPage.jsx";
import JobPage from "./Pages/JobPage/JobPage.js";
import StockPage from "./Pages/StockPage/StockPage.jsx";
import Vacancy1Page from "./Pages/VacancyPage/Vacancy1Page.jsx";
import Vacancy2Page from "./Pages/VacancyPage/Vacancy2Page.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage  />} />
          <Route exact path="/jobpage" element={<JobPage  />} />
          <Route exact path="/stockpage" element={<StockPage/>} />
          <Route exact path="/vacancy1page" element={<Vacancy1Page/>} />
          <Route exact path="/vacancy2page" element={<Vacancy2Page/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far, faTwitter, faFontAwesome);
