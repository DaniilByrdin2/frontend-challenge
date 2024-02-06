import React, {FC} from "react";

import loading from "../../Img/icons8-точки-загрузки.gif"
import { CartCat } from "../CartCat/CartCat";

import { CartCatType } from "../../App";

import "./Main.css"



interface MainInerface  {
  "numberPage": number,
  "AddCat": ( id: string ) => void,
  "DeleteCat": ( id: string ) => void,
  "Loading": boolean,
  "Cats": CartCatType[],

}

export type mapElementType = {
  "id": string,
  "url": string,
  "like": boolean | undefined
}

export const Main:FC<MainInerface> = ( { Cats, Loading, numberPage, AddCat, DeleteCat } ) => { 

    return (
      <div className="container-main">
        
        <ul>
          { Cats.map( ( { id, url, like }:mapElementType  ) => {
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


interface FooterType {
  "numberPage": number
}

const Footer:FC<FooterType> = ( { numberPage } ) => {
    
    return (
        <div className="footer">
            { (numberPage === 0)  ? <span>Загружаем котиков... </span> : <span>Больше котиков!!! </span> }
            <img src={loading} alt="loading" />
        </div>
    )
}

