import { Galinha } from "./Galinha";
import { IPatoCarac } from "./IPatoCarac";

export class PatoAdapter implements IPatoCarac{
    private galinha: Galinha;

    constructor(galinha: Galinha){
        this.galinha = galinha;
    }

    som(): void {
        console.log(this.galinha.som());
    }
}