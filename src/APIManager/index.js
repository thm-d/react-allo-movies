export class APIManager {
  static getApiUrl() {
    return 'https://movies-69792-default-rtdb.europe-west1.firebasedatabase.app/';
  }

  static fetchDataApi = async () => {
    try {
      const response1 = await fetch(APIManager.getApiUrl() + 'favoris.json');
      const response2 = await fetch("https://api.themoviedb.org/3/discover/movie", {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjllZDhjODI5NjYwNjQzODdjMjYxMTZiYmUwZmVlYSIsInN1YiI6IjYzYmZiOTQwZTE2ZTVhMDBkNDAyYzc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nyALC-VrNd35la4P2p9J1IINeQ78LeWB0upe7SisSSM'
        }
      });
      await Promise.all([response1, response2]);
      const fetchedFavoritesResults = await response1.json();
      let favoris = [];
      for (const key in fetchedFavoritesResults) {
        favoris.push({
          ...fetchedFavoritesResults[key],
          id: key
        });
      }
      const moviesAPI = await response2.json();
      const movies = moviesAPI.results.map(m => ({
        img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
        title: m.title,
        details: m.release_date + ' | ' + m.vote_average + ' /10 (' + m.vote_count + ')',
        description: m.overview
      }));
      return { movies, favoris };
    } catch (e) {
    }
  };

  static fetchSearchDataApi = async (filter) => {
    const query = "?169ed8c82966064387c26116bbe0feea&" + Object.keys(filter).map(k => `${k}=${filter[k]}&`).join('');
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie${query}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjllZDhjODI5NjYwNjQzODdjMjYxMTZiYmUwZmVlYSIsInN1YiI6IjYzYmZiOTQwZTE2ZTVhMDBkNDAyYzc2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nyALC-VrNd35la4P2p9J1IINeQ78LeWB0upe7SisSSM'
        }
      });
      if (response.ok) {
        const moviesAPI = await response.json();
        const movies = moviesAPI.results.map(m => ({
          img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
          title: m.title,
          details: m.release_date + ' | ' + m.vote_average + ' /10 (' + m.vote_count + ')',
          description: m.overview
        }));
        return movies;
      }
    } catch (e) {
      console.log(e);
    }
  };

  static saveFavori = async (movie) => {
    try {
      const response = await fetch(`${APIManager.getApiUrl()}favoris.json`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: movie.title,
          img: movie.img,
          details: movie.details,
          description: movie.description,
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log("The film has been added to the favorites");
        return data;
      }
    } catch (e) {
    }
  };

  static deleteFavori = async (id) => {
    try {
      const response = await fetch(`${APIManager.getApiUrl()}favoris/${id}.json`, {
        method: "DELETE"
      });
      if (response.ok) {
        const data = await response.json();
        console.log("DATA_DELETE", data);
        console.log("The movie has been removed from the favorites");
        return data;
      }
    } catch (e) {
    }
  };
}