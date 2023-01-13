import { useState, useEffect } from "react";
import { BASE_URL, ALLGAMES_PATH } from "../../constants/api";

const url = BASE_URL + ALLGAMES_PATH;

export default function useFetch() {

    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (res.ok) {
                    const json = await res.json();
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


    return [
        games,
        loading,
        error 
    ];
}