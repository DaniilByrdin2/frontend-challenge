import React from "react";

import loading from "../../Img/icons8-точки-загрузки.gif"
import { CartCat } from "../CartCat/CartCat";

import "./Main.css"



type CatType = {
    name: string,
    id: string
}


export const Main = ( {  Cats, Loading, numberPage, AddCat, DeleteCat }:any ) => { 

    return (
      <div className="container-main">
        
        <ul>
          { Cats.map(( { id, url, like }: any  ) => {
            
            const ID = id + (Math.random() * 10)

            return (
              <li key={ ID } >
                <CartCat DeleteCat = {DeleteCat} flagLike = {like} id = {id} AddCat = {AddCat} imgUrl = {url} />
              </li>
            );
          })}
        { Loading ? <Footer numberPage = { numberPage }/> : null}
        </ul>

      </div>
    );
}


const Footer = ( { numberPage }: any ) => {
    
    return (
        <div className="footer">
            { (numberPage === 0)  ? <span>Загружаем котиков... </span> : <span>Больше котиков!!! </span> }
            <img src={loading} alt="loading" />
        </div>
    )
}

