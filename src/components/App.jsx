import MovieList from './MovieList';
import {
    Routes,
    Route,
} from "react-router-dom";
import MovieDetail from './MovieDetail';
export default function App({ movies }) {
    return (
        <Routes>
            <Route index element={<MovieList movies={movies} />} />
            <Route path=':idx' element={<MovieDetail movies={movies} />} />
        </Routes>
    )
}
