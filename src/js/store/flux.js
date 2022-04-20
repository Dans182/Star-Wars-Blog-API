const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      vehicles: [],
      next: "https://www.swapi.tech/api/vehicles/",
      favourites: [],
      ariaExpanded: false,
    },
    actions: {
      getVehicles: async () => {
        const store = getStore();
        const vehiclesLocal = JSON.parse(localStorage.getItem("vehicles"));
        const nextLocal = JSON.parse(localStorage.getItem("next"));
        if (vehiclesLocal) {
          setStore({ vehicles: vehiclesLocal });
        } else {
          if (nextLocal) {
            setStore({ next: nextLocal });
          }

          const response = await fetch(store.next);
          const vehiclesAPI = await response.json();
          setStore({ next: vehiclesAPI.next });
          localStorage.setItem("next", JSON.stringify(vehiclesAPI.next));

          for (let j = 0; j < vehiclesAPI.results.length; j++) {
            const response = await fetch(
              "https://www.swapi.tech/api/vehicles/" +
                vehiclesAPI.results[j].uid
            );
            const vehicleAPI = await response.json();
            let findID = store.vehicles.find(
              (e) => e.uid == vehicleAPI.result.uid
            );
            if (findID) {
              return;
            } else {
              setStore({ vehicles: [...store.vehicles, vehicleAPI.result] });
              localStorage.setItem("vehicles", JSON.stringify(store.vehicles));
            }
          }
        }
      },
      updateFavourites: (e) => {
        const favourites = getStore().favourites;
        if (!favourites.includes(e)) {
          setStore({ favourites: [...getStore().favourites, e] });
          setStore({ ariaExpanded: !ariaExpanded });
        } else {
          setStore({ favourites: favourites.filter((elem) => elem !== e) });
        }
      },
    },
  };
};

export default getState;
