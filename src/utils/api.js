import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdhN2E5MTEyYWQ4MmExNjJkZTMwMTU0NmRlNGI2MCIsInN1YiI6IjY2NTgzYTNmMGUzNTg5YWQ1YzUwNThkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Po2aki6vzboyrCqWiHaF5crzA3gTv1rSgAqgwYoKxZY",
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
