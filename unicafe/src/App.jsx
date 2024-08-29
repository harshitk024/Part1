import { useState } from 'react'

const Button = ({onClickHandle,text}) => {
     return (
      <>
       <button onClick = {onClickHandle}>{text}</button>
      </>
     )
}

const Stat = ({value,info}) => {
   return (
    <>
    <p>{info} : {value}</p>
    </>
   )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)

  const handleGood = () => {
     const updatedGood = good + 1 
     setGood(updatedGood)
     setTotal(updatedGood + neutral + bad)
  }

  const handleBad = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setTotal(good + neutral + updatedBad)
  }

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setTotal(good + updatedNeutral + bad)
  }
  

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClickHandle = {handleGood} text = {"Good"} />
      <Button onClickHandle = {handleNeutral} text = {"Neutral"} />
      <Button onClickHandle = {handleBad} text = {"Bad"} />
      <h1>statistics</h1>
      <Stat value = {good} info = {"Good"}/>
      <Stat value = {neutral} info = {"Neutral"}/>
      <Stat value = {bad} info = {"Bad"}/>
      <Stat value = {total} info = {"All"}/>
      <Stat value = {total === 0 ? 0 : (good - bad)/total} info = {"Average"} />
      <Stat value = {total === 0 ? 0: `${(good/total)*100} %`} info = {"Positive"} />
    </div>
  )
}

export default App