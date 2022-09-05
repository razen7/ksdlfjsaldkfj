function Movie({ movie, mIdx }) {
    let path = "https://image.tmdb.org/t/p/w185/" + movie.poster_path;
    return (
        <a href={mIdx}>
            <div className="movie-card">
                <img className="movie-thumbnail" src={path} alt='' />
                <div className="info">
                    <span className="title">
                        {movie.original_title}
                    </span>
                    <p className="movie-desc">
                        {movie.overview}
                    </p>
                    <p className="movie-rating">☆{movie.vote_average}</p>
                </div>
            </div>
        </a>

    )
}

export default Movie;