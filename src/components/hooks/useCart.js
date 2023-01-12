import { useState, useEffect } from "react";

export default function useCart() {
    const [cartItems, setCartItems] = useState(() => {
        const cart = localStorage.getItem("cartItems");
        if (cart) return JSON.parse(cart);
        else return [];
    });

    const toggleItemInCart = (id) => () => {
        const doesItemExist = cartItems.includes(id);
        if (doesItemExist) setCartItems((prev) => prev.filter((b) => b !== id));
        else setCartItems((prev) => [...prev, id]);
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return [cartItems, toggleItemInCart];
}