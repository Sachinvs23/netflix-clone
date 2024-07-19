const API_KEY = "7c01a7b6aa53ae0b74fb40b36a310aa2";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzAxYTdiNmFhNTNhZTBiNzRmYjQwYjM2YTMxMGFhMiIsIm5iZiI6MTcyMTA2ODA4OC43NTYwMzcsInN1YiI6IjY2OTU2ODU5MGQzOTIzZTFkY2Y1M2Q4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eBhLm4D13c1CinDPjcFwe5F9nc2V606BZkn1IWhOysc";
export default {
  fetchTrending: {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/all/week",
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchTopRated: {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/top_rated",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchActionMovies: {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: "28",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchComedyMovies: {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: "35",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchHorrorMovies: {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: "27",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchRomanceMovies: {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: "10749",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchNetflixOriginals: {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/tv",
    params: {
      include_adult: "false",
      include_null_first_air_dates: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_networks: "213",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
  fetchDocumentaries: {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie",
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: "1",
      sort_by: "popularity.desc",
      with_genres: "99",
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  },
};
