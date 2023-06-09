class Estudante {
  constructor(nome, idade, turma) {
    if (!nome || !idade || !turma) {
      throw new Error("Preencha todos os campos obrigatórios.");
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
  const estudante = new Estudante("Lohana Maria", 15, "3A");

  const atributos = estudante.mostrarAtributos();

  console.log(atributos.nome);
  console.log(atributos.idade);
  console.log(atributos.turma);
} catch (error) {
  console.error(error.name);
  console.error(error.message);
  console.error(error.stack);
}

