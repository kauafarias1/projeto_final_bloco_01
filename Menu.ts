import readlinesync = require("readline-sync");
import { Sneakers } from "./src/model/Sneakers";
import { SnakersNike } from "./src/model/SneakersNike";
import { SneakersAdidas } from "./src/model/SneakersAdidas";

export function main() {

    let opcao: number;

    const sneakersnike: SnakersNike = new SnakersNike(2, "Nike SB Force 58", 1, 41, "Cinza", 360.99)
    sneakersnike.visualizar();

    const sneakersadidas: SneakersAdidas = new SneakersAdidas(3, "Adidas Campus 00S", 2, 40, "Preto", 549.99)
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

                break;
            case 2:
                console.log("\n\nListar produtos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar produto - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar produtos\n\n");

                break;
            case 5:
                console.log("\n\nExcluir produto\n\n");

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