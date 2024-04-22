import { useContext } from "react";
import { ContextFilter } from "./Main";

// toggle between showing the entire filter or just the funnel symbol at the edge of the page
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