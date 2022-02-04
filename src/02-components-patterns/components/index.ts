import { ProductTitle } from "./ProductTitle";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { iProductCardHOCProps } from "../interfaces/interfaces";

export { ProductTitle } from "./ProductTitle";
export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";

export const ProductCard: iProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Buttons: ProductButtons,
    Image: ProductImage,
});

export default ProductCard;
