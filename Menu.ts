import readlinesync = require("readline-sync");
import { Sneakers } from "./src/model/Sneakers";
import { SneakersNike } from "./src/model/SneakersNike";
import { SneakersAdidas } from "./src/model/SneakersAdidas";
import { SneakersController } from "./src/controller/SneakersController";

export function main() {

    let sneakers: SneakersController = new SneakersController();

    let opcao, numero, tamanho, valor: number;
    let cor: string;
    let marca: string;
    let modelo: string;
    const marcasSneakers = ['Nike', 'Adidas'];

    console.log("\nCadastrar Produtos\n");

    let snknike1: SneakersNike = new SneakersNike(sneakers.gerarNumero(),"Nike SB Force 98", "Nike", 42, "Preto", 450.00);
    sneakers.cadastrar(snknike1);

    let snknike2: SneakersNike = new SneakersNike(sneakers.gerarNumero(),"Nike Dunk Low", "Nike", 43, "Branco", 850.00);
    sneakers.cadastrar(snknike2);

    let snkadidas1: SneakersNike = new SneakersNike(sneakers.gerarNumero(),"Campus 00S", "Adidas", 41, "Preto", 550.00);
    sneakers.cadastrar(snkadidas1);

    let snkadidas2: SneakersNike = new SneakersNike(sneakers.gerarNumero(),"Superstar", "Adidas", 40, "Cinza", 700.00);
    sneakers.cadastrar(snkadidas2);

    const sneakersnike: SneakersNike = new SneakersNike(2, "Nike SB Force 58", "Nike", 41, "Cinza", 360.99)
    sneakersnike.visualizar();

    const sneakersadidas: SneakersAdidas = new SneakersAdidas(3, "Adidas Campus 00S", "Adidas", 40, "Preto", 549.99)
    sneakersadidas.visualizar();

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                OG SNEAKERS                          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Listar produtos                      ");
        console.log("            3 - Buscar produto por numero             ");
        console.log("            4 - Atualizar produtos                   ");
        console.log("            5 - Excluir produto                      ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Escolha a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nOG SNEAKERS - Estilo e conforno no seu pé!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCadastrar produto\n\n");

                console.log("Digite o numero do produto: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o modelo do produto: ");
                modelo = readlinesync.question("");

                console.log("Digite a marca do produto: ");
                marca = readlinesync.question("");

                console.log("Digite o tamanho do produto: ");
                tamanho = readlinesync.questionInt("");

                console.log("Digite a cor do produto: ");
                cor = readlinesync.question("");

                console.log("Digite o valor do produto: ");
                valor = readlinesync.questionInt("");

                sneakers.cadastrar(new SneakersNike(numero, modelo, marca, tamanho, cor, valor));

                keyPress();
                break;
            case 2:
                console.log("\n\nListar produtos\n\n");

                sneakers.listarProdutos();
                keyPress();

                break;
            case 3:
                console.log("\n\nBuscar produto - por número\n\n");

                console.log("Digite o numero do produto: ");
                numero = readlinesync.questionInt("");
                sneakers.procurarPorNumero(numero);

                keyPress();
                break;
            case 4:
                console.log("\n\nAtualizar produtos\n\n");

                console.log("Digite o numero do produto: ");
                numero = readlinesync.questionInt("");

                let sneaker = sneakers.buscarNoArray(numero);

                if(sneaker != null) {
                    console.log("Digite o modelo do produto: ")
                    modelo = readlinesync.question("");

                    console.log("Digite a marca do produto: ")
                    marca = readlinesync.question("");

                    marca = sneaker.marca

                    console.log("Digite o tamanho do produto: ");
                    tamanho = readlinesync.questionInt("");

                    console.log("Digite a cor do produto: ");
                    cor = readlinesync.question("");

                    console.log("Digite o valor do produto: ");
                    valor = readlinesync.questionFloat("");

                    sneakers.atualizar(new SneakersNike(numero, modelo, marca, tamanho, cor, valor))

                } else {
                    console.log("\nO Sneaker numero: " + numero + " não foi encontrado!");
                }
                
                keyPress();
                break;
            case 5:
                console.log("\n\nExcluir produto\n\n");

                console.log("Digite o numero do produto: ")
                numero = readlinesync.questionInt("");
                sneakers.excluir(numero);

                keyPress();
                break;
            case 6:
                console.log("\n\nSair\n\n");

                break;
        }
    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Kaua Gabriel de Farias ");
    console.log("kauagabrielfarias18@gmail.com");
    console.log("github.com/kauafarias1");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();