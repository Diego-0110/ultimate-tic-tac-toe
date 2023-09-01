import TicTacToeBoard from './TicTacToeBoard'
import TicTacToeCell from './TicTacToeCell'
import styles from '@/styles/UltimateTicTacToeBoard.module.css'

export default function UltimateTicTacToeBoard ({
  ultimateBoard, turnBoard, winners, updateBoard
}) {
  return (
    <section className={styles.ultimateBoard}>
      {ultimateBoard.map((board, index) => {
        return (
          <div key={index}>
            <TicTacToeBoard board={board}
              updateBoard={(cellIndex) => {
                updateBoard(index, cellIndex)
              }} />
            {(winners[index] || (turnBoard !== null && turnBoard !== index)) &&
              <div className={styles.cellHighlight}>
                <TicTacToeCell value={winners[index]} />
              </div>}
          </div>
        )
      })}
    </section>
  )
}
