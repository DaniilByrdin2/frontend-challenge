import React, { useEffect, useState } from "react";

import { Main } from "./Components/Main/Main";
import { Header } from "./Components/Header/Header";
import { MyLikedCats } from "./Components/MyCats/MyCats";

import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCats } from "./Redux/ActionCreators"

import {StateType} from "./Redux/Reducers"

import "./App.css"

const App = ( { getCats, Loading, Cats, MyCats }: any ) => {
    
    return (
      <>
        <Header  Loading = { Loading } getCats = { getCats } />
        <Routes>
          <Route path="/" element = {<Main Cats = { Cats } />}  /> 
          <Route path="my-cats" element = {<MyLikedCats MyCats = { MyCats }  />}  /> 
        </Routes>
      </>
    );
}


const mapStateToProps = (state: StateType) => {
  return {
    Loading: state.Loading,
    Cats: state.Cats,
    MyCats: state.MyCats
  }
}

const mapDispatchToProps = ( dispatch: any ) => {
  return {
    getCats: () => dispatch( fetchCats() )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(App)