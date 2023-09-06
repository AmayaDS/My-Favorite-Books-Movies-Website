const movieGrid = document.querySelector('.movie-grid');
const seriesGrid = document.querySelector('.series-grid');

const favoriteMovies = [
    {
        title: 'Dead Poets Society',
        genre: ' Drama/Teen ',
        poster: 'image21.jpg',
        description: 'John Keating, a progressive English teacher, tries to encourage his students to break free from the norm, go against the status quo and live life unapologetically.',
    },
    {
        title: 'Movie 2',
        genre: 'Comedy',
        poster: 'images/movie2.jpg',
        description: 'This is a description of Movie 2.',
    },
    // Add more movie objects as needed
];

const favoriteSeries = [
    {
        title: 'Game Of Thrones',
        genre: 'Drama',
        poster: 'image22.jpg',
        description: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.',
    },
    {
        title: 'The Big Bang Theory',
        genre: 'Sci-Fi/Drama/Romance',
        poster: 'image3.jpg',
        description: 'Mensa-fied best friends and roommates Leonard and Sheldon, physicists who work at the California Institute of Technology, may be able to tell everybody more than they want to know about quantum physics, but getting through most basic social situations, especially ones involving women, totally baffles them.',
    },
    // Add more TV series objects as needed
];

function createMovieItem(movie) {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    movieItem.innerHTML = `
        <h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
        <img src="${movie.poster}" alt="${movie.title}">
        <p>${movie.description}</p>
    `;
    movieGrid.appendChild(movieItem);
}

function createSeriesItem(series) {
    const seriesItem = document.createElement('div');
    seriesItem.classList.add('series-item');
    seriesItem.innerHTML = `
        <h3>${series.title}</h3>
        <p>Genre: ${series.genre}</p>
        <img src="${series.poster}" alt="${series.title}">
        <p>${series.description}</p>
    `;
    seriesGrid.appendChild(seriesItem);
}

// Populate the Movies section
favoriteMovies.forEach((movie) => {
    createMovieItem(movie);
});

// Populate the TV Series section
favoriteSeries.forEach((series) => {
    createSeriesItem(series);
});

