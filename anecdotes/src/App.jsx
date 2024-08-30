import { useState } from 'react'

import "./App.css"

const Button = (props) =>{

   return (
      <div id = "button">
       <button onClick = {props.handleClick}>{props.text}</button>
      </div>
   )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes,setVote] = useState(Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    setSelected(selected + 1)

  }


  const makeVote = () =>{
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVote(copyVotes)
    console.log("Votes : ",copyVotes);
    
  }

  return (
    <div>
      {anecdotes[selected]}
      {`has ${votes[selected]} votes`}
      <div>
      <Button handleClick = {makeVote} text = {"vote"}></Button>
      <Button handleClick = {nextAnecdote} text = {"next anecdote"} />
      </div>
    </div>
  )
}

export default App