import styles from '@/styles/TicTacToeBoard.module.css'
import TicTacToeCell from './TicTacToeCell'

export default function TicTacToeBoard ({ board, updateBoard }) {
  return (
    <section className={styles.board}>
      {board.map((cellValue, index) => {
        return (
          <TicTacToeCell key={index} value={cellValue} index={index}
            updateBoard={updateBoard}>
          </TicTacToeCell>
        )
      })}
    </section>
  )
}
