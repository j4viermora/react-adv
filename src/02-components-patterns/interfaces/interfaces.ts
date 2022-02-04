import { ReactElement, CSSProperties } from "react";
import { iProps as iProductButtonsProps } from "../components/ProductButtons";
import { iProps as iProductImageProps } from "../components/ProductImage";
import { iProps as iProductTitleProps } from "../components/ProductTitle";

export interface iProductProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface iProductCardHOCProps {
    ({ product: { id, title, img }, children }: iProductProps): JSX.Element;
    Title: (Props: iProductTitleProps) => JSX.Element;
    Image: (Props: iProductImageProps) => JSX.Element;
    Buttons: (Props: iProductButtonsProps) => JSX.Element;
}
