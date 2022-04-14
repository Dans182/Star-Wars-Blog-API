const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			peopleInfo: [],
			peopleImg: []
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/People") 
				const data = await response.json();
				setStore({People: data.results})
			},
			getPeopleInfo: async () => {
				const response = await fetch("https://www.swapi.tech/api/People/") 
				const data = await response.json();
				setStore({PeopleInfo: data.results})
			},

			getPeopleImg: async () => {
				const response = await fetch("") 
				const data = await response.json();
				setStore({PeopleImg: data.results})

			}
	}}
};

export default getState;