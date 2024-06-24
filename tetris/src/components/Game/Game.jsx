import React from 'react'
import './Game.css'

const Game = () => {
    return (
        <div className='container'>
            <div id='gameBoard'>

            </div>
            <div className='scoreArea'>
                <h3>Score: </h3>
                <button id='quitButton'>Quit</button>
            </div>

        </div>
    )
}

export default Game