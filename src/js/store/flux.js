const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [
				{
				  "properties": {
					"diameter": "10465",
					"rotation_period": "23",
					"orbital_period": "304",
					"gravity": "1 standard",
					"population": "200000",
					"climate": "arid",
					"terrain": "desert",
					"surface_water": "1",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Tatooine",
					"url": "https://www.swapi.tech/api/planets/1"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fae",
				  "uid": "1",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "12500",
					"rotation_period": "24",
					"orbital_period": "364",
					"gravity": "1 standard",
					"population": "2000000000",
					"climate": "temperate",
					"terrain": "grasslands, mountains",
					"surface_water": "40",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Alderaan",
					"url": "https://www.swapi.tech/api/planets/2"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6faf",
				  "uid": "2",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "10200",
					"rotation_period": "24",
					"orbital_period": "4818",
					"gravity": "1 standard",
					"population": "1000",
					"climate": "temperate, tropical",
					"terrain": "jungle, rainforests",
					"surface_water": "8",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Yavin IV",
					"url": "https://www.swapi.tech/api/planets/3"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb0",
				  "uid": "3",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "7200",
					"rotation_period": "23",
					"orbital_period": "549",
					"gravity": "1.1 standard",
					"population": "unknown",
					"climate": "frozen",
					"terrain": "tundra, ice caves, mountain ranges",
					"surface_water": "100",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Hoth",
					"url": "https://www.swapi.tech/api/planets/4"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb1",
				  "uid": "4",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "8900",
					"rotation_period": "23",
					"orbital_period": "341",
					"gravity": "N/A",
					"population": "unknown",
					"climate": "murky",
					"terrain": "swamp, jungles",
					"surface_water": "8",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Dagobah",
					"url": "https://www.swapi.tech/api/planets/5"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb2",
				  "uid": "5",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "118000",
					"rotation_period": "12",
					"orbital_period": "5110",
					"gravity": "1.5 (surface), 1 standard (Cloud City)",
					"population": "6000000",
					"climate": "temperate",
					"terrain": "gas giant",
					"surface_water": "0",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Bespin",
					"url": "https://www.swapi.tech/api/planets/6"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb3",
				  "uid": "6",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "4900",
					"rotation_period": "18",
					"orbital_period": "402",
					"gravity": "0.85 standard",
					"population": "30000000",
					"climate": "temperate",
					"terrain": "forests, mountains, lakes",
					"surface_water": "8",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Endor",
					"url": "https://www.swapi.tech/api/planets/7"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb4",
				  "uid": "7",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "12120",
					"rotation_period": "26",
					"orbital_period": "312",
					"gravity": "1 standard",
					"population": "4500000000",
					"climate": "temperate",
					"terrain": "grassy hills, swamps, forests, mountains",
					"surface_water": "12",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Naboo",
					"url": "https://www.swapi.tech/api/planets/8"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb5",
				  "uid": "8",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "12240",
					"rotation_period": "24",
					"orbital_period": "368",
					"gravity": "1 standard",
					"population": "1000000000000",
					"climate": "temperate",
					"terrain": "cityscape, mountains",
					"surface_water": "unknown",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Coruscant",
					"url": "https://www.swapi.tech/api/planets/9"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb6",
				  "uid": "9",
				  "__v": 0
				},
				{
				  "properties": {
					"diameter": "19720",
					"rotation_period": "27",
					"orbital_period": "463",
					"gravity": "1 standard",
					"population": "1000000000",
					"climate": "temperate",
					"terrain": "ocean",
					"surface_water": "100",
					"created": "2022-04-14T11:36:23.309Z",
					"edited": "2022-04-14T11:36:23.309Z",
					"name": "Kamino",
					"url": "https://www.swapi.tech/api/planets/10"
				  },
				  "description": "A planet.",
				  "_id": "5f7254c11b7dfa00041c6fb7",
				  "uid": "10",
				  "__v": 0
				}
			  ],
			planetsInfo: [],
			 planetsImg: [],
		},
		actions: {
			getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets") 
				const dataPlanets = await response.json();
				let arrayPrueba = [];

				for (let i = 0; i < dataPlanets.results.length; i++){
					const prueba = await getActions().getPlanetsInfo(dataPlanets.results[i].uid);
					arrayPrueba.push(prueba);
				}
				console.log(arrayPrueba);
					setStore({planets: arrayPrueba})
			},
			getPlanetsInfo: async (e) => {
				const response = await fetch("https://www.swapi.tech/api/planets/" + e) 
				const dataPlanetsInfo = await response.json();

				return dataPlanetsInfo.result;
			},

			getPlanetsImg: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/todos/user/dans182starwars") 
				const data = await response.json();
				setStore({planetsImg: data.results})

			}
	}}
};

export default getState;
