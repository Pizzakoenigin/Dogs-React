import { useState, useEffect } from "react";

export function useFavourite(init, nameOfFavDog) {
  console.log('usefavourite called');
  const [localStorageFavourite, setLocalStorageFavourite] = useState(() => {
    const storedValue = localStorage.getItem(`isFavourite_${nameOfFavDog}`);
    return storedValue !== null ? JSON.parse(storedValue) : init;
  });

  useEffect(() => {
    localStorage.setItem(`isFavourite_${nameOfFavDog}`, 
    JSON.stringify(localStorageFavourite));
  }, [localStorageFavourite, nameOfFavDog]);

  function changeFavourite() {
    const updatedFavourite = !localStorageFavourite;
    setLocalStorageFavourite(updatedFavourite);
    localStorage.setItem(`isFavourite_${nameOfFavDog}`, JSON.stringify(updatedFavourite));

  }

  return { isFav: localStorageFavourite, changeFavourite };
}
