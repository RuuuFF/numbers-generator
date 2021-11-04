const Input = props => {
  const { raffles, updateRaffles, inputKeyEvents } = props.list

  return (
    <div className="input-container">
      <div className="input-field">
        <label>Números para sortear:</label>
        <input
          value={raffles}
          onChange={updateRaffles}
          onKeyDown={event => inputKeyEvents(event)}
        />
      </div>
    </div>
  )
}

export default Input