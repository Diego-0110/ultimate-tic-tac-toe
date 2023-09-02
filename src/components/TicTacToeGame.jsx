import Button from './Button'
import Modal from './Modal'

import WinnerMessage from './WinnerMessage'
import TurnMessage from './TurnMessage'

import styles from '@/styles/TicTacToeGame.module.css'

export default function TicTacToeGame ({ children, turn, winner, reset }) {
  return (
    <section className={styles.game}>
      <header className={styles.gamePanel}>
        {winner
          ? <WinnerMessage winner={winner} />
          : <TurnMessage turn={turn} />}
        <Button onClick={reset}>New Game</Button>
      </header>
      {children}
      {winner !== null &&
        <Modal aditionalButton={<Button onClick={reset}>New Game</Button>}>
          <WinnerMessage winner={winner} />
        </Modal>}
    </section>
  )
}
