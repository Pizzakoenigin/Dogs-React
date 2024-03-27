import { createContext, useContext, useState, useEffect } from "react";
import { ContextFilter } from "./Main";
import { ContextDog } from "./Navigation";
import { click } from "@testing-library/user-event/dist/click";

export default function DetailButton({ dog }) {
    const { displayFilter, setDisplayFilter } = useContext(ContextFilter)
    const { dogNameOfDetailPage, setDogNameOfDetailPage } = useContext(ContextDog)
    const {currentPage, setCurrentPage} = useContext(ContextDog);

    // navigation start
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

    return (
        <>
            <button
                onClick={() => {
                    setDogNameOfDetailPage(dog.name);
                    navigateTo('/main/dog/' + dog.name)
                    setDisplayFilter(false)
                }}
                className="detailButton"
                style={{ transition: "transform 0.3s ease", 
                display: dogNameOfDetailPage === '' ? 'inline' : 'none' }}
                onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                }}>
                🔎 Show Details

            </button>
            <button
                onClick={() => {
                    navigateTo('/main');
                    setDogNameOfDetailPage('')
                }}
                style={{display: dogNameOfDetailPage === '' ? 'none' : 'inline' }}
                >
                back to overview
            </button>
        </>
    )
}