import React, { useState, useEffect, useContext, createContext } from 'react'
import About from './About';
import Main, { ContextFilter } from './Main';
import Header from './Header';

export const ContextDog = createContext()

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [dogNameOfDetailPage, setDogNameOfDetailPage] = useState(() => {
        const storedDogName = localStorage.getItem('dogName');
        return storedDogName || '';
    });
    console.log(dogNameOfDetailPage);


    function navigateTo(page) {
        window.history.pushState({}, '', page);
        setCurrentPage(page)
    };

    // function getDogName(link) {
    //     const searchTerm = 'main/dog/';
    //     const indexOfFirst = link.indexOf(searchTerm);
    //     if (indexOfFirst !== -1) {
    //         let dogName = link.substring(indexOfFirst + searchTerm.length);
    //         return dogName;
    //     }

    //     return null;
    // }

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
            <ContextDog.Provider value={{dogNameOfDetailPage, setDogNameOfDetailPage}}>
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