import { useState, useEffect } from "react";

export function useFavourite(init, dog) {
  const [isFavourite, setIsFavourite] = useState(() => {
    const storedValue = localStorage.getItem(`isFavourite_${dog.name}`);
    return storedValue !== null ? JSON.parse(storedValue) : init;
  });

  useEffect(() => {
    localStorage.setItem(`isFavourite_${dog.name}`, JSON.stringify(isFavourite));
  }, [isFavourite, dog.name]);

  function changeFavourite() {
    setIsFavourite(!isFavourite)
    dog.fav = !isFavourite
  }
  return [isFavourite, changeFavourite];
}
