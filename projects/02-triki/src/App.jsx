import { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkEndGame, checkWinnerFrom } from './logic/validators'
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { resetGameStorage, saveGameToStorage } from './logic/storage'

export const App = () => {
  const [board, setBoard] = useState(() => {
    const fromLocalStorage = window.localStorage.getItem('board')
    return fromLocalStorage ? JSON.parse(fromLocalStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const fromLocalStorage = window.localStorage.getItem('turn')
    return fromLocalStorage ?? TURNS.X
  })

  // null: no hay ganador, false: empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardar partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Triki</h1>
      <button onClick={resetGame}>Reset del juego</button>

      <Board board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
