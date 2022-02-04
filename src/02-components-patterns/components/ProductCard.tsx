import { useProduct } from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import { createContext } from "react";
import { ProductContextProps, ProductProps } from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
    product: { id, title, img },
    children,
}: ProductProps) => {
    const { counter, increaseBy } = useProduct();

    return (
        <Provider
            value={{
                counter,
                increaseBy,
                product: { id, title, img },
            }}
        >
            <div className={styles.productCard}>
                {children}
                {/* <ProductImage img={img} />
            <ProductTitle title={title} />
            <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
            </div>
        </Provider>
    );
};
