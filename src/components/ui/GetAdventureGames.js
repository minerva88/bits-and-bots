import  useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import parse from "html-react-parser";



export default function GetAdventureGames() {

    const [games, loading, error] = useFetch();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (
        <>
        <div className='row'>
            {games.map(function (game) {
                return game.tags !== 58 ? ( 
                    <div key={game.id}></div> 
                ) : (
                    <Card key={game.id} className="browse-card">
                            <Card.Img className="browse-card__image" src={game.better_featured_image.media_details.sizes.medium.source_url} alt={game.better_featured_image.alt_text} />
                            <Card.Body>
                                <Card.Title className='browse-card__title'>{game.title.rendered}</Card.Title>
                                <Card.Text className='browse-card__excerpt'>{parse(game.excerpt.rendered)}</Card.Text>
                                <Link to={`details/${game.id}`}>
                                <Button type="primary">View details</Button>
                                </Link>
                            </Card.Body>
                    </Card>
                );
                
                

                
            })}
        </div>
        </>
    )

}