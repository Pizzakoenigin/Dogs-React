import React, { useState, useEffect, useContext, createContext } from 'react'
import About from './About';
import Main, { ContextFilter } from './Main';
import Header from './Header';

export const ContextDog = createContext()

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);

    const urlParams = new URLSearchParams(window.location.search);
    const dogNameFromURL = urlParams.get('dogName');
    if (dogNameFromURL) {
        console.log('there is an URL');
        let capitalizedDogNameFromURL = dogNameFromURL.charAt(0).toUpperCase()+dogNameFromURL.slice(1);
        
        console.log(capitalizedDogNameFromURL);
        localStorage.setItem('dogName', capitalizedDogNameFromURL);
    }


    const [dogNameOfDetailPage, setDogNameOfDetailPage] = useState(() => {
        const storedDogName = localStorage.getItem('dogName');
        return storedDogName || '';
    });
    console.log(dogNameOfDetailPage);

// hundename aus link extrahieren ohne local storage zu nutzen

    function navigateTo(page) {
        window.history.pushState({}, '', page);
        setCurrentPage(page)
    };

    function linkToSites() {
        if (currentPage.includes('main/dog/')) {
            // let dogName = getDogName(currentPage);
            // console.log('dogName called');  
            return (
                <Main Dog={dogNameOfDetailPage} />
            )
        }
        if (currentPage === '/main') {
            // setDogNameOfDetailPage('')
            // localStorage.setItem('dogName', '')
            return (

                <Main></Main>
            )
        }
        if (currentPage === '/about')
            return (
                <About></About>
            )
    }

    useEffect(() => {
        const handlePopState = (e) => {
            setCurrentPage(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };


    }, []);

    return (
        <>
            <ContextDog.Provider value={{ dogNameOfDetailPage, setDogNameOfDetailPage }}>
                <Header />
                <div>
                    <nav id='navBar'>
                        <button
                            className={currentPage == '/main' ? 'active' : 'passive'}
                            onClick={() => {
                                navigateTo('/main')
                            }}>
                            Home
                        </button>
                        <button
                            className={currentPage == '/about' ? 'active' : 'passive'}
                            onClick={() => navigateTo('/about')}>
                            About
                        </button>
                    </nav>
                    <div>
                        {linkToSites()}
                    </div>
                    {currentPage === '/main'}
                </div>
            </ContextDog.Provider>

        </>
    )
}