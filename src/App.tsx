import { Link } from "react-router-dom"
import Board from "./components/Board/Board"

function App() {
  return (
    <div>
      <Board />

      <Link to="/about">About</Link>
    </div>
  )
}

export { App }