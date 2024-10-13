const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


//Get Elements

const formulario = document.getElementById("formulario");
const card = document.getElementById("card");


//Storage Functions

const save = (key, value, storageType = localStorage) => storageType.setItem(key, JSON.stringify(value))

const read = (key, storageType = localStorage) => JSON.parse(storageType.getItem(key));

const remove = (key, storageType = localStorage) => storageType.removeItem(key);


//Get the Input Value, validate it + Prevent Default.

const getInputValue = (event) => {
  event.preventDefault();
  id = formulario.elements.id.value;
  if (id) {
    searchPizza(id);
  }
  else {
    card.innerHTML = null;
    card.innerHTML = `<p> Por favor, recuerde que debe ingresar un ID </p>`;
  }
}

//Search pizza by id

const searchPizza = (id) => {
  pizza = pizzas.find((pizza) => pizza.id == id)
  if (pizza) {
    renderPizza(pizza)
    save("ultimaPizza", pizza, localStorage);
  }
  else {
    renderError(id);
    remove("ultimaPizza", localStorage);
  }
}

//Render pizza card

const renderPizza = (pizza) => {
  card.innerHTML = null;
  card.innerHTML = `<picture><img src="${pizza.imagen}" alt="${pizza.nombre}"></picture>
  <h1>${pizza.nombre}</h1>
  <h2>$ ${pizza.precio}</h2>
  <p>${pizza.ingredientes} </p>`;
}

//Render error in card

const renderError = (id) => {
  card.innerHTML = null;
  card.innerHTML = `<p>Lo siento. No existen pizza con ID ${id}.</p> <p>Pruebe con otro ID. </p>`;
}

//Initialization

ultimaPizza = read("ultimaPizza", localStorage);
if (ultimaPizza) {
  renderPizza(read("ultimaPizza", localStorage));
}
else {
  card.innerHTML = null;
  card.innerHTML = `<p> Por favor, ingrese un ID </p>`;
}


//Event Listeners

formulario.addEventListener("submit", getInputValue);