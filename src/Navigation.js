import React, { useState, useEffect } from 'react'
import About from './About';
import Main from './Main';
import Header from './Header';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    function navigateTo(page) {
        window.history.pushState({}, '', page);
        setCurrentPage(page)
    };

    function getDogName(link) {
        const searchTerm = 'main/dog/';
        const indexOfFirst = link.indexOf(searchTerm);
        if (indexOfFirst !== -1) {
            let dogName = link.substring(indexOfFirst + searchTerm.length);
            return dogName;
        }

        return null;
    }

    function linkToSites() {
        if (currentPage.includes('main/dog/')) {
            let dogName = getDogName(currentPage);
            // console.log('dogName called');  
            return (
                <Main Dog={dogName} />
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
            </div>
        </>
    )
}