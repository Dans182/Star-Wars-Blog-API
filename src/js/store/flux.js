const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			next: "https://www.swapi.tech/api/vehicles/",
			favourites: [],
		},
		actions: {
			getVehicles: async() => {
				const store = getStore();
				const response = await fetch(store.next);
				const vehiclesAPI = await response.json();
				let vehiclesfullAPI = [];
				setStore({next:vehiclesAPI.next});
				
				for (let j=0; j<vehiclesAPI.results.length; j++){
					const  response = await fetch("https://www.swapi.tech/api/vehicles/"+vehiclesAPI.results[j].uid);
					const vehicleAPI = await response.json();
					setStore({vehicles:[...getStore().vehicles,vehicleAPI.result]});
				}
			//	setStore({vehicles:[...getStore().vehicles,vehiclesfullAPI]});
				console.log(getStore().vehicles);
			},
			updateFavourites: (e)=>{
				const favourites = getStore().favourites;
				if (!favourites.includes(e)) {
				  setStore({ favourites: [...getStore().favourites, e] })
				  true;
				} else {
				  setStore({ favourites: favourites.filter((elem) => elem !== e) })
				  false;
				}
			}
			}
		}
	};

export default getState;
