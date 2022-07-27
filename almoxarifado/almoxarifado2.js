function itensAlmox(
  nome,
  codigo,
  minimo,
  valor,
  fornecedor,
  email,
  fones,
  quantidade
) {
  this.nome = nome;
  this.codigo = codigo;
  this.minimo = minimo;
  this.valor = valor;
  this.fornecedor = fornecedor;
  this.email = email;
  this.fones = fones;
  this.quantidade = quantidade;
}

const limpaContato = new itensAlmox(
  "Limpa contato",
  "001",
  20,
  "15 Reais",
  "Carlinhos manutec",
  "carlmanu@gmail.com",
  [51998765432, 55981234567],
  20
);

const desingripante = new itensAlmox(
  "Desingripante",
  "002",
  30,
  "10 Reais",
  "Carlinhos manutec",
  "carlmanu@gmail.com",
  [51998765432, 55981234567],
  15
);

console.log(desingripante);
