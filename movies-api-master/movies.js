
sabio.services.movies = {};
sabio.services.movies.results = null

//sabio.services.movies.url = "http://www.omdbapi.com/?";
sabio.services.movies.url = "https://api.themoviedb.org/3/search/movie/"
//sabio.services.movies.key = "&apikey=9767d011";
sabio.services.movies.key = "?api_key=c0e86896e7759430c42631468bbf46d3"

sabio.services.movies.getMovie = (onSuccess, onError) => {
    //sabio.services.movies.parameters = `s=${$('#searchTerms').val()}`;
    sabio.services.movies.parameters = `&query=${$('#searchTerms').val()}`;
    console.log(sabio.services.movies.parameters)
    const settings = {

        cache: false
        ,dataType:"JSONP"
        ,success: onSuccess
        ,error: onError
        ,type: "GET"
    };
    $.ajax(`${sabio.services.movies.url}${sabio.services.movies.key}${sabio.services.movies.parameters}`, settings);
};

sabio.services.movies.getMovieSuccess = (data, message, xhr) => {
    console.log('Get Request Successful');;
    sabio.services.movies.results = data.results
    console.log(sabio.services.movies.results)
    sabio.page.searchData(data.results)
   //$('#movieList').append(`<img class="movie-poster" src="https://image.tmdb.org/t/p/w500/kBf3g9crrADGMc2AMAMlLBgSm2h.jpg""/>`)
};

//Standard error function
sabio.services.movies.onError = (xhr, error, status) => {
    console.log("Post request was unsuccessful");
    console.log(data.responseText);
};

sabio.page.searchMovies = () => {
    sabio.services.movies.getMovie(sabio.services.movies.getMovieSuccess, sabio.services.movies.onSuccess)
};
sabio.page.searchData = array => {
    let movies = array;
    for (let movie of movies){
        console.log(movie);
    $('#movieList').append(`
    <div class="poster" data-movie-id="${movie.id}"><img class="movie-poster" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}"/></div>`
    );
}
};

sabio.page.findDataById = (arr, location =>_); {
    const movieId = $(location).parent().data("movie-id")
    const result = arr.find( movie => movie.id === movieId );
    console.log(result);
}

sabio.page.moviePoster = () => {
    console.log('test');
    $('.movie-poster').hover(sabio.page.handlerIn, sabio.page.handlerOut)
};

sabio.page.handlerIn = (event) => {
    const location = event.currentTarget;
    console.log('mouseenter');
    sabio.page.findDataById(sabio.services.movies.results, location)

  // $('#myModal').modal('show')
}

sabio.page.handlerOut = () => {
    console.log('mouseout')
    $('#myModal').modal('hide')
}


