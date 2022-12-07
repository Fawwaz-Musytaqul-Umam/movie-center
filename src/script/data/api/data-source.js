const axios = require('axios').default;

const API_KEY = '5f3e83eca61b759ecedbeb4ef36325dd';
class DataSource {
	static searchMovies(keyword) {
		return axios
			.get(`https://api.themoviedb.org/3/search/movie`, {
				params: {
					api_key: API_KEY,
					query: keyword,
					include_adult: false,
				},
			})
			.then(response => {
				if (response.data.results.length) {
					return Promise.resolve(response.data.results);
				} else {
					return Promise.reject(`${keyword} is Not Found!`);
				}
			})
			.catch(error => Promise.reject(error));
	}

	static trendingMovies() {
		return axios
			.get(`https://api.themoviedb.org/3/movie/popular`, {
				params: {
					api_key: API_KEY,
				},
			})
			.then(response => {
				if (response.data.results.length) {
					return Promise.resolve(response.data.results);
				} else {
					return Promise.reject(`Error__Check Your Connection`);
				}
			})
			.catch(error => Promise.reject(error));
	}
}

export default DataSource;
