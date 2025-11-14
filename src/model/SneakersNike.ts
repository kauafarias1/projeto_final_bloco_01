import { Sneakers } from "./Sneakers";

export class SneakersNike extends Sneakers {

    constructor(numero: number, modelo: string, marca: string, tamanho: number, cor: string, valor: number) {
        super(numero, modelo, marca, tamanho, cor, valor)
    }

}