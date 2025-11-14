import { Sneakers } from "../model/Sneakers";
import { SneakersRepository } from "../repository/SneakersRepository";

export class SneakersController implements SneakersRepository {

    private listaSneakers: Array<Sneakers> = new Array<Sneakers>();
    numero: number = 0;

    listarProdutos(): void {
        for (let sneaker of this .listaSneakers) {
            sneaker.visualizar();
        }
    }

    procurarPorNumero(numero: number): void {
        let buscaSneaker = this.buscarNoArray(numero);

        if(buscaSneaker != null) {
            buscaSneaker.visualizar();
        } else
            console.log("\nO Sneaker: " + numero
                + " não foi encontrado!"
            )
    }
    cadastrar(sneaker: Sneakers): void {
        this.listaSneakers.push(sneaker);
        console.log("\nO Produto: " + sneaker.modelo + " foi cadastrado com sucesso!")
    }
    atualizar(sneaker: Sneakers): void {
        let buscaSneaker = this.buscarNoArray(sneaker.numero);

        if (buscaSneaker != null) {
            this.listaSneakers[this.listaSneakers.indexOf(buscaSneaker)] = sneaker;
            console.log("\nO Sneaker numero: " + sneaker.numero + " foi atualizado com sucesso!")
        } else 
            console.log("\nO Sneaker numero: " + sneaker.numero + " não foi encontrado!")
    }
    excluir(numero: number): void {
        let buscaSneaker = this.buscarNoArray(numero);

        if (buscaSneaker != null) {
            this.listaSneakers.splice(this.listaSneakers.indexOf(buscaSneaker), 1);
            console.log("\nO Sneaker numero: " + numero + " foi apagado com sucesso!")
        } else {
            console.log("\nO Sneaker numero: " + numero + " não foi encontrado!");
        }
    }
    
    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Sneakers | null {

        for(let sneaker of this.listaSneakers) {
            if (sneaker.numero === numero)
                return sneaker;
        }

        return null;
    }

}