const axios = require('axios').default;

class DataSource {
	static searchMovies(keyword) {
		return axios
			.get(`https://api.themoviedb.org/3/search/movie`, {
				params: {
					api_key: '5f3e83eca61b759ecedbeb4ef36325dd',
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
}

export default DataSource;
