import CheckoutForm from "../../forms/CheckoutForm"
import CartTotal from "../../ui/CartTotal";

export default function Checkout() {
    
    return (
        <>
        <div className="container">
        <h1>Checkout</h1>
        <CartTotal />
        <CheckoutForm />
        </div>
        </>
    )
}