import { Sneakers } from "../model/Sneakers";

export interface SneakersRepository {
    procurarPorNumero(numero: number): void;
    listarProdutos(): void;
    cadastrar(sneaker: Sneakers): void;
    atualizar(sneaker: Sneakers): void;
    excluir(numero: number): void;
}