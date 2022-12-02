import { describe, expect, it } from "vitest";
import { contadorDeOvejas, OVEJAS } from "../src/contadorDeOvejas.js";
/*Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
 Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y 
 que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas
  o espacios.Ej:
  
  [{ name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }] */

describe("fizzbuzz", () => {
  it("should be a funciontion", () => {
    expect(typeof contadorDeOvejas).toBe("function");
  });
  it("should render array ", () => {
    expect(() => contadorDeOvejas()).toThrow(
      "should the parameter be an array"
    );
  });

  //la mejor opcion que ka de arriba
  it("should render array of sheep with letter 'n' and 'a' and color red", () => {
    const ovejasFiltradas = OVEJAS.filter(
      (oveja) =>
        oveja.color.includes("rojo") &&
        oveja.name.includes("N") &&
        oveja.name.includes("a")
    );

    expect(contadorDeOvejas(OVEJAS)).toEqual(ovejasFiltradas);
  });

  /*it("should render array of sheep with letter 'n' and 'a' and color red", () => {
    IMPORTANTE
    le pasamos esta variable al to ecual y es lo mismo recorrer y fitlrar es la mejor opcion ya que si agregamos
    otra posiblidad que cumpla los requicitos el test fallara porque le paso un obj con solo dos opciones
    const ovejasFiltradas = OVEJAS.filter(
      (oveja) =>
        oveja.color.includes("rojo") &&
        oveja.name.includes("N") &&
        oveja.name.includes("a")
    );

    expect(contadorDeOvejas(OVEJAS)).toEqual([
      { name: "Navidad", color: "rojo" },
      { name: "Ki Na Ma", color: "rojo" },
    ]);
  });*/
});
