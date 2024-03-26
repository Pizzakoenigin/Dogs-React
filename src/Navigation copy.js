import React, { useState, useEffect } from 'react'
import About from './About';
import Main from './Main';
import Header from './Header';
// import getDogName from './getDogName';

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState(window.location.pathname);
    function navigateTo(page) {
        window.history.pushState({}, '', page);
        setCurrentPage(page)
    };

    useEffect(() => {
        const handlePopState = (e) => {
            setCurrentPage(window.location.pathname);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    console.log(currentPage);
    function getDogName (link) {
        // Main/dog/rottweiler
    
        // Main/dog abschneiden und nur Rottweiler zurück geben
    
        const searchTerm = 'main/dog/';
        const indexOfFirst = link.indexOf(searchTerm);
    
        console.log(indexOfFirst);
        
    }

    function showDog() {
        console.log('called');
        if (currentPage === 'main/dog/'){
            
            console.log(getDogName(currentPage))
            // return (
                
            // // <Main Dog={getDogName(currentPage)} />
            // )
        }
    }

    return (
        <>
            <Header/>
            <div>
                <nav id='navBar'>
                    <button
                        className={currentPage == '/main' ? 'active' : 'passive'}
                        onClick={() => {
                            showDog();

                            navigateTo('/main')}}>
                        Home
                    </button>
                    <button
                        className={currentPage == '/about' ? 'active' : 'passive'}
                        onClick={() => navigateTo('/about')}>
                        About
                    </button>
                </nav>
                <div>
                    {/* {showDog()} //   an dieser Stelle wird es nie aufgerufen*/ }
                    {currentPage === '/main' && <Main></Main>}
                    {currentPage === '/about' && <About></About>}
                </div>
            </div>
        </>
    )
}