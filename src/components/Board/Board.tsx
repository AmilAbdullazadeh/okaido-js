import styles from "./Board.module.css";
import Square from "../Square/Square";
import { useState } from "react";

function Board() {
    const [squares, setSquares] = useState<string[]>(Array(9).fill(null));

    // ******************
    
    // object destructuring
    const obj = { a: 1, b: 2, c: 3 };

    const { a, ...rest } = obj; // rest operator

    console.log(a, rest); // 1 { b: 2, c: 3 }

    // array destructuring
    const [c, d] = [3, 4];
    console.log(c, d); // 3 4

    // ******************

    // eger x click ederse onda, dolu olmayan yere o yazılır.

    function handleClick(index: number) {
        const randomIndex = Math.floor(Math.random() * 9); // 0la 9 arasinda amma squares-de dolu olmayan index olmalidir.
        if (squares[randomIndex] || calculateWinner(squares)) return; // if the square is already filled or there is a winner, return

        const newSquares = [...squares];
        newSquares[index] = "X";
        newSquares[randomIndex] = "O";

        setSquares(newSquares);
    }

    function calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2], // 0
            [3, 4, 5], // 1
            [6, 7, 8], // 2
            [0, 3, 6], // 3
            [1, 4, 7], // 4
            [2, 5, 8], // 5
            [0, 4, 8], // 6
            [2, 4, 6]  // 7
          ];

          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]; // array destructuring = [0, 1, 2] => lines[i][0] = 0, lines[i][1] = 1, lines[i][2] = 2
            
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a]; // X or O
            }
          }
          return null; // no winner
    }

    const winner = calculateWinner(squares);
    let status: string | null = null;
    if (winner) {
        status = "Winner: " + winner;
    }

    function handleReset() {
        setSquares(Array(9).fill(null));
    }

    return (
        <div className={styles.board}>
            <div className={styles.status}>{status}</div>
            <div className={styles.boardRow}>
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className={styles.boardRow}>
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className={styles.boardRow}>
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
            <button className={styles.resetButton} onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Board;