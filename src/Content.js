import React, { useEffect, useState, useContext } from "react";
import Item from "./Item";
import { ContextFilter } from "./Main";
import { ContextDog } from "./Navigation";

export default function Content(p) {
  const { placeholderMin, setPlaceholderMin } = useContext(ContextFilter)
  const { placeholderMax, setPlaceholderMax } = useContext(ContextFilter)
  const { displayFilter, setDisplayFilter } = useContext(ContextFilter)
  const { isDetail, setIsDetail } = useContext(ContextFilter)
  const {dogNameOfDetailPage, setDogNameOfDetailPage} = useContext(ContextDog)

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
  
  if (dogNameOfDetailPage != '') {
    p.Dogs.forEach(dog => {

      if (dog.name != p.Dog) {
        return

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
  } else {
    p.Dogs.sort(sortAlphabet);
    p.Dogs.forEach(dog => {
      dog.fav = localStorage.getItem(`isFavourite_${dog.name}`);

      if (dog.name.toLowerCase().indexOf(p.filterText.toLowerCase()) === -1) {
        return;
      }

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

      if (p.filterFav && dog.fav === "false") {
        return
      }

      if (placeholderMin > dog.sizeMin) {
        return
      }

      if (placeholderMax < dog.sizeMax) {
        return
      }

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





  if (content.length === 0) {
    return <div id="noResults">
      <img src="https://http.dog/204.jpg"></img>
      <p>
        No dog matches your filters.
      </p>
      {/* <button onClick={p.resetStatus} className="resetButton">Reset filters</button> */}
    </div>

  }

  return <ul>{content}</ul>;
}
