import { useState } from 'react'
import { PIECES, WINNERS } from '@/constants/ticTacToeConstants.js'
import { checkWinner, checkGameIsFinished } from '@/logic/ticTacToe'

import TicTacToeBoard from './TicTacToeBoard'
import TicTacToeGame from './TicTacToeGame'

export default function ClassicTicTacToe () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(PIECES.x)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (!winner && !board[index]) {
      const nextBoard = [...board]
      nextBoard[index] = turn
      setBoard(nextBoard)

      const nextTurn = turn === PIECES.x ? PIECES.o : PIECES.x
      setTurn(nextTurn)

      const nextWinner = checkWinner(nextBoard)
      if (nextWinner) {
        setWinner(nextWinner)
      } else if (checkGameIsFinished(nextBoard)) {
        setWinner(WINNERS.draw)
      }
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(PIECES.x)
    setWinner(null)
  }
  return (
    <TicTacToeGame turn={turn} winner={winner} reset={resetBoard}>
      <TicTacToeBoard board={board} updateBoard={updateBoard}></TicTacToeBoard>
    </TicTacToeGame>
  )
}
