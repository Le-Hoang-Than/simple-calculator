import { useState } from 'react'
import StandardCalculator from './modes/Standard/StandardCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>🧮 Máy Tính Cơ Bản (Standard)</h1>
      <StandardCalculator />
    </div>
    
  )
}

export default App
