import { useState } from "react"

import './NumbersGenerator.css'

import Display from './Display'
import Range from './Range'
import Input from './Input'
import Button from './Button'

const NumbersGenerator = props => {
  const [ raffles, setRaffles ] = useState(props.raffles || 7)
  const [ display, setDisplay ] = useState(props.valueDisplay || <li>0</li>)
  const [ min, setMin ] = useState(props.min || 0)
  const [ max, setMax ] = useState(props.max || 100)
  const [ message, setMessage ] = useState("...")

  const updateMin = event => {
    const key = Number(event.nativeEvent.data)
    const value = Number(event.target.value)
    const range = max - value

    if (key >= 0 && key <= 9) {
      if(value >= max) {
        setMin(max)
        setRaffles(0)
      } else if (raffles > range) {
        setMin(value)
        setRaffles(range)
      } else {
        setMin(value)
      }
    }
  }

  const updateMax = event => {
    const key = Number(event.nativeEvent.data)
    const value = Number(event.target.value)
    const range = value - min 

    if (key >= 0 && key <= 9) {
      if(value <= min) {
        setMax(min)
        setRaffles(0)
      } else if (range < raffles) {
        setMax(value)
        setRaffles(range)
      } else {
        setMax(value)
      }
    }
  }

  const updateRaffles = event => {
    const key = Number(event.nativeEvent.data)
    const value = Number(event.target.value)
    const range = max - min

    if (key >= 0 && key <= 9) {
      if (range < 0) {
        setRaffles(0)
      } else if (value > range) {
        setRaffles(range)
      } else {
        setRaffles(value)
      }
    }
  }

  const inputKeyEvents = event => {
    const value = Number(event.target.value)
    const range = max - min

    if (event.key === 'Enter') {
      generateNums()
    } else if (event.key === 'ArrowUp' && value < range) {
      setRaffles(value + 1)
    } else if (event.key === 'ArrowDown' && value > 0) {
      setRaffles(value - 1)
    }
  }

  const styleNums = array => {
    return array
      .sort((a, b) => a - b)
      .map((item, index) => <li key={index}>{ item }</li>)
  }

  const updateDisplay = (array, calls) => {
    setMessage(`A função precisou de ${calls} loops para chegar neste resultado.`)
    setDisplay(styleNums(array))
  }

  const generateNums = () => {
    const generatedNums = []
    let iteration = 0
    let calls = 0
    
    while (iteration < raffles) {
      const num = Math.round(Math.random() * (max - min)) + min
      
      if (!generatedNums.includes(num)) {
        generatedNums.push(num)
        iteration++
        calls++
      } else {
        calls++
        continue
      }
    }

    updateDisplay(generatedNums, calls)
  }
  
  return (
    <div className="container">
      <h1>Gerador de Números</h1>
      <Display list={{ display, message }} />
      <Range list={{ min, max, updateMin, updateMax }} />
      <Input list={{ raffles, updateRaffles, inputKeyEvents }} />
      <Button generateNums={generateNums} />
    </div>
  )
}

export default NumbersGenerator