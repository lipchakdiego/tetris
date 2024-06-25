import { useEffect, useRef } from 'react'

const Board = (props) => {

    // console.log(`width: ${props.width} height: ${props.height}`)

    const canvasRef = useRef(null)

    useEffect(() => {
        //Defines canvas and context
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d');

        //Define variables for the board and the squares
        const boardColumnCount = 12
        const boardRowCount = 22
        const squareWidth = 20
        const squareHeight = 20
        const squarePadding = 1

        //Defines array to hold grid
        let board = []
        for(let c = 0; c < boardColumnCount; c++){
            board[c] = []
            for(let r = 0; r < boardRowCount; r++){
                board[c][r] = {x: 0, y: 0}
            }
        }

        const drawBorder = () => {
            for(let c = 0; c < boardColumnCount; c++){
                for(let r = 0; r < boardRowCount; r++){
                    if(c == 0 || c == boardColumnCount - 1 || r == 0 || r == boardRowCount - 1){
                        const squareX = c * (squareWidth + squarePadding)
                        const squareY = r * (squareHeight + squarePadding)
                        board[c][r].x = squareX
                        board[c][r].y = squareY
                        ctx.beginPath()
                        ctx.rect(squareX, squareY, squareWidth, squareHeight)
                        ctx.fillStyle = 'grey'
                        ctx.fill()
                        ctx.closePath()
                    }
                }
            }
        }

        // ctx.beginPath()
        // ctx.rect(0, 0, 250, 400)
        // ctx.fillStyle = 'grey'
        // ctx.fill()
        // ctx.closePath()

        //
        drawBorder()
    },[])
    return (
        <canvas ref={canvasRef} width='300%' height='500%'></canvas>
    )
}

export default Board