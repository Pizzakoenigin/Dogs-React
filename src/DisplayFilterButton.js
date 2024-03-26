import { createContext, useContext, useState, useEffect } from "react";
import { ContextDog } from "./Main";

export default function DisplayFilterButton () {
    const { displayFilter, setDisplayFilter } = useContext(ContextDog)
    function toggleDisplayFilter() {
        setDisplayFilter(!displayFilter)
    }

    return(
        <button onClick={toggleDisplayFilter} className= {!displayFilter ? 'foldedInFilter' : 'foldedOutFilter'}>
            {displayFilter? 'hide Filter' : 'show Filter'}
        </button>
    )
}