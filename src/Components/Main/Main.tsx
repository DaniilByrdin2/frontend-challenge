import React, {FC, useEffect, useState} from "react";

import loading from "../../Img/icons8-точки-загрузки.gif"
import { CartCat } from "../CartCat/CartCat";

import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../../Redux/ActionCreators"
import { FavoriteCat } from "../../Redux/Reducers"
import { AppDispatch,RootState } from "../../Redux/Store"

import { getId } from "../Helpers"

import "./Main.css"


export type mapElementType = {
  "id": string,
  "url": string,
  "like"?: boolean
}


export const Main:FC = () => { 
    
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const Cats: any = useSelector<RootState>( state => state.Cats )
    const Loading: any = useSelector<RootState>( state => state.Loading )
    const AppDispatch: AppDispatch = useDispatch()

    const handleScroll = (): void => {
      
      const heightScroll = Math.floor( window.scrollY + document.documentElement.clientHeight );
      // 1-8
      const pageEnd =  window.scrollY + 5 >= heightScroll - window.innerHeight

      if ( pageEnd ) {
        setIsFetching( true );
      } 
    };

    useEffect( () => {

      window.addEventListener("scroll", handleScroll);

      if( isFetching ) {
        AppDispatch( fetchCats() )
        setIsFetching( false )
      }
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [ isFetching, AppDispatch ] );


    const handleClick = (event: any): void => {
        const target = event.target
        const id = getId(target);
        id && AppDispatch( FavoriteCat(id) );
    }

    return (
      <div onClick={handleClick} className="container-cats">
          {Cats &&
            Cats.map( (item: mapElementType) => {
              return (
                  <CartCat key = { item.id } item = { item } />
              );
            })}
          <Footer Loading={Loading} />
      </div>
    );
}

const Footer:FC<any> = ({Loading}) => {

    return (
        <div className="footer">
            { Loading ? <span>Загружаем котиков... </span> : <span>Больше котиков!!! </span> }
            <img src={loading} alt="loading" />
        </div>
    )
}


