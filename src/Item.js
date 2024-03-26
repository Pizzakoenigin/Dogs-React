import FavButton from "./FavButton"
import DetailButton from "./DetailButton";
import { useFavourite} from "./useFavourite"
import {useState, useEffect, useContext }from "react";
import { ContextDog } from "./Main";

export default function Item({ dog, setRenderTrigger, renderTrigger, showDetail, setShowDetail}) {
  const {isFav, changeFavourite} = useFavourite(false, dog);
  const {isDetail, setIsDetail} = useContext(ContextDog)

  useEffect(() => {
    setRenderTrigger(!renderTrigger);
  }, [isFav,isDetail])

  return (
    <li key={dog.key}>
      <img 
      src={dog.imgUrl} 
      alt={'Picture of a ' + dog.name} 
      className= {isDetail ? "" : "detailImg"}
    //   style={{ transition: "transform 0.3s ease", width: "100%", height: "100%" }}
    // onMouseOver={(e) => {
    //   e.target.style.transform = "scale(1.02)";
    // }}
    // onMouseOut={(e) => {
    //   e.target.style.transform = "scale(1)";
    // }}
      />
      <h2>
        {dog.name} <FavButton dog = {dog} isFav={isFav} changeFavourite={changeFavourite}></FavButton>
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

      <DetailButton dog = {dog} isDetail = {isDetail}  setIsDetail = {setIsDetail} showDetail = {showDetail } setShowDetail = {setShowDetail}>
      
      </DetailButton>
    </li>
  )
}

