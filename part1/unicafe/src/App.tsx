import { useState } from 'react'
import Button from './Button';
import Statistics from './Statistics';

function App() {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
  
    return (
      <>
        <h1>Give Feedback</h1>
        <Button onClick={() => setGood(prev => prev + 1)} text="good" />
        <Button onClick={() => setNeutral(prev => prev + 1)} text="neutral" />
        <Button onClick={() => setBad(prev => prev + 1)} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
    )
}

export default App
