import { createContext, useContext, useState, useEffect } from "react";
import { ContextDog } from "./Main";

export default function MultiRangeSlider({ }) {
    const {placeholderMin, setPlaceholderMin} = useContext(ContextDog)
    const {placeholderMax, setPlaceholderMax} = useContext(ContextDog)

    if (placeholderMin > placeholderMax || placeholderMin == 100) {
        setPlaceholderMin(placeholderMax)
    }

    // if (placeholderMin )

    return (
        <div className="sliderSize">
            <input
                type="range"
                min="10"
                max="100"
                className="thumb thumb-3"
                value={placeholderMin}
                onChange={(event) => {
                    setPlaceholderMin(event.target.value)
                }}
            />

            <input
                type="range"
                min="10"
                max="100"
                className="thumb thumb-4"
                value={placeholderMax}
                onChange={(event) => {
                    setPlaceholderMax(event.target.value)
                }}
            />

            <div className="slider" />
            {/*   mit zwei multiplizieren weil der slider 200px breit ist. placeholder min ist aber eine Wert zwischen 0 und 1 also muss er mit 2 multipliziert werden um auf die komplette fläche des sliders zu passen  */}
            {/* beim zweiten ist es mal 2.1 weil der rechte rand von dem cover nicht ganz unter den max regler liegt wen ich es nur mit 2 multipliziere*/}
            <div className="coverAreaSlider" style={{ left: placeholderMin * 2 + "px", width: (placeholderMax - placeholderMin) * 2.1 + "px" }}>
            </div>

            <div className="numberInputSlider">
                <input
                    className="inputSlider"
                    type="number"
                    value={placeholderMin}
                    onChange={(event) => {
                        setPlaceholderMin(event.target.value)
                    }}
                />
                <input
                    className="inputSlider"
                    type="number"
                    value={placeholderMax}
                    onChange={(event) => {
                        setPlaceholderMax(event.target.value)
                    }}
                />
            </div>
        </div>
    )
}