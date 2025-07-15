
import { useContext } from "react";
import { ThemeContext } from "../../store/ThemeContext/ThemeContext";
import styles from "./Button.module.css"

interface IButtonProps {
  count: number
  onClick: () => void
}

function Button({ count, onClick }: IButtonProps) {
  const theme = useContext(ThemeContext);

  return <button className={`${styles.button} ${styles[theme]}`} onClick={onClick}>Click me {count}</button>
}

export { Button }