import React, {FC, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

import "./Header.css"


interface HeaderInterface {
  "numberPage": number,
  "getCats": () => void
}

export const Header:FC<HeaderInterface> = ( { numberPage, getCats} ) => {
  const [flagActiveBtn, setActiveBtn] = useState<boolean>(true);

  useEffect(() => {
    getCats()
  }, [ numberPage, getCats ] );


  return (
    <div className="container-haeder">
      <NavLink to="/">
        <div onClick={ () => setActiveBtn(true) } className={ flagActiveBtn ? "all-cats first-el flag" : "all-cats first-el" }>Все котики</div>
      </NavLink>
      <NavLink to="/my-cats">
        <div onClick={ () => setActiveBtn(false) } className={flagActiveBtn ? "my-cats" : "my-cats flag"}>Любимые котики</div>
      </NavLink>
    </div>
  );
}