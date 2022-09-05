import Movie from "./Movie";

function MovieList({ movies }) {
    // console.log(movies[0]);
    return (
        <div className="main-container">
            {
                movies.map((movie, mI) => {
                    return <Movie key={mI} mIdx={mI} movie={movie} />
                })
            }
        </div>
    )
}

export default MovieList;