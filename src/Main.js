import React, { useState, useContext, createContext } from "react"
import Filter from "./Filter";
import Content from "./Content";
import { Dogs } from './data/dogs'

export const ContextFilter = createContext();

export default function Main({Dog=''}) {
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
  }

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