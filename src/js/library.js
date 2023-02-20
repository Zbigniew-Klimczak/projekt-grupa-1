import { API_KEY } from './apiKey';
import { closeModal, modalMovie } from './modalMovie';
import { fetchJsonResponse } from './responseJsonFetch';
import { displayMovieCard } from './moviesListRender';
import { trackMousePosition, stopTrackingMousePosition } from './loader';

const moviesList = document.querySelector('.movies__list');
const watchedBtn = document.querySelector('.watched-button');
const queueBtn = document.querySelector('.queue-button');

const queueLength = JSON.parse(localStorage.getItem('movies-queue')).length;
const watchedLength = JSON.parse(localStorage.getItem('movies-watched')).length;

let fetchLibrary = () => {
  moviesList.innerHTML = '';
  queueBtn.classList.remove('queue-button--active');
  watchedBtn.classList.add('watched-button--active');
  if (watchedLength !== 0) {
    trackMousePosition();
    let parsedLibrary = JSON.parse(localStorage.getItem('movies-watched'));
    parsedLibrary.forEach(async id => {
      fetchJsonResponse(`https://api.themoviedb.org/3/movie/${id}`, {
        api_key: API_KEY,
      }).then(movie => {
        let genres = movie.genres;
        let movieGenres = [];
        for (let i = 0; i < genres.length; i++) {
          movieGenres.push(genres[i].name);
        }
        displayMovieCard(movie, movieGenres);
      });
    });
    stopTrackingMousePosition();
  }
};

let fetchQueue = () => {
  moviesList.innerHTML = '';
  watchedBtn.classList.remove('watched-button--active');
  queueBtn.classList.add('queue-button--active');
  if (queueLength !== 0) {
    trackMousePosition();
    let parsedLibrary = JSON.parse(localStorage.getItem('movies-queue'));
    parsedLibrary.forEach(async id => {
      fetchJsonResponse(`https://api.themoviedb.org/3/movie/${id}`, {
        api_key: API_KEY,
      }).then(movie => {
        let genres = movie.genres;
        let movieGenres = [];
        for (let i = 0; i < genres.length; i++) {
          movieGenres.push(genres[i].name);
        }
        displayMovieCard(movie, movieGenres);
      });
    });
    stopTrackingMousePosition();
  }
};

fetchLibrary();

queueBtn.addEventListener('click', fetchQueue);
watchedBtn.addEventListener('click', fetchLibrary);
moviesList.addEventListener('click', modalMovie);
closeModal();
