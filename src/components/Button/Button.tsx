
import styles from "./Button.module.css"

interface IButtonProps {
  count: number
  onClick: () => void
}

function Button({ count, onClick }: IButtonProps) {

  return <button className={styles.button} onClick={onClick}>Click me {count}</button>
}

export { Button }