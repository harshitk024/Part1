import { useState } from 'react'

const Button = ({onClickHandle,text}) => {
     return (
      <>
       <button onClick = {onClickHandle}>{text}</button>
      </>
     )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
     setGood(good + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClickHandle = {handleGood} text = {"Good"} />
      <Button onClickHandle = {handleNeutral} text = {"Neutral"} />
      <Button onClickHandle = {handleBad} text = {"Bad"} />
      <h1>statistics</h1>
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
    </div>
  )
}

export default App