import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='container'>
        <h1>Welcome to Tetris</h1>
        <div className="buttons">
            <Link to="/game"><button id='playButton'>Play</button></Link>
            <Link to="/help"><button id='helpButton'>Help</button></Link>
        </div>
        <div id='highScores'>
            <h2>High Scores:</h2>
            <h3>Test high score 1</h3>
            <h3>Test high score 2</h3>
        </div>
    </div>
  )
}

export default Home