import { Galinha } from "./src/Galinha";
import { Pato } from "./src/Pato";
import { PatoAdapter } from "./src/PatoAdapter";

let galinha: Galinha = new Galinha();
let pato: Pato = new PatoAdapter(galinha);

console.log('Lá vem o pa...');
pato.som()
console.log('Ops... era a galinha!')