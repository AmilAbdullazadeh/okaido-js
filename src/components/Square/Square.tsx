import styles from "./Square.module.css";

interface ISquareProps {
    value: string;
    onClick: () => void;
}

function Square({ value, onClick }: ISquareProps) {
    return <button className={styles.square} onClick={onClick}>{value}</button>
}

export default Square;