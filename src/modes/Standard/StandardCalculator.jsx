import { useState } from 'react'
import '../../styles/standard.css'

export default function StandardCalculator() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)) // Tạm dùng eval
      } catch {
        setResult('Lỗi')
      }
    } else if (value === 'C') {
      setInput('')
      setResult('')
    } else {
      setInput((prev) => prev + value)
    }
  }

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C'
  ]

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>{btn}</button>
        ))}
      </div>
    </div>
  )
}
