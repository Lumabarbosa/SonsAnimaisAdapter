import { IGalinhaCarac } from "./IGalinhaCarac";

export class Galinha implements IGalinhaCarac {

    som(): void {
        console.log('Cocó, cocorocó!!')
    }

}