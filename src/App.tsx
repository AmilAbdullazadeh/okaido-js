import { useState } from "react"
import { Button } from "./components/Button/Button"

function App() {
  const [count, setCount] = useState(5)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />

      <Button count={count} onClick={handleClick} />

    </div>
  )
}

export { App }