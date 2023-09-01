import TicTacToeGame from './components/TicTacToeGame'
import UltimateTicTacToeGame from './components/UltimateTicTacToeGame'
import styles from '@/styles/App.module.css'

function App () {
  return (
    <>
      <h1 className={styles.mainTitle}>Ultimate Tic-Tac-Toe</h1>
      <UltimateTicTacToeGame />
    </>
  )
}

export default App
