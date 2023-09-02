import { WINNERS, PIECES } from '@/constants/ticTacToeConstants'
import { Cross, Circle } from './icons'

import styles from '@/styles/GameMessage.module.css'

export default function WinnerMessage ({ winner }) {
  if (!winner) {
    return null
  } else if (winner !== WINNERS.draw) {
    return (
      <h2 className={styles.gameMsg}>
        {winner === PIECES.x
          ? <Cross width='1.5em' color='#e02b2b'/>
          : <Circle width='1.5em' color='#216fed'/>}
        &nbsp;WINS!
      </h2>
    )
  }
  return (
    <h2 className={styles.gameMsg}>DRAW!</h2>
  )
}
