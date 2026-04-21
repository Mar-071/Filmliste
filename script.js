const movies = ['Dune', 'Parasite', 'Spider-Verse', 'Kon-Tiki', 'Barbie'];

// Når skjemaet sendes inn
document.getElementById('new-movie').addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('new-title');
    movies.push(input.value);
    input.value = '';

    showMovies();
});

// Viser filmene
function showMovies() {
    const list = document.getElementById('movie-list');
    list.innerHTML = '';

    for (let i = 0; i < movies.length; i++) {
        list.innerHTML += `
            <div class="movie-card">
                <span>${movies[i]}</span>
            </div>
        `;
    }
}

// Kjør når siden lastes
showMovies();