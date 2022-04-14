const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			vehicleInfo:{}
		},
		actions: {
			getVehicles: async() => {
				const  response = await fetch("https://www.swapi.tech/api/vehicles/");
				const vehiclesAPI = await response.json();
				setStore({vehicles:vehiclesAPI.results});
			},
			getVehicleInfo: async(e) => {
				const  response = await fetch("https://www.swapi.tech/api/vehicles/"+e);
				const vehicleAPI = await response.json();
				setStore({vehicleInfo:vehicleAPI.result.properties});
				console.log(store.vehicleInfo);
			}
			
			}
		}
	};

export default getState;
