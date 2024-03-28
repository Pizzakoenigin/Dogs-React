export default function FavButton({isFav, changeFavourite, children}) {
  return (
    <>
      <button
        className={"dogFavButton"}
        // call the changeFavourite funtion inside the custom useFavourite Hook
        onClick={changeFavourite}
      >
        {isFav ? "❤️" : "🩶"}{children}
      </button>
    </>
  );
}