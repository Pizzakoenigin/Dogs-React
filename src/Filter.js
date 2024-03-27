import Button from "./FilterButton";
import Searchfield from "./Searchfield";
import MultiRangeSlider from "./MultiRangeSlider";
import DisplayFilterButton from "./DisplayFilterButton";
import { createContext, useContext, useState, useEffect } from "react";
import { ContextFilter } from "./Main";

export default function Filter(p) {
  const { displayFilter, setDisplayFilter } = useContext(ContextFilter)

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
      <div id="filter">
        <form id='filterButtons'>
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
          <MultiRangeSlider placeholderMin={p.placeholderMin} setPlaceholderMin={p.setPlaceholderMin} placeholderMax={p.placeholderMax} setPlaceholderMax={p.setPlaceholderMax}></MultiRangeSlider>

          <h4>Favourite</h4>
          <Button clickHandler={handleClickFav} filter={p.filterFav}>Show only favourite dogs ❤️</Button>

          <h4>Search</h4>
          <Searchfield onFilterTextChange={p.setfilterText} filterText={p.filterText} />

          <h4>Change Filters</h4>
          <div id="changeFilterButtons">
            <button onClick={p.resetStatus} className="resetButton" style={{ marginRight: '10px' }}>Reset Filter</button>

            <DisplayFilterButton></DisplayFilterButton>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <DisplayFilterButton displayFilter={p.displayFilter} setDisplayFilter={p.setDisplayFilter}></DisplayFilterButton>
    )
  }
};

// function handleclick gedöns in die button komponente übertragen?