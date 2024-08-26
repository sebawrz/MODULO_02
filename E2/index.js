const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: ["Muzzarella", "Tomate", "Queso Azul", "Parmesano", "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



//Funcion helper para imprimir pizzas. Espera un texto, un array de pizzas y 4 booleanos para saber que atributo imprimir dado que la reutilizaremos en varias ocasiones pero no siempre estaremos imprimiendo todos los atributos
const imprimirPizzas = (texto, pizzas, imprimirId, imprimirNombre, imprimirPrecio, imprimirIngredientes) => {
  console.log(texto);
  pizzas.forEach(pizza => {
    if (imprimirId)
      console.log("ID:", pizza.id);
    if (imprimirNombre)
      console.log("Nombre:", pizza.nombre);
    if (imprimirPrecio)
      console.log("Precio:", pizza.precio);
    if (imprimirIngredientes) {
      console.log("Lista de Ingredientes:");
      pizza.ingredientes.forEach(ingrediente => {
        console.log(ingrediente)
      });
    }
  });
}




//Ejercicio 1: a)  Las pizzas que tengan un id impar.
console.log("Ejercicio 1: a)  Las pizzas que tengan un id impar.")

const pizzasImpares = (pizzas) => {
  const impares = pizzas.filter(pizza => pizza.id % 2 != 0);
  return impares;
}

imprimirPizzas("Las pizzas impares son: ", pizzasImpares(pizzas), 1, 1, 0, 0);



//Ejercicio 2: b) Responder: ¿Hay alguna pizza que valga menos de $600?
console.log("Ejercicio 2: b) Responder: ¿Hay alguna pizza que valga menos de $600?")

const pizzasValorMenorQue = (pizzas, valorFiltro) => {
  const pizzasValor = pizzas.filter(pizza => pizza.precio < valorFiltro);
  return pizzasValor;
}

let pizzaPrecioFiltro = 600; //variable para setear el precio maximo de las pizzas a buscar

if (pizzasValorMenorQue(pizzas, pizzaPrecioFiltro).length > 0) {
  imprimirPizzas("Las pizzas con precio menor que " + pizzaPrecioFiltro + " son: ", pizzasValorMenorQue(pizzas, pizzaPrecioFiltro), 1, 1, 1, 0);
}
else {
  console.log("No hay pizzas con valor menor a " + pizzaPrecioFiltro);
}



//Ejercicio 3: c) El nombre de cada pizza con su respectivo precio.
console.log("Ejercicio 3: c) El nombre de cada pizza con su respectivo precio.")

imprimirPizzas("Todas nuestras pizzas: ", pizzas, 0, 1, 1, 0);



//Ejercicio 4: d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.
console.log("Ejercicio 4: d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo)")

imprimirPizzas("Todas nuestras pizzas: ", pizzas, 0, 1, 0, 1);
