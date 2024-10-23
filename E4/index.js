//Get Elements

const formulario = document.getElementById("formulario");
const card = document.getElementById("card");


//Config

const apiURL = {
  base: "https://pokeapi.co/api/v2/",
  getPokemon: "pokemon/"
}


//Storage Functions

const save = (key, value, storageType = localStorage) => storageType.setItem(key, JSON.stringify(value));
const read = (key, storageType = localStorage) => JSON.parse(storageType.getItem(key));
const remove = (key, storageType = localStorage) => storageType.removeItem(key);


//Fetch functions

const makeRequest = async (url, pokemonId) => {
  try {
    const response = await fetch(url + pokemonId);
    if (response.status === 200) {
      data = response.json()
      return data;
    }
    if (response.status === 404) {
      console.log(response.status);
      return null;
    }
    if (!response.ok) {
      throw new Error(`Aca hubo un error`);
    }

  } catch (error) {
    throw new Error(`Failed to fetch services: ${error.message}`)
  }
}


//Get the Input Value, + Prevent Default + validate it + Render result  + save / remove from storage 

const getInputValue = async (event) => {
  event.preventDefault();
  id = formulario.elements.id.value;
  if (id) {
    let data = await makeRequest(apiURL.base + apiURL.getPokemon, id);
    if (data != null) {
      let pokemon = {};
      pokemon.id = data.id;
      pokemon.name = data.name;
      pokemon.type = data.types[0].type.name;
      pokemon.height = data.height;
      pokemon.weight = data.weight;
      pokemon.img = data.sprites.other.home.front_default;
      save("ultimoPokemon", pokemon, localStorage);
      return renderCard(pokemon);
    }
    else {
      renderError();
      remove("ultimoPokemon", localStorage);
    }
  }
  else {
    card.innerHTML = null;
    return card.innerHTML = `<h2> Por favor, recuerde que debe ingresar un ID </h2>`;
  }
}


//Render card

const renderCard = (pokemon) => {
  card.innerHTML = null;
  return card.innerHTML = `<picture><img src="${pokemon.img}" alt="${pokemon.name}"></picture>
  <h1>${pokemon.name.toUpperCase()} #${pokemon.id}</h1>
  <h2>Height: ${pokemon.height / 10}m</h2>
  <h2>Weight: ${pokemon.weight / 10}kg</h2>
  <h2>Type: ${pokemon.type.toUpperCase()}</h2>`;
}


//Render error

const renderError = () => {
  card.innerHTML = null;
  card.innerHTML = `<h2>No se encontró Pokemon con el id ${formulario.elements.id.value}<h2>`;
}


//Initialization from local storage

let ultimoPokemon = read("ultimoPokemon", localStorage);
if (ultimoPokemon) {
  renderCard(ultimoPokemon);
  formulario.elements.id.value = ultimoPokemon.id;
}
else {
  card.innerHTML = null;
  card.innerHTML = `<p> Por favor, ingrese un ID </p>`;
}


//Event Listeners

formulario.addEventListener("submit", getInputValue);