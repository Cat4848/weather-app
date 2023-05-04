export function Form({ location, onInputChange, onSearch }) {
  return (
    <>
      <label>UK City:</label>
      <input 
        type="text"
        value={location}
        onChange={e => onInputChange(e.target.value)}
      />
    </>
  )
}