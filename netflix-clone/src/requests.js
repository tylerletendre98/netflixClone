import APIKEY from "./key"

const requests = {
    fetchTrendingNow: `https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`,
    fetchDiscover:`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
}

export default requests;