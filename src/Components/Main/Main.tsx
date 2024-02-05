import React, { useEffect } from "react";
import "./Main.css"

import { CartCat } from "../CartCat/CartCat";

type CatType = {
    name: string,
    id: string
}

export const Main = ( { Cats }:any ) => {

    return (
        <div className="container-main"> 
            <ul>
            {
                Cats.map( (el:any) => { 
                    const name = el.breeds[0].name
                    return <li key={el.id}><CartCat name = { name } imgUrl = { el.url } /></li> 
                } )
            }
            </ul>
        </div>
    )
}