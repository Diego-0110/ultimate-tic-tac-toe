import { WINNING_CASES } from '@/constants/ticTacToeConstants'

export function checkWinner (board) {
  for (const winningCase of WINNING_CASES) {
    const [a, b, c] = winningCase
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a]
    }
  }
  return null
}

export function checkGameIsFinished (board) {
  return board.every(cell => cell !== null)
}
