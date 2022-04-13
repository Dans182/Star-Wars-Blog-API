const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets") 
				const data = await response.json();
				setStore({planets: data.results})
			}
	}}
};

export default getState;
