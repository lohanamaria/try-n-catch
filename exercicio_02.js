class Estudante {
  constructor(nome, idade, turma) {
    if (!nome || !idade || !turma) {
      throw new Error("Os atributos nome, idade e turma são obrigatórios.");
    }

    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
  }

  mostrarAtributos() {
    return this.atributos();
  }

  atributos() {
    return {
      nome: this.nome,
      idade: this.idade,
      turma: this.turma
    };
  }
}

try {
  const estudante = new Estudante("João", 16, "3A");

  const atributos = estudante.mostrarAtributos();

  console.log(atributos.nome);
  console.log(atributos.idade);
  console.log(atributos.turma);
} catch (error) {
  console.error(error.message);
}

