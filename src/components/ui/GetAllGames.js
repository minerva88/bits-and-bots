import  useFetch from '../hooks/useFetch';
import useCart from '../hooks/useCart';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



export default function GetAllGames() {

    const [games, loading, error] = useFetch();
    const [cartItems, toggleItemInCart] = useCart();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured: {error}</div>;
    }

    return (
        <>
        <div className='container'>
        <div className='row'>
            {games.map(function (game) {

                const isItemInCart = cartItems.includes(game.id);
                return (
                    
                        <Card key={game.id} className="browse-card">
                            <Card.Img className="browse-card__image" src={game.better_featured_image.media_details.sizes.medium.source_url} alt={game.better_featured_image.alt_text} />
                            <Card.Body>
                                <Card.Title className='browse-card__title'>{game.title.rendered}</Card.Title>
                                <Link to={`details/${game.id}`}>
                                <Button variant="primary">View details</Button>
                                </Link>
                                <Button variant="danger" data-title={game.title.rendered} data-image={game.better_featured_image.media_details.sizes.medium.source_url} onClick={toggleItemInCart(game.id)}>
                                {isItemInCart ? "Remove" : "Add to cart"}</Button>
                                
                            </Card.Body>
                        </Card>
                    
                )

                
            })}
        </div>
        </div>
        </>
    )

}