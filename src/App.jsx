import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Service from './Service'

function App() {

  const [jokes, setJokes] = useState([])

  async function fetchData() {
    const service = await Service();
    setJokes(service)

  }
  useEffect(() => {
     fetchData();

    // Can use axios here also instead creating a seperate api service file.
    // axios.get('/api/jokes')
    //   .then((res) => {
    //     console.log("runs")
    //     setJokes(res.data)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

  },[])
  return (
    <>
      <h1>Jokes with Prime</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          // "{}" curly braces in map() needs return that's why it was not rendering this html part.
          // Instead use "()"
          <div key={joke.id}>
            <h3>Title: {joke.title}</h3>
            <h3>Content: {joke.content}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App
