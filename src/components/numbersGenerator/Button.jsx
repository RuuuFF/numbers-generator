const Button = props => {
  return (
    <div className="button-container">
      <button onClick={props.generateNums}>Sortear</button>
    </div>
  )
}

export default Button