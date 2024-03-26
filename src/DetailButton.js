import { createContext, useContext, useState, useEffect } from "react";
import { ContextDog } from "./Main";
import { click } from "@testing-library/user-event/dist/click";

export default function DetailButton({ dog }) {
    const { displayFilter, setDisplayFilter } = useContext(ContextDog)

    const { isDetail, setIsDetail } = useContext(ContextDog)
    const { clickedDog, setClickedDog } = useContext(ContextDog)

    // navigation start
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    function navigateTo(page) {
        window.history.pushState({}, '', page);
        setCurrentPage(page)
    }

    useEffect(() => {
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


        setIsDetail(!isDetail);
        // console.log(isDetail);



        // hier passiert das ausblenden des Filters

        // console.log(isDetail,showDetail,dog.detail,displayFilter);
        // true false true true

    }

    return (
        <>
            <button
                onClick={() => {
                    // changeDetail();
                    // if (isDetail) {

                    // } else {
                    // console.log('back');
                    // changeDetail();
                    console.log(dog.name);


                    setClickedDog(dog.name);
                    console.log(clickedDog);

                    // das scheint grade noch nciht zu funktionieren da beim zweiten fav click noch der vorherige Hund angezeigt wird
                    navigateTo('/main/dog/' + dog.name)

                    // } //abfrage main oder main/dog
                }
                }
                className="detailButton"
                style={{ transition: "transform 0.3s ease" }}
                onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                }}>
                🔎 Show Details
                {currentPage === '/main/' + dog.name}
            </button>
            <button
                onClick={() => {
                    navigateTo('/main')
                }}>
                back to overview
            </button>
        </>


    )
}