const LOKI_DEFAULT = "loki";

const DISFRACES_LOKI = {
  hulk: "iron-man",
  logan: () => 1 + 1,
};

console.log(DISFRACES_LOKI["hulk"]);
const disfraz = DISFRACES_LOKI["hulk"]; //guardar en variable
console.log(disfraz);

const saludo = {
  name: "maxi",
  saludar: () => `hola ${saludo.name}`,
};

console.log(saludo.saludar());

//-------------------probando operador--------------------
console.log("--------probando operador ??-------");
const probandoNull = null ?? "hola";
console.log(probandoNull);

//--------factorial-------
console.log("--------factorial-------");
const resultado = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};
console.log(resultado(4));

//--------factorial-------
console.log("--------Eliminando duplicados-------");
const arr = [1, 2, 4, 4, 6, 9, 9];

const sinDuplicar = arr.filter((num, index, arr) => {
  return index === arr.indexOf(num);
});
console.log(sinDuplicar);

//SINDUPLICAR STRING
console.log("----SIN DUPLICAR STRING----");
const arrString = ["ana", "paula", "ana", "jorge", "jorge", "mingo", "Mingo"];
const parseStringLower = arrString.map((el) => el.toLowerCase());

const sinDuplicarString = parseStringLower.filter((pal, index, arrString) => {
  return arrString.indexOf(pal) === index;
});

console.log(sinDuplicarString);
