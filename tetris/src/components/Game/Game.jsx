import React from 'react'
import './Game.css'
import Board from '../Board/Board';

const Game = () => {

    

    return (
        <div className='container'>
            <div id='gameBoard'>
                <Board />
            </div>
            <div className='scoreArea'>
                <h3>Score: </h3>
                <button id='quitButton'>Quit</button>
            </div>

        </div>
    )
}

export default Game