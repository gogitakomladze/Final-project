import { GlobalContext} from "@src/provider/GlobalProvider"
import { useContext, useState, useEffect } from "react"

import { publicAxios } from "@src/utils/publicAxios"
import axios from "axios"

export function Buypage(){
    const buysum = localStorage.getItem("sumProduct");
    return(
        <div>{buysum}</div>
    )
}