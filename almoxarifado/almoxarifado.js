const itens = [
  {
    nome: "Disco de corte",
    id: "001",
    valor: "1,5 Reais",
    fornecedor: "Zé da esquina",
    email: "ze@gmail.com",
    fones: ["519999999", "51989999990"],
    quantidade: 123,
    minimo: 20,

    depositar: function (qtd) {
      this.quantidade += qtd;
    },
    retirar: function (qtd) {
      this.quantidade -= qtd;
    },
  },

  {
    nome: "Disco de desbaste",
    id: "002",
    valor: "2,5 Reais",
    fornecedor: "Zé da esquina",
    email: "ze@gmail.com",
    fones: ["519999999", "51989999990"],
    quantidade: 7,
    minimo: 10,

    depositar: function (qtd) {
      this.quantidade += qtd;
    },
    retirar: function (qtd) {
      this.quantidade -= qtd;
    },
  },

  {
    nome: "Desingripante",
    id: "003",
    valor: "15 Reais",
    fornecedor: "Vitoria industrias",
    email: "vidustria@gmail.com",
    fones: ["519922349", "51981293490"],
    quantidade: 16,
    minimo: 5,

    depositar: function (qtd) {
      this.quantidade += qtd;
    },
    retirar: function (qtd) {
      this.quantidade -= qtd;
    },
  },
  {
    nome: "Limpa contato",
    id: "004",
    valor: "25 Reais",
    fornecedor: "Vitoria industrias",
    email: "vidustria@gmail.com",
    fones: ["519922349", "51981293490"],
    quantidade: 6,
    minimo: 5,

    depositar: function (qtd) {
      this.quantidade += qtd;
    },
    retirar: function (qtd) {
      this.quantidade -= qtd;
    },
  },
];

itens.push({
  nome: "Luva de polietileno",
  id: "005",
  valor: "10 Reais",
  fornecedor: "Catarata epi's",
  email: "catepi@gmail.com",
  fones: ["519912749", "51953293220"],
  quantidade: 100,
  minimo: 30,

  depositar: function (qtd) {
    this.quantidade += qtd;
  },
  retirar: function (qtd) {
    this.quantidade -= qtd;
  },
});

//Altere a pesquisa para verificar o item
let pesquisa = "Luva de polietileno";
let quantidadeAdicionada = 100;
let quantidadeRetirada = 200;
let itemSelecionado = "";

for (i = 0; i < itens.length; i++) {
  if (pesquisa == itens[i].nome) {
    itens[i].depositar(quantidadeAdicionada);
    itens[i].retirar(quantidadeRetirada);

    if (itens[i].quantidade <= itens[i].minimo) {
      console.log(
        `Temos ${itens[i].quantidade}  do item ${itens[i].nome} e, está abaixo do minimo que é ${itens[i].minimo}. Entre em contato com ${itens[i].fornecedor}, no email ${itens[i].email} ou, ligue para ${itens[i].fones}`
      );
    } else {
      console.log(
        `Temos ${itens[i].quantidade}  do item ${itens[i].nome} e, a quantidade minima é ${itens[i].minimo}`
      );
    }
  }
}
