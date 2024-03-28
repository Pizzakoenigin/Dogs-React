import { createContext, useContext, useState, useEffect } from "react";
import { ContextFilter } from "./Main";

export default function MultiRangeSlider({ }) {
    // create two statuses for min and max range of the filter. these are used in the slider an the numbers input
    const { filterRangeMin, setfilterRangeMin } = useContext(ContextFilter)
    const { filterRangeMax, setFilterRangeMax } = useContext(ContextFilter)

    if (filterRangeMin > filterRangeMax || filterRangeMin == 100) {
        setfilterRangeMin(filterRangeMax)
    }
    // with the power of ccs two sliders are created on top of each other (z value)
    return (
        <div className="sliderSize">
            <div className="slider">
                <input
                    type="range"
                    min="10"
                    max="100"
                    className="thumb thumb-3"
                    value={filterRangeMin}
                    onChange={(event) => {
                        setfilterRangeMin(event.target.value)
                    }}
                />

                <input
                    type="range"
                    min="10"
                    max="100"
                    className="thumb thumb-4"
                    value={filterRangeMax}
                    onChange={(event) => {
                        setFilterRangeMax(event.target.value)
                    }}
                />

                <div className="areaSlider" />
                {/*   multiply by 2 bc the slider is 200px width. but min is a value between 0 and 100. so multiply by two to cover the whole area  */}
                {/*  here i multiply with 1.8 because otherwise it looks weird*/}
                <div className="coverAreaSlider" style={{ left: (filterRangeMin * 1.8) + "px", width: (filterRangeMax - filterRangeMin) * 2 + "px" }}>
                </div>
            </div>


            <div className="numberInputSlider">
                {/* regular number input */}
                <input
                    className="inputSlider"
                    type="number"
                    value={filterRangeMin}
                    onChange={(event) => {
                        setfilterRangeMin(event.target.value)
                    }}
                />
                <input
                    className="inputSlider"
                    type="number"
                    value={filterRangeMax}
                    onChange={(event) => {
                        setFilterRangeMax(event.target.value)
                    }}
                />
            </div>
        </div>
    )
}