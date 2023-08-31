import { Circle, Cross } from './icons'
import { PIECES } from '@/constants/ticTacToeConstants.js'
import styles from '@/styles/TicTacToeCell.module.css'

function getContent (value) {
  switch (value) {
    case PIECES.x:
      return <Cross width='100%' color='#e02b2b'/>
    case PIECES.o:
      return <Circle width='100%' color='#216fed'/>
    default:
      return null
  }
}

export default function TicTacToeCell ({ value, index, updateBoard }) {
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={styles.cell} onClick={handleClick}>
      {getContent(value)}
    </div>
  )
}
