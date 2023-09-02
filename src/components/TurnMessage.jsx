import { PIECES } from '@/constants/ticTacToeConstants'
import { Cross, Circle } from './icons'

import styles from '@/styles/GameMessage.module.css'

export default function TurnMessage ({ turn }) {
  return (
    <h2 className={styles.gameMsg}>
      {turn === PIECES.x
        ? <Cross width='1.5em' color='#e02b2b'/>
        : <Circle width='1.5em' color='#216fed'/>}
      &apos;s TURN
    </h2>
  )
}
