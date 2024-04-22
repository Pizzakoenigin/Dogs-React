import React, { useState, createContext } from "react"
import Filter from "./Filter";
import Content from "./Content";
import { Dogs } from './data/dogs'

export const ContextFilter = createContext();

export default function Main({Dog=''}) {
  // usestates for clicking on or off buttons
  const [showShort, setshowShort] = useState(true);
  const [showMedium, setshowMedium] = useState(true);
  const [showLong, setshowLong] = useState(true);
  const [showSmooth, setshowSmooth] = useState(true);
  const [showCurly, setshowCurly] = useState(true);
  const [filterFav, setfilterFav] = useState(false);
  
  const [filterText, setfilterText] = useState('');
  const [filterRangeMin, setfilterRangeMin] = useState(10);
  const [filterRangeMax, setFilterRangeMax] = useState(100);
  const [displayFilter, setDisplayFilter] = useState(true);

  // resetbutton
  function resetStatus() {
    setshowShort(true);
    setshowMedium(true);
    setshowLong(true);
    setshowSmooth(true);
    setshowCurly(true);
    setfilterFav(false);
    setfilterText('');
    setfilterRangeMin(10);
    setFilterRangeMax(100);
  }

  return (
    <>
    {/* provide context to components that are deeper in the website structure. so you don't need to pass them multiple times via properties */}
      <ContextFilter.Provider value={{ displayFilter, setDisplayFilter, filterRangeMin, setfilterRangeMin, filterRangeMax, setFilterRangeMax }}>
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