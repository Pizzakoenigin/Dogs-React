import React, { useState, useEffect, createContext } from 'react'
import Main from './Main';
import Header from './Header';

export const ContextDog = createContext()

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    const [dogNameOfDetailPage, setDogNameOfDetailPage] = useState('')

    // on refresh of the page get the name of the current dog from the url and use the name as variable for rendering the content
    function getDogName(link) {
        const searchTerm = 'main/dog/';
        const indexOfFirst = link.indexOf(searchTerm);
        if (indexOfFirst !== -1) {
            let dogName = link.substring(indexOfFirst + searchTerm.length);
            return dogName;
        }
        return null;
    }

    // useEffect for browser navigation
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
        if (currentPage.includes('main/dog/')) {
            setDogNameOfDetailPage(getDogName(currentPage))
        }
    }, [currentPage])

    function linkToSites() {
        if (currentPage.includes('main/dog/')) {
            let decodedDog = decodeURIComponent(dogNameOfDetailPage)
            return (
                <Main Dog={decodedDog} />
            )
        }

        // if the user types invalid stuff like /blabla change to /main
        if (currentPage != '/main')
            window.location.replace("/main")
        return (
            <Main />
        )
    }

    return (
        <>
            {/* context provides the status of dog and current page to components that need it */}
            <ContextDog.Provider value={{ dogNameOfDetailPage, setDogNameOfDetailPage, currentPage, setCurrentPage }}>
                <Header />
                <div>
                    <div>
                        {linkToSites()}
                    </div>
                    {currentPage === '/main'}
                </div>
            </ContextDog.Provider>
        </>
    )
}