import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import {
  BrowserRouter
} from "react-router-dom";
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

fetch('https://api.themoviedb.org/3/discover/movie?api_key=a7eb658043f3997babdf4aee551d2350&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
  .then((response) => response.json())
  .then((data) => data.results)
  .then((movies) => {
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App movies={movies} />
        </BrowserRouter>
      </React.StrictMode>
    );
  })




