const axios = require('axios').default;

class DataSource {
	static searchMovies(keyword) {
		return axios({
			method: 'get',
			url: `http://www.omdbapi.com/?apikey=6075755&s=${keyword}`,
		})
			.then(response => {
				if (response.data.Search) {
					return Promise.resolve(response.data.Search);
				} else {
					return Promise.reject(`${keyword} is Not Found!`);
				}
			})
			.catch(error => Promise.reject(error));
	}
}

export default DataSource;
