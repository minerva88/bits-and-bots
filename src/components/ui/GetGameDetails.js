import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, ALLGAMES_PATH } from "../../constants/api";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import parse from "html-react-parser";
import { Button } from "react-bootstrap";
import useCart from "../hooks/useCart";

export default function GetGameDetails() {

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, toggleItemInCart] = useCart();

    let navigate = useNavigate();

    const { id } = useParams();

    if (!id) {
        navigate('/');
    }

    const url = BASE_URL + ALLGAMES_PATH + id;

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (res.ok) {
                    const json = await res.json();
                    setGame(json);
                } else {
                    setError('An error occured');
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },
    [url]
    );

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>An error occured</div>;
    }

    const isItemInCart = cartItems.includes(game.id);

    return (
        <div className="game-details">
            <Row>
                <Col className="6">
                <h1 className="game-details__title">{game.title.rendered}</h1>
                <Button variant="danger" data-title={game.title.rendered} data-image={game.better_featured_image.media_details.sizes.medium.source_url} onClick={toggleItemInCart(game.id)}>
                {isItemInCart ? "Remove" : "Add to cart"}
                </Button>
                </Col>
                <Col className="6">
                <img className="game-details__coverimage" src={game.better_featured_image.media_details.sizes.medium.source_url} alt={game.better_featured_image.alt_text} width="150px" />
                </Col>
            </Row>
            <Col className="my-3">
                <div className="game-details__content">{parse(game.content.rendered)}</div>
            </Col>

        </div>
    );
}