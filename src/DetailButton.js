import { createContext, useContext, useState, useEffect } from "react";
import { ContextDog } from "./Main";
import { click } from "@testing-library/user-event/dist/click";

export default function DetailButton({ dog }) {
    const { displayFilter, setDisplayFilter } = useContext(ContextDog)

    const {isDetail, setIsDetail} = useContext(ContextDog)
    const {clickedDog, setClickedDog} = useContext(ContextDog)

    // navigation start
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    function navigateTo(page) {
      window.history.pushState({},'', page);
      setCurrentPage(page)
    }
  
    useEffect(() =>{
      const handlePopState = (e) => {
        setCurrentPage(window.location.pathname);
      };
  
      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState)
      };
    }, [])
    // navigation finish



    function changeDetail() {
        console.log(clickedDog);
            console.log(clickedDog, dog.name);
        	setIsDetail(!isDetail);
            // console.log(isDetail);

            setClickedDog('Test');
            console.log(clickedDog);

            // hier passiert das ausblenden des Filters

            // console.log(isDetail,showDetail,dog.detail,displayFilter);
            // true false true true

    }

    return (
        <button
            onClick={() => {
                changeDetail(); 
                if (isDetail){
                    navigateTo('/main/dog/' + dog.name) //abfrage main oder main/dog
                } else {
                    // console.log('back');
                    // changeDetail();
                    navigateTo('/main')}
                }
                }
            className="detailButton"
            style={{ transition: "transform 0.3s ease"}}
            onMouseOver={(e) => {
                e.target.style.transform = "scale(1.02)";
            }}
            onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
            }}>
            {isDetail ? "back to overview" : "🔎 Show Details"}

            {/* {currentPage === '/main/' + dog.name} */}
        </button>
    )
}