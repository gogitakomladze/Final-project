import { GlobalContext} from "@src/provider/GlobalProvider"
import { useContext, useState, useEffect } from "react"

import { publicAxios } from "@src/utils/publicAxios"
import axios from "axios"

export function Buypage(){

    async function getbuyproduct() {
        const raqvest = await axios.get("")
        
    }
    return(
        <div>Buypage</div>
    )

}