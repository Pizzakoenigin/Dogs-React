import React, { useState, useContext } from "react";
import Item from "./Item";
import { ContextFilter } from "./Main";
import { ContextDog } from "./Navigation";

export default function Content(p) {
  // here we render the dogs
  // range of the size filter
  const { filterRangeMin, setFilterRangeMin } = useContext(ContextFilter)
  const { filterRangeMax, setFilterRangeMax } = useContext(ContextFilter)
  // appearance of the filter
  const { displayFilter, setDisplayFilter } = useContext(ContextFilter)
  // show detailpage of dog or not
  const { dogNameOfDetailPage, setDogNameOfDetailPage } = useContext(ContextDog)
  // triggering a re render if the fav status of a dog changes otherwise the appearance of the heart symbol doesnt change. and unfavouriting a dog doesnt remove him from the display of fav dogs.
  const [renderTrigger, setRenderTrigger] = useState(false)

  let content = [];
  function sortAlphabet(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1
    }
    return 0;
  }

  // check if there is request for the detailpage (dognameofdetailpage is a string e.g. Rottweiler)
  if (dogNameOfDetailPage != '') {
    p.Dogs.forEach(dog => {
      setDisplayFilter(false)
      // based on the json dog list compare if one of these dogs matches the dognameofdetailpage
      if (dog.name != p.Dog) {
        return
        // use the data from this dog that matches the name and use it to create a Item component
      } else {
        content.push(
          <Item
            dog={dog}
            key={dog.name}
            showShort={p.showShort}
            showMedium={p.showMedium}
            showLong={p.showLong}
            filterFav={p.filterFav}
            setRenderTrigger={setRenderTrigger}
            renderTrigger={renderTrigger}
          />
        )
      }
    })
    // if there is not a request for the detailpage (dognameofdetailpage is an empty string)
  } else {
    
    // use the list of dogs from the j.son file. sort it alphabetical
    p.Dogs.forEach(dog => {
      dog.fav = localStorage.getItem(`isFavourite_${dog.name}`);
      // searchfield of a dog
      if (dog.name.toLowerCase().indexOf(p.filterText.toLowerCase()) === -1) {
        return;
      }
      // filter for fur length
      if (
        (!p.showShort && dog.fur_length === "Short") ||
        (!p.showMedium && dog.fur_length === "Medium") ||
        (!p.showLong && dog.fur_length === "Long")
      ) {
        return;
      }

      if (
        (!p.showSmooth && dog.fur_surface === "Smooth") ||
        (!p.showCurly && dog.fur_surface === "Curly")
      ) {
        return;
      }
      // fav filter
      if (p.filterFav && dog.fav === "false") {
        return
      }
      // size of the dog
      if (filterRangeMin > dog.sizeMin) {
        return
      }

      if (filterRangeMax < dog.sizeMax) {
        return
      }

      p.Dogs.sort(sortAlphabet);
      // if a dog matches the filter put his data into the Item Component, that gets pushed into the content array
      content.push(
        <Item
          dog={dog}
          key={dog.name}
          showShort={p.showShort}
          showMedium={p.showMedium}
          showLong={p.showLong}
          filterFav={p.filterFav}
          setRenderTrigger={setRenderTrigger}
          renderTrigger={renderTrigger}

        />
      );

    });
  }

  // if there is no dog that matches the filter(content array is empthy) give a message
  if (content.length === 0) {
    return <div id="noResults">
      <img src="https://http.dog/404.jpg"></img>
      <p>
        No dog matches your filters.
      </p>
      {/* <button onClick={p.resetStatus} className="resetButton">Reset filters</button> */}
    </div>
  }
  // return the content array as list
  return <ul>{content}</ul>;
}
