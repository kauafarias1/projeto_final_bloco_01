import { Sneakers } from "./Sneakers";

export class SneakersAdidas extends Sneakers {

    constructor(numero: number, modelo: string, marca: number, tamanho: number, cor: string, valor: number) {
        super(numero, modelo, marca, tamanho, cor, valor)
    }
}