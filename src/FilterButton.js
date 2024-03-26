export default function Button ({ clickHandler, filter, children }) {
    return (
      <label>
        <input
          type='checkbox'
          onChange={(e) => clickHandler(e.target.checked)}
          checked={filter}
          name="filter"
        />
         {children}
      </label >
    )
}