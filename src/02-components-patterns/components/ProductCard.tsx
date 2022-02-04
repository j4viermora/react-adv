import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, iProductProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
    product: { id, title, img },
    children,
    className,
    style,
}: iProductProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product: { id, title, img },
            }}
        >
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    );
};
