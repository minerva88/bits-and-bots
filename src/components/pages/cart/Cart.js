import useCart from "../../hooks/useCart";


export default function Cart() {

    const [cartItems, toggleItemInCart] = useCart();

    if (cartItems.length === 0) {
        return <h3>You have not added any games to your cart!</h3>;
    }
    
}