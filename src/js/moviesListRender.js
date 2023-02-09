import { genresIDs } from './genresCodesFetch';

const moviesList = document.querySelector('.movies__container');

export function moviesListRender(movie) {
  const movieGenres = [];

  movie.genre_ids.forEach(genre_id => {
    for (const genreID of genresIDs) {
      if (genre_id === genreID.id) {
        movieGenres.push(genreID.name);
      }
    }
  });

  moviesList.insertAdjacentHTML(
    'beforeend',
    `<div class="movie">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" 
        alt="${movie.title} poster." loading="lazy" />
        <h2 class="movie__title">${movie.title}</h2>
        <div class="movie__info">
            <p class="movie__detail">${movieGenres.join(', ')}</p>
            <p class="movie__detail">${movie.release_date.slice(0, 4)}</>
        </div>
    </div>`
  );
}