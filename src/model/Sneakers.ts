export abstract class Sneakers {

    private _numero: number;
    private _modelo: string;
    private _marca: number;
    private _tamanho: number;
    private _cor: string;
    private _valor: number;

    constructor(numero: number, modelo: string, marca: number, tamanho: number, cor: string, valor: number) {
        this._numero = numero;
        this._modelo = modelo;
        this._marca = marca;
        this._tamanho = tamanho;
        this._cor = cor;
        this._valor = valor;

    }

    public get numero() {
        return this._numero
    }

    public set numero(numero: number) {
        this._numero = numero
    }

    public get modelo() {
        return this._modelo
    }

    public set modelo(modelo: string) {
        this._modelo = modelo
    }

    public get marca() {
        return this._marca
    }

    public set marca(marca: number) {
        this._marca
    }

    public get tamanho() {
        return this._tamanho
    }

    public set tamanho(tamanho: number) {
        this._tamanho
    }

    public get cor(){
        return this._cor
    }

    public set cor(cor: string) {
        this._cor
    }

    public get valor() {
        return this._valor
    }

    public set valor(valor: number) {
        this._valor
    }

public visualizar(): void {

        let marca: string = "";

        switch (this._marca) {
            case 1:
                marca = "Nike";
                break;
            case 2:
                marca = "Adidas";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados do produto:");
        console.log("*****************************************************");
        console.log("Numero do produto: " + this._numero);
        console.log("Modelo do produto: " + this._modelo);
        console.log("Marca do produto: " + marca);
        console.log("Tamanho do produto: " + this._tamanho);
        console.log("Cor do produto: " + this._cor);
        console.log("Valor do produto: " + this._valor.toFixed(2))
    }

}