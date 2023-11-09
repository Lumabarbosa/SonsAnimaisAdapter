"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatoAdapter = void 0;
class PatoAdapter {
    constructor(galinha) {
        this.galinha = galinha;
    }
    som() {
        console.log(this.galinha.som());
    }
}
exports.PatoAdapter = PatoAdapter;
