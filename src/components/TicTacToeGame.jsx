import { useState } from 'react'

import Button from './Button'
import TicTacToeBoard from './TicTacToeBoard'
import Modal from './Modal'
import { PIECES, WINNERS } from '@/constants/ticTacToeConstants.js'
import { checkWinner, checkGameIsFinished } from '@/logic/ticTacToe'

import { Cross, Circle } from './icons'

import styles from '@/styles/TicTacToeGame.module.css'

export default function TicTacToeGame () {
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
  const winnerMsg = (
    winner !== WINNERS.draw
      ? <h2 className={styles.gameMsg}>
          {winner === PIECES.x
            ? <Cross width='1.5em' color='#e02b2b'/>
            : <Circle width='1.5em' color='#216fed'/>}
          &nbsp;WINS!
        </h2>
      : <h2>DRAW!</h2>
  )

  const turnMsg = (
    <h2 className={styles.gameMsg}>
      {turn === PIECES.x
        ? <Cross width='1.5em' color='#e02b2b'/>
        : <Circle width='1.5em' color='#216fed'/>}
      &apos;s TURN
    </h2>
  )

  return (
    <section className={styles.game}>
      <header className={styles.gamePanel}>
        {winner
          ? winnerMsg
          : turnMsg}
        <Button onClick={resetBoard}>New Game</Button>
      </header>
      <TicTacToeBoard board={board} updateBoard={updateBoard}></TicTacToeBoard>
      {winner !== null &&
        <Modal aditionalButton={<Button onClick={resetBoard}>New Game</Button>}>
          {winnerMsg}
        </Modal>}
    </section>
  )
}
