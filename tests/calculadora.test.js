const calculadora = require("../models/calculadora.js");

test("somar 2 + 2", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar Banana + 2", () => {
  const resultado = calculadora.somar("Banana", 2);
  expect(resultado).toBe(4);
});
