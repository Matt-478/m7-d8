import React, { useState } from 'react';
import './App.css';
import {MainPage} from './components/MainPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route } from 'react-router-dom'
import { Details } from './components/Details'
import {useEffect} from 'react'

function App() {

  const [allTracks, setAllTracks] = useState([])

  useEffect(() => {
    const fetchBooks = async() => {
      try {
        let response = await fetch ("https://striveschool-api.herokuapp.com/api/deezer/search?q=")
        if(response.ok) {
          const fetchedTracks = await response.json()
          console.log(fetchedTracks)
          // setAllTracks(fetchedTracks)
        } else {
          console.log("something went wrong with the fetch")
        }
      } catch (error) {
        
      }
    }
    fetchBooks()
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Route exact path="/" render={(routerProps) => <MainPage {...routerProps} title="useless"/>} />
        <Route exact path="/Details" component={Details}/>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
