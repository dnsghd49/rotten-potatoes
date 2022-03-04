this folder is for backend stuff 

# Backend Steps:

## Setup BrowserRoutes
### HomePage
### Movies Comming Out This Week
### Top Box Office
### Coming Soon to Theaters

<!-- Titles by Keyword

path: /titles/search/keyword/{keyword}

path parameter (required) : keyword - DO NOT USE QUOTES
description: returns array of titles acording to filters / sorting query parameters provided and the keyword provided in path
query parameters: *multiple
model: title

Titles by Title

path: /titles/search/title/{title}

path parameter (required) : title -> a title or part of a title - DO NOT USE QUOTES
description: returns array of titles acording to filters / sorting query parameters provided and the title provided in path
query parameters: *multiple
model: title -->

{id: 'tt13075554', primaryImage: {…}, titleType: {…}, titleText: {…}, releaseDate: {…}}
id: "tt13075554"
primaryImage:
caption: {plainText: '007 - For Our Eyes Only (2020)', __typename: 'Markdown'}
height: 1000
id: "rm3997607425"
url: "https://m.media-amazon.com/images/M/MV5BYTM4N2Y2MDUtZTVhNC00NWQ1LWI1MDUtOGU2MGE5NTYwNDM4XkEyXkFqcGdeQXVyNzA2Nzk4ODc@._V1_.jpg"
width: 694
__typename: "Image"
[[Prototype]]: Object
releaseDate:
day: 20
month: 8
year: 2020
__typename: "ReleaseDate"
[[Prototype]]: Object
titleText:
text: "007 - For Our Eyes Only"
__typename: "TitleText"
[[Prototype]]: Object
titleType:
id: "movie"
isEpisode: false
isSeries: false
text: "Movie"
__typename: "TitleType"
[[Prototype]]: Object
[[Prototype]]: Object