const movies = ['Dune', 'Parasite', 'Spider-Verse', 'Kon-Tiki', 'Barbie'];

// Når skjemaet sendes inn
document.getElementById('new-movie').addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('new-title');
    movies.push(input.value);
    input.value = '';

    showMovies();
});


document.getElementById('pick-random').addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * movies.length);
    document.getElementById('chosen-movie').textContent = movies[randomIndex];
});


function removeMovie(i) {
    movies.splice(i, 1);
    showMovies();
    
}
// Viser filmene
function showMovies() {
    const list = document.getElementById('movie-list');
    list.innerHTML = '';

    for (let i = 0; i < movies.length; i++) {
        list.innerHTML += `
            <div class="movie-card">
                <span>${movies[i]}</span>
                <button class="remove-btn" onclick="removeMovie(${i})">✕</button>
                
            </div>
        `;
    }
}

// Kjør når siden lastes
showMovies();