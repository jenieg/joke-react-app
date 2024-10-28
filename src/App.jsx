import React, {useState} from "react"
import './App.css'
import Joke from './components/Joke'
import jokesData from "./assets/data/jokesData"

function App() {
  const jokeElements = jokesData.map(joke => {
    // eslint-disable-next-line react/jsx-key
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })

  return (
    <>
      {jokeElements}
    </>
  )
}

export default App
