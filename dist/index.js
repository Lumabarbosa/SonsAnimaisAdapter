"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Galinha_1 = require("./src/Galinha");
const PatoAdapter_1 = require("./src/PatoAdapter");
let galinha = new Galinha_1.Galinha();
let pato = new PatoAdapter_1.PatoAdapter(galinha);
console.log('Lá vem o pa...');
pato.som();
console.log('Ops... era a galinha!');
