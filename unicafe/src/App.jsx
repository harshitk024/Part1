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


const Statistics = (props) => {


  if(props.total == 0){
    return(
      <>
      <p>No Feedback Provided</p>
      </>
    )
  }

  return (
    <>
      <Stat value = {props.good} info = {"Good"}/>
      <Stat value = {props.neutral} info = {"Neutral"}/>
      <Stat value = {props.bad} info = {"Bad"}/>
      <Stat value = {props.total} info = {"All"}/>
      <Stat value = {props.total === 0 ? 0 : (props.good - props.bad)/props.total} info = {"Average"} />
      <Stat value = {props.total === 0 ? 0: `${(props.good/props.total)*100} %`} info = {"Positive"} />
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
      <h1>Statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} />
    </div>
  )
}

export default App