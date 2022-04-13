const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			planetsInfo: [],
			planetsImg: []
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets") 
				const data = await response.json();
				setStore({planets: data.results})
			},
			getPlanetsInfo: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/") 
				const data = await response.json();
				setStore({planetsInfo: data.results})
			},

			getPlanetsImg: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/dans182starwars") 
				const data = await response.json();
				setStore({planetsImg: data.results})

			}
	}}
};

export default getState;
