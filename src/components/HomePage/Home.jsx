import React from "react";
import {fastFoodLikeURL} from "../helpers/Url";

export function Home() {
    return (
        <div>
            <h1>Fast Food Like</h1>
            <a href={fastFoodLikeURL}>перейти на сайт</a>
        </div>
    )
}