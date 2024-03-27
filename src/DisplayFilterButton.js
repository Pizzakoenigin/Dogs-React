import { createContext, useContext, useState, useEffect } from "react";
import { ContextFilter } from "./Main";

export default function DisplayFilterButton () {
    const { displayFilter, setDisplayFilter } = useContext(ContextFilter)
    function toggleDisplayFilter() {
        setDisplayFilter(!displayFilter)
    }

    return(
        <button onClick={toggleDisplayFilter} className= {!displayFilter ? 'foldedInFilter' : 'foldedOutFilter'}>
            {displayFilter ? 'hide Filter' : <img src="https://cdn-icons-png.flaticon.com/512/107/107799.png" alt="Filter Icon" id="iconFilter"/>}

        </button>
    )
}