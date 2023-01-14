import useCart from "../../hooks/useCart";
import useFetch from "../../hooks/useFetch";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Cart() {

    const [games, loading, error] = useFetch();
    const [cartItems, toggleItemInCart] = useCart();

    if (cartItems.length === 0) {
        return <h3>You have not added any games to your cart!</h3>;
    }
    
    console.log(cartItems);

    const cartItemsData = games.filter((game) => game.id === cartItems.id);
    console.log(cartItemsData);
    return (
        <>
        <div className="container">
        <div className="col-sm">
            <h1>Your Cart</h1>
            {cartItems.map(function (game) {

                return (

                    <Card key={game.id} className="cart-card">
                        <Card.Title className="cart-card__title">{game.title}</Card.Title>
                    </Card>
                )
            })}
            <Link to={'/checkout'}>
            <Button variant="primary">Proceed to checkout</Button>
            </Link>
        </div>
        </div>
        </>
    )
    
}