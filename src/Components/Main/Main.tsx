import React from "react";

import { CartCat } from "../CartCat/CartCat";


export const Main = () => {
    return (
        <div className="container-main"> 
            <ul>
                <li><CartCat /></li>
                <li><CartCat /></li>
                <li><CartCat /></li>
                <li><CartCat /></li>
                <li><CartCat /></li>
            </ul>
        </div>
    )
}