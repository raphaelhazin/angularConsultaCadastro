export class Consulta {

    public inscricao: String;
    public nome: String;
    public sobrenome: String;
    public cpf: String;
    public cnpj: String;
    public situacao: String;
    public tpinscricao: String;

    constructor () {
        
    }

    consultar () {
        console.log("BANANA");
        console.log(this.nome);
        console.log(this.sobrenome);
        console.log(this.cpf);
    }

}
