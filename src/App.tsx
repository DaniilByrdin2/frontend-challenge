import React, { useEffect, useState } from "react";

import { Main } from "./Components/Main/Main";
import { Header } from "./Components/Header/Header";
import { MyLikedCats } from "./Components/MyCats/MyCats";

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCats } from "./Redux/ActionCreators"
import { AddCat, DeleteCat } from "./Redux/Reducers"

import {StateType} from "./Redux/Reducers"

import "./App.css"


const App = ({ getCats, Loading, Cats, MyCats, AddCat, DeleteCat }: any) => {

  const [numberPage, setNumberPage] = useState(0);
  
  useEffect(() => {
    const handleScroll = (): any => {

      const heightScroll = Math.floor(
        window.scrollY + document.documentElement.clientHeight
      );
      // 1-8
      const pageEnd =  window.scrollY + 5 >= heightScroll - window.innerHeight

      if ( pageEnd  && !Loading ) {
        setNumberPage( numberPage + 1 );
      } 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }  );
  

  return (
    <div>
      <Header numberPage={numberPage} getCats={getCats} />
      <Routes>
        <Route path="/" element={<Main DeleteCat = {DeleteCat} AddCat = {AddCat} numberPage = {numberPage} Loading={Loading} Cats={Cats} />} />
        <Route path="my-cats" element={<MyLikedCats DeleteCat = {DeleteCat} MyCats={MyCats} />} />
      </Routes>
    </div>
  );
};


const mapStateToProps = (state: StateType) => {
  return {
    Loading: state.Loading,
    Cats: state.Cats,
    MyCats: state.MyCats
  }
}

const mapDispatchToProps = ( dispatch: any ) => {
  return {
    getCats: () => dispatch( fetchCats() ),
    AddCat: ( id: string ) => dispatch( AddCat( id ) ),
    DeleteCat: ( id: string ) => dispatch( DeleteCat( id ) ),
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App)