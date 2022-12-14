import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL, ALLGAMES_PATH } from "../../constants/api";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import parse from "html-react-parser";

export default function GetGameDetails() {

    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    return (
        <Container className="game-details">
            <Row>
                <h1 className="game-details__title">{game.title.rendered}</h1>
                <img className="game-details__coverimage" src={game.better_featured_image.media_details.sizes.medium.source_url} alt={game.better_featured_image.alt_text} width="150px" />
            </Row>
            <Col>
                <Container className="game-details__content">{parse(game.content.rendered)}</Container>
            </Col>

        </Container>
    );
}