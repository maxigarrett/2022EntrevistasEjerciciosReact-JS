import { useState } from "react";
import "./App.css";
import { Square } from "./components/Square";
const TURNS = {
  X: "x",
  O: "o",
};
function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (idx) => {
    //obtenemos el nuevo turn cada un clic si es 'X o O'
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //hacemos una copia del estado y la acualizamos con lo que haga clic y traiga X o O
    const newBoard = [...board];

    //si no existe agregamos. si ay existe solo que actualice con lo que ya habia
    if (!newBoard[idx]) newBoard[idx] = turn;
    else setBoard(newBoard);

    setBoard(newBoard);

    // forma mas simple de hacerlo
    // turn === TURNS.X ? setTurn(TURNS.O) : setTurn(TURNS.X);
  };

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {board.map((_, idx) => {
          return (
            <Square key={idx} idx={idx} updateBoard={updateBoard}>
              {board[idx]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
