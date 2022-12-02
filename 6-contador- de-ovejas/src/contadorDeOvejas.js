export const OVEJAS = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "naranja" },
  { name: "Nnnnnnnn", color: "verde" },
];
export const contadorDeOvejas = (ovejas) => {
  if (!ovejas) throw new Error("should the parameter be an array ");
  return ovejas.filter(
    (oveja) =>
      oveja.color.includes("rojo") &&
      oveja.name.includes("N") &&
      oveja.name.includes("a")
  );
};

console.log(contadorDeOvejas(OVEJAS));
