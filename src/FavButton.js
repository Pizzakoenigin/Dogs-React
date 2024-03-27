export default function FavButton({isFav, changeFavourite, children}) {
  return (
    <>
      <button
        className={"dogFavButton"}
        onClick={changeFavourite}
      >
        {isFav ? "❤️" : "🩶"}{children}
      </button>
    </>
  );
}