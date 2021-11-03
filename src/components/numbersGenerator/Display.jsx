const Display = props => {
  const { display, message } = props.list

  return (
    <div className="display-container">
      <span className="display-title">Números sorteados:</span>
      <div className="display-list-container">
        <ul className="display-list">
          { display }
        </ul>
      </div>
      <span className="display-message">{ message }</span>
    </div>
  )
}

export default Display