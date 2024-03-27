import FavButton from "./FavButton"
import DetailButton from "./DetailButton";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { useFavourite } from "./useFavourite"
import { useState, useEffect, useContext } from "react";
import { ContextFilter } from "./Main";
import { ContextDog } from "./Navigation";

export default function Item({ dog, setRenderTrigger, renderTrigger }) {
  const { isFav, changeFavourite } = useFavourite(false, dog.name);
  const { dogNameOfDetailPage, setDogNameOfDetailPage } = useContext(ContextDog);

  useEffect(() => {
    setRenderTrigger(!renderTrigger);
  }, [isFav])

  return (
    <li key={dog.key}
      className={dogNameOfDetailPage === '' ? "" : "detailLiElement"}
    >
      <img
        src={dog.imgUrl}
        alt={'Picture of a ' + dog.name}
        className={dogNameOfDetailPage === '' ? "" : "detailImg"}
      //   style={{ transition: "transform 0.3s ease", width: "100%", height: "100%" }}
      // onMouseOver={(e) => {
      //   e.target.style.transform = "scale(1.02)";
      // }}
      // onMouseOut={(e) => {
      //   e.target.style.transform = "scale(1)";
      // }}
      />
      <h2>
        {dog.name} <FavButton dog={dog} isFav={isFav} changeFavourite={changeFavourite}></FavButton>
      </h2>
      <p>
        {'Fur length: ' + dog.fur_length}
      </p>
      <p>
        {'Fur surface: ' + dog.fur_surface}
      </p>
      <p>
        {'Lifespan: ' + dog.lifespan}
      </p>
      <p>
        {'Height: ' + dog.sizeMin + ' cm to ' + dog.sizeMax + ' cm'}
      </p>
      <p style={{ color: 'green' }}>
        {'Origin: ' + dog.origin}
      </p>

      <div className="buttomButtons">
        <DetailButton dog={dog}></DetailButton>

        <CopyToClipboardButton></CopyToClipboardButton>
      </div>

    </li>
  )
}

