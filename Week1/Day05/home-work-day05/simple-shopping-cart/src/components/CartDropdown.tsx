import React from "react";
import { useCart } from "../context/CartContext";
import styles from "./CartDropdown.module.css";

const formatPrice = (price: number) =>
    price.toLocaleString("vi-VN") + " ₫";

const CartDropdown: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

    return (
        <div className={styles.cartDropdown}>
            <div className={styles.cartDropdownHeader}>Giỏ hàng của bạn</div>
            <div className={styles.cartDropdownList}>
                {cart.length === 0 && (
                    <div style={{ padding: "20px", color: "#888" }}>Chưa có sản phẩm nào.</div>
                )}
                {cart.map((item) => (
                    <div className={styles.cartDropdownItem} key={item.id}>
                        {/* Không có ảnh */}
                        <div className={styles.cartDropdownItemInfo}>
                            <div className={styles.cartDropdownItemName}>{item.name}</div>
                            <div className={styles.cartDropdownItemPrice}>
                                {item.quantity} x {formatPrice(item.price)}
                            </div>
                        </div>
                        <button
                            className={styles.cartDropdownItemRemove}
                            onClick={() => removeFromCart(item.id)}
                            title="Xóa sản phẩm"
                        >
                            ❌
                        </button>
                    </div>
                ))}
            </div>
            <div className={styles.cartDropdownFooter}>
                <div className={styles.cartDropdownTotal}>
                    <span>Tổng cộng</span>
                    <span style={{ color: "#ff5722" }}>{formatPrice(getTotalPrice())}</span>
                </div>
                <button className={styles.cartDropdownButton}>Xem giỏ hàng</button>
            </div>
        </div>
    );
};

export default CartDropdown;