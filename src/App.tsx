import React, { FC } from "react";

import { Main } from "./Components/Main/Main";
import { Header } from "./Components/Header/Header";
import { MyLikedCats } from "./Components/MyCats/MyCats";

import { Route, Routes } from "react-router-dom";


const App:FC = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="my-cats" element={<MyLikedCats />} />
      </Routes>
    </div>
  );
};

export default App