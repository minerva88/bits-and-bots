import { Card } from "react-bootstrap";
import useCart from "../hooks/useCart";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CartTotal() {

    const cartItems = useCart();

    return (
        <Card className="totalcard shadow">
            <Card.Body>
            <Card.Title className="totalcard__title">
                Total amount of items in cart: {cartItems.length + 1}
            </Card.Title>
            <Link to={"/cart"}>
            <Button variant="primary">Back to cart</Button>
            </Link>
            </Card.Body>
        </Card>
    )
}