const Input = props => {
  const { raffles, updateRaffles, updateDisplay } = props.list

  return (
    <div className="input-container">
      <div className="input-field">
        <label>Números para sortear:</label>
        <input
          value={raffles}
          onChange={updateRaffles}
          onKeyDown={event => event.key === 'Enter' ? updateDisplay() : ''}
        />
      </div>
    </div>
  )
}

export default Input