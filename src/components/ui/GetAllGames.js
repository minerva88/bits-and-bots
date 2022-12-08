import { useState, useEffect } from 'react';
import axios from "axios";
import { BASE_URL, ALLGAMES_PATH } from "../../constants/api";

import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap';

const url = BASE_URL + ALLGAMES_PATH;

export default function GetAllGames() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get(url);

                if (res.ok) {
                    const json = await res.json();
                    console.log(json);
                    setGames(json);
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
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (
        <>
            {games.map(function (game) {
                
                return (
                    <>
                        <Card key={game.id} className="browse-card">
                            <Card.Img src={game.better_featured_image.media_details.sizes.medium.source_url} alt={game.better_featured_image.alt_text} />
                            <Card.Body>
                                
                            </Card.Body>
                        </Card>
                    </>
                )

                
            })}
        </>
    )

}