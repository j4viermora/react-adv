import { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface iProps {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: iProps) => {
    const { increaseBy, counter } = useContext(ProductContext);
    console.log(className);
    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={`${styles.buttonMinus}`}
                onClick={() => increaseBy(-1)}
            >
                -
            </button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    );
};
