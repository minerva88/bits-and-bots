import useCart from "../../hooks/useCart";
import { Card } from "react-bootstrap";


export default function Cart() {

    
    const [cartItems, toggleItemInCart] = useCart();

    if (cartItems.length === 0) {
        return <h3>You have not added any games to your cart!</h3>;
    }
    
    console.log(cartItems);
    return (
        <>
        <div className="container">
        <div className="col-md">
            <h1>Your Cart</h1>
            {cartItems.map(function (game) {

                return (

                    <Card key={game.id} className="cart-card">
                        <Card.Title className="cart-card__title">{game.title}</Card.Title>
                    </Card>
                )
            })}
        </div>
        </div>
        </>
    )
    
}