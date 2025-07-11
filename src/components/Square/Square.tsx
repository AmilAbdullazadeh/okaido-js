import { memo } from "react";
import styles from "./Square.module.css";

interface ISquareProps {
    value: string;
    onClick: () => void;
}

const Square = memo(({ value, onClick }: ISquareProps) => {
    return <button className={styles.square} onClick={onClick}>{value}</button>
}); // React.memo is a higher order component that memoizes the component

export default Square;