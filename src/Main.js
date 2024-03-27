import React, { useState, useContext, createContext } from "react"
import Filter from "./Filter";
import Content from "./Content";
import { Dogs } from './data/dogs'
import { ContextDog } from "./Navigation";

export const ContextFilter = createContext();

export default function Main({Dog=''}) {
  const { dogNameOnDetailPage, setdogNameOnDetailPage } = useContext(ContextDog)

  const [showShort, setshowShort] = useState(true);
  const [showMedium, setshowMedium] = useState(true);
  const [showLong, setshowLong] = useState(true);
  const [showSmooth, setshowSmooth] = useState(true);
  const [showCurly, setshowCurly] = useState(true);
  const [filterFav, setfilterFav] = useState(false);
  
  const [filterText, setfilterText] = useState('');
  const [placeholderMin, setPlaceholderMin] = useState(10);
  const [placeholderMax, setPlaceholderMax] = useState(100);
  const [displayFilter, setDisplayFilter] = useState(true);

  
  // const [isDetail, setIsDetail] = useState(false)

  function resetStatus() {
    setshowShort(true);
    setshowMedium(true);
    setshowLong(true);
    setshowSmooth(true);
    setshowCurly(true);
    setfilterFav(false);

    setfilterText('');
    setPlaceholderMin(10);
    setPlaceholderMax(100);

    setdogNameOnDetailPage('');
    // setIsDetail(false)
  }

  // hier reset des detailstatus wenn die hunde detail seite neugeladen wird

  // if (Dog != ''){
  //   setIsDetail(true);
  // p.setShowDetail(false)
  // dog.detail = true
  // setDisplayFilter(true)
  // }

  // zuviele statusE?

  

  return (
    <>
      <ContextFilter.Provider value={{ displayFilter, setDisplayFilter, placeholderMin, setPlaceholderMin, placeholderMax, setPlaceholderMax }}> {/* isDetail, setIsDetail  // auf entsprechende statuse anwenden*/}
        <div id='main'>
          <Filter
            showShort={showShort}
            showMedium={showMedium}
            showLong={showLong}
            showSmooth={showSmooth}
            showCurly={showCurly}
            filterFav={filterFav}
            filterText={filterText}
            resetStatus={resetStatus}
            setshowCurly={setshowCurly}
            setshowSmooth={setshowSmooth}
            setshowLong={setshowLong}
            setshowMedium={setshowMedium}
            setshowShort={setshowShort}
            setfilterFav={setfilterFav}
            setfilterText={setfilterText}
          />
          <div id='dogList'>
            {/* logik ändern entweder content(hundeliste) oder einzelnen Hund anzeigen */}
            {/* wenn dog nicht = ''  */}
            
            <Content
              Dog={Dog}
              Dogs={Dogs}
              filterText={filterText}
              showShort={showShort}
              showMedium={showMedium}
              showLong={showLong}
              showSmooth={showSmooth}
              showCurly={showCurly}
              filterFav={filterFav}

              setshowCurly={setshowCurly}
              setshowSmooth={setshowSmooth}
              setshowLong={setshowLong}
              setshowMedium={setshowMedium}
              setshowShort={setshowShort}
              setfilterFav={setfilterFav}
              setfilterText={setfilterText}
              resetStatus={resetStatus}

            />
          </div>
        </div>
      </ContextFilter.Provider>

    </>
  )
}