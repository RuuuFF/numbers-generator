const Range = props => {
  const { min, max, updateMin, updateMax } = props.list

  return (
    <div className="range-container">
      <div className="range-input-field">
        <label>Valor mínimo:</label>
        <input
          value={min}
          onChange={updateMin}
        />
      </div>

      <div className="range-input-field">
        <label>Valor máximo:</label>
        <input
          value={max}
          onChange={updateMax}
        />
      </div>
    </div>
  )
}

export default Range