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
  // if there is a dog from the previous link we need to remove the %20 that stands for an empty digit. 
  // let decodedDog = decodeURIComponent(p.Dog)

  function sortAlphabet(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1
    }
    return 0;
  }
  p.Dogs.sort(sortAlphabet);

  // hier wird anhand des Statuses entschieden ob ein einzelnes Item oder die ganze Liste gerendet wird
  if (dogNameOfDetailPage != '') {
    p.Dogs.forEach(dog => {

      if (dog.name != dogNameOfDetailPage) {
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
    p.Dogs.forEach(dog => {
      // console.log(dog.name);
      // entscheidung nur Dog oder alle Dogs anzeigen
      // prüfen ob Hunde vorhanden (main/dog/blabla funktioniert nicht)
      // check if individual dog site is open 




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

      // eventuell raus?




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
