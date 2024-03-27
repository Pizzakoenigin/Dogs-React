import { createContext, useContext, useState, useEffect } from "react";
import { ContextFilter } from "./Main";

export default function MultiRangeSlider({ }) {
    const {filterRangeMin, setfilterRangeMin} = useContext(ContextFilter)
    const {filterRangeMax, setFilterRangeMax} = useContext(ContextFilter)

    if (filterRangeMin > filterRangeMax || filterRangeMin == 100) {
        setfilterRangeMin(filterRangeMax)
    }

    return (
        <div className="sliderSize">
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

            <div className="slider" />
            {/*   mit zwei multiplizieren weil der slider 200px breit ist. placeholder min ist aber eine Wert zwischen 0 und 1 also muss er mit 2 multipliziert werden um auf die komplette fläche des sliders zu passen  */}
            {/* beim zweiten ist es mal 2.1 weil der rechte rand von dem cover nicht ganz unter den max regler liegt wen ich es nur mit 2 multipliziere*/}
            <div className="coverAreaSlider" style={{ left: filterRangeMin * 2 + "px", width: (filterRangeMax - filterRangeMin) * 2.1 + "px" }}>
            </div>

            <div className="numberInputSlider">
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