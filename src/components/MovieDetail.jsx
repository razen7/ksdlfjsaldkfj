import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail({ movies }) {
    let params = useParams();
    let movieId = movies[params.idx].id;
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a7eb658043f3997babdf4aee551d2350`)
            .then(response => response.json())
            .then(data => {
                setmovie([data]);
            })
    }, [])


    return (
        <div className="details-container">
            {movie.map((movie, mI) =>
                <div className="details" key={mI}>
                    <img src={`https://image.tmdb.org/t/p/w185${movie.belongs_to_collection.poster_path}`} alt="" />
                    <div className="left">
                        <h1>
                            {movie.original_title}
                        </h1>
                        <i>{movie.title}</i>
                        <p>
                            {movie.overview}
                        </p>
                        <div className="chips">
                            {movie.genres.map(genre =>
                                <div class="chip">
                                    {genre.name}
                                </div>
                            )}
                        </div>
                        <a href="" target="_blank" >
                            <button>
                                Watch Trailer
                                <img src="img/play.svg" alt="" />
                            </button>
                        </a>


                    </div>
                </div>
            )}
        </div>
    )
}
