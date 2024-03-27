import React, { useState, useEffect, createContext } from 'react'
import About from './About';
import Main from './Main';
import Header from './Header';

export const ContextDog = createContext()

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [dogNameOfDetailPage, setDogNameOfDetailPage] = useState('')

    function getDogName(link) {
        const searchTerm = 'main/dog/';
        const indexOfFirst = link.indexOf(searchTerm);
        if (indexOfFirst !== -1) {
            let dogName = link.substring(indexOfFirst + searchTerm.length);
            return dogName;
        }
        return null;
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

    useEffect(() => {
        console.log('page changed');
        if (currentPage.includes('main/dog/')) {
            console.log('main/dog/included');
            setDogNameOfDetailPage(getDogName(currentPage))
        }
    }, [currentPage])

    function navigateTo(page) {
        window.history.pushState({}, '', page);
        setCurrentPage(page)
    };

    function linkToSites() {
        if (currentPage.includes('main/dog/')) {
            console.log('dogNameOfDetailPage' + dogNameOfDetailPage);
            let decodedDog = decodeURIComponent(dogNameOfDetailPage)
            console.log('decodedDog' + decodedDog);
            return (
                <Main Dog={decodedDog} />
            )
        }
        if (currentPage === '/main') {
            return (

                <Main></Main>
            )
        }
        if (currentPage === '/about')
            return (
                <About></About>
            )
    }

    return (
        <>
            <ContextDog.Provider value={{ dogNameOfDetailPage, setDogNameOfDetailPage, currentPage, setCurrentPage }}>
                <Header />
                <div>
                    {/* <nav id='navBar'>
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
                    </nav> */}
                    <div>
                        {linkToSites()}
                    </div>
                    {currentPage === '/main'}
                </div>
            </ContextDog.Provider>

        </>
    )
}