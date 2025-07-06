import React, { useState } from "react";
import type { Product } from "../types/Product";
import { useCart } from "../context/CartContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
    product: Product & { image?: string };
}

const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN") + " ₫";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const handleMinus = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handlePlus = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className={styles.card}>
            {product.image && (
                <img src={product.image} alt={product.name} className={styles.image} />
            )}
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>{formatPrice(product.price)}</div>
            <div className={styles.controls}>
                <button className={styles.btn} onClick={handleMinus}>-</button>
                <span className={styles.qty}>{quantity}</span>
                <button className={styles.btn} onClick={handlePlus}>+</button>
            </div>
            <button className={styles.addBtn} onClick={handleAddToCart}>
                <span style={{ fontWeight: "bold", fontSize: 18, marginRight: 6, color: "#009688" }}>+</span>
                Thêm vào giỏ hàng
            </button>
        </div>
    );
};

export default ProductCard;