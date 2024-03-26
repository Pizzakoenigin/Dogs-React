export default function Searchfield({ onFilterTextChange, filterText }) {
    return (
      <input
        type='text'
        value={filterText}
        placeholder='Search for a dog...'
        onChange={(e) => onFilterTextChange(e.target.value)}
        id="searchfield"
      />
    )
  }