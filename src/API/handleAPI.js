import React, { useEffect, useState } from 'react'

useEffect(() => {
    const [ImdbData, setImdbData] = useState('')
    // grabbing name of movie
    // const [imdbName, setimdbName] = useState('')
    // // grabbing poster of movie title
    // const [imdbPosterURL, setimdbPosterURL] = useState('')
    // // grabbing rating of movie
    // const [imdbRating, setimdbRating] = useState('')
    // // grabbing movie details
    // const [imdbMovieDetails, setimdbMovieDetails] = useState('')


    fetch(`"https://data-imdb1.p.rapidapi.com/movie/byKeywords/${value}/?page_size=10"`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "data-imdb1.p.rapidapi.com",
            "x-rapidapi-key": "7de5936bdfmsh507735b91339219p188b21jsn5ee000d579f5"
        }
    })
        .then(response => response.json())
        .then(res => setImdbData(res))
        // data is the data of movies generated from api
        // data is the array of titles
        .catch(err => {
            console.error(err);
        });
}, [])

export default useEffect;