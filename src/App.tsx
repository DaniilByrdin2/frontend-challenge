import React, { useEffect, useState } from "react";

import { Main } from "./Components/Main/Main";
import { Header } from "./Components/Header/Header";
import { MyCats } from "./Components/MyCats/MyCats";
import { Route, Routes } from "react-router-dom";


const App = () => {

    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element = {<Main />}  /> 
          <Route path="my-cats" element = {<MyCats />}  /> 
        </Routes>
      </>
    );
}

export default App