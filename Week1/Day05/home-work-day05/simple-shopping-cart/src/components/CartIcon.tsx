import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../context/CartContext";
import CartDropdown from "./CartDropdown";
import styles from "./CartIcon.module.css";

const CartIcon: React.FC = () => {
    const { getTotalItems } = useCart();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className={styles.cartIconWrapper} ref={ref}>
            <div className={styles.cartIcon} onClick={() => setOpen((v) => !v)}>
                🛒
                <span className={styles.cartText}>Giỏ hàng của bạn</span>
                <span className={styles.cartCount}>{getTotalItems()}</span>
            </div>
            {open && <CartDropdown />}
        </div>
    );
};

export default CartIcon;