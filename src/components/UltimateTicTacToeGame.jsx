import { useState } from 'react'
import { PIECES, WINNERS } from '@/constants/ticTacToeConstants.js'
import { checkWinner, checkGameIsFinished } from '@/logic/ticTacToe'
import UltimateTicTacToeBoard from './UltimateTicTacToeBoard'
import TicTacToeGame from './TicTacToeGame'

export default function UltimateTicTacToeGame () {
  const [ultimateBoard, setUltimateBoard] = useState(Array(9).fill(Array(9).fill(null)))
  const [turn, setTurn] = useState(PIECES.x)
  const [turnBoard, setTurnBoard] = useState(null)
  const [winners, setWinners] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)

  const resetBoard = () => {
    setUltimateBoard(Array(9).fill(Array(9).fill(null)))
    setTurn(PIECES.x)
    setTurnBoard(null)
    setWinners(Array(9).fill(null))
    setWinner(null)
  }

  const updateBoard = (boardIndex, cellIndex) => {
    const board = ultimateBoard[boardIndex]
    if (!winner && !winners[boardIndex] &&
        (turnBoard === null || turnBoard === boardIndex) && !board[cellIndex]) {
      const nextBoard = [...board]
      nextBoard[cellIndex] = turn
      const nextUltimateBoard = structuredClone(ultimateBoard)
      nextUltimateBoard[boardIndex] = nextBoard
      setUltimateBoard(nextUltimateBoard)

      const nextTurn = turn === PIECES.x ? PIECES.o : PIECES.x
      setTurn(nextTurn)

      const nextBoardWinner = checkWinner(nextBoard)
      const nextWinners = [...winners]
      if (nextBoardWinner) {
        nextWinners[boardIndex] = nextBoardWinner
        setWinners(nextWinners)
      } else if (checkGameIsFinished(nextBoard)) {
        nextWinners[boardIndex] = WINNERS.draw
        setWinners(nextWinners)
      }
      const nextWinner = checkWinner(nextWinners)
      if (nextWinner) {
        setWinner(nextWinner)
      } else if (checkGameIsFinished(nextWinners)) {
        setWinner(WINNERS.draw)
      }
      setTurnBoard(!nextWinners[cellIndex] ? cellIndex : null)
    }
  }

  return (
    <TicTacToeGame turn={turn} winner={winner} reset={resetBoard}>
      <UltimateTicTacToeBoard ultimateBoard={ultimateBoard}
        turnBoard={turnBoard} winners={winners} updateBoard={updateBoard} />
    </TicTacToeGame>
  )
}
