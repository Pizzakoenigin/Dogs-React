import Button from "./FilterButton";
import Searchfield from "./Searchfield";
import MultiRangeSlider from "./MultiRangeSlider";
import DisplayFilterButton from "./DisplayFilterButton";
import { createContext, useContext, useState, useEffect } from "react";
import { ContextFilter } from "./Main";
import { ContextDog } from "./Navigation";

export default function Filter(p) {
  const { displayFilter, setDisplayFilter } = useContext(ContextFilter)
  const {dogNameOfDetailPage, setDogNameOfDetailPage} = useContext(ContextDog);


  function handleClickShort() {
    p.setshowShort(!p.showShort);
  }

  function handleClickMedium() {
    p.setshowMedium(!p.showMedium);
  }

  function handleClickLong() {
    p.setshowLong(!p.showLong);
  }

  function handleClickSmooth() {
    p.setshowSmooth(!p.showSmooth)
  }

  function handleclickCurly() {
    p.setshowCurly(!p.showCurly)
  }

  function handleClickFav() {
    p.setfilterFav(!p.filterFav);
  }

  if (displayFilter) {
    return (
      <div id="filter" 
      // show filters in overview
        style={{display: dogNameOfDetailPage !== '' ? 'none' : 'inline'}}

      >
        <div className='filterButtons'>
          <h3>Filter</h3>
          <h4>Fur</h4>
          <div id="furLength">
            <Button clickHandler={handleClickShort} filter={p.showShort}>Short fur</Button>
            <Button clickHandler={handleClickMedium} filter={p.showMedium}>Medium fur</Button>
            <Button clickHandler={handleClickLong} filter={p.showLong}>Long fur</Button>
          </div>

          <h4>Fur surface</h4>
          <div id="furSurface">
            <Button clickHandler={handleClickSmooth} filter={p.showSmooth}>Smooth fur</Button>
            <Button clickHandler={handleclickCurly} filter={p.showCurly}>Curly fur</Button>
          </div>

          <h4>Height in cm</h4>
          <MultiRangeSlider filterRangeMin={p.filterRangeMin} setFilterRangeMin={p.setFilterRangeMin} filterRangeMax={p.filterRangeMax} setFilterRangeMax={p.setFilterRangeMax}></MultiRangeSlider>

          <h4>Favourite</h4>
          <Button clickHandler={handleClickFav} filter={p.filterFav}>Show only favourite dogs ❤️</Button>

          <h4>Search</h4>
          <Searchfield onFilterTextChange={p.setfilterText} filterText={p.filterText} />

          <h4>Change Filters</h4>
          <div id="changeFilterButtons">
            <button onClick={p.resetStatus} className="resetButton" style={{ marginRight: '10px' }}>Reset Filter</button>

            <DisplayFilterButton></DisplayFilterButton>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // hide filters in detailpage
      <div style={{display: dogNameOfDetailPage !== '' ? 'none' : 'inline'}} >
        <DisplayFilterButton displayFilter={p.displayFilter} setDisplayFilter={p.setDisplayFilter}></DisplayFilterButton>
      </div>
      
    )
  }
};

// function handleclick gedöns in die button komponente übertragen?