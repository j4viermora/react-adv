import {
    ProductButtons,
    ProductCard,
    ProductImage,
    ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
    id: "1",
    title: "Coffe Mug",
    img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
    return (
        <div>
            <h2>Shopping store</h2>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}
            >
                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-image" />
                    <ProductTitle title="Hola mundo" className="text-white" />
                    <ProductButtons className="custom-buttons text-white" />
                </ProductCard>
                <ProductCard
                    product={product}
                    style={{ backgroundColor: "#70D1f8" }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title title="Hola mundo" />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    );
};
