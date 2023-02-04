const elementInputMovieURl = document.getElementById('movieUrl')
const elementDivMovies = document.getElementById('movies')
let movies = []

function addMovie() {
    let movie = elementInputMovieURl.value

    for(i = -1; i < movies.length; i++) {
        if(movie == movies[i] || movie == '') {
            return
        }
    }

    movies.push(movie)
    renderMovie(movie)
    elementInputMovieURl.value = ""
}

function renderMovie(movie) {
    const newElementDivMovie = document.createElement("div")
    const newElementImgMovie = document.createElement("img")
    const newElementButtonRemoveImg = document.createElement("button")
    const contentButtonRemoveImg = document.createTextNode("REMOVER")

    newElementDivMovie.classList.add('movie')
    newElementImgMovie.src = movie
    newElementButtonRemoveImg.addEventListener('onClick', removeMovie)

    elementDivMovies.appendChild(newElementDivMovie)
    newElementDivMovie.appendChild(newElementImgMovie)
    newElementDivMovie.appendChild(newElementButtonRemoveImg)
    newElementButtonRemoveImg.appendChild(contentButtonRemoveImg)
}

function removeMovie() {
    
}