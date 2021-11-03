const Button = props => {
  return (
    <div className="button-container">
      <button onClick={props.updateDisplay}>Sortear</button>
    </div>
  )
}

export default Button