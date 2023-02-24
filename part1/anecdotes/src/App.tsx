import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [highest, setHighest] = useState(0);

  function vote(index: number){
    setVotes((prev) => {
      const copy = [...prev];
      copy[index] += 1;
      if(copy[index] > copy[highest]){
        setHighest(index);
      }
      return copy
    })
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={() => vote(selected)}>Vote</button>
      <button
        onClick={() => setSelected((prev) => (prev + 1) % anecdotes.length)}
      >
        next anecdote
      </button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[highest]}</p>
    </div>
  );
}

export default App
