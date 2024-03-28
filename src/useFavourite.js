import { useState, useEffect } from "react";

// custom hook
export function useFavourite(init, nameOfFavDog) {
  const [localStorageFavourite, setLocalStorageFavourite] = useState(() => {
    // check if there is a saved status in the local storage if not, set it to the initial value. that gets passed down from the Item componente(false)
    const storedValue = localStorage.getItem(`isFavourite_${nameOfFavDog}`);
    return storedValue !== null ? JSON.parse(storedValue) : init;
  });

  // setting the fav state of a dog to the local storage so it get saved during a re render
  useEffect(() => {
    localStorage.setItem(`isFavourite_${nameOfFavDog}`, 
    JSON.stringify(localStorageFavourite));
  }, [localStorageFavourite, nameOfFavDog]);

  // if the heart emoji/ fav button is clicked toggle the updated favourite variable and set it to the local storage
  function changeFavourite() {
    const updatedFavourite = !localStorageFavourite;
    setLocalStorageFavourite(updatedFavourite);
    localStorage.setItem(`isFavourite_${nameOfFavDog}`, JSON.stringify(updatedFavourite));

  }

  // return that toggled value to fav button
  return { isFav: localStorageFavourite, changeFavourite };
}
