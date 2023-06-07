class Animal {
  constructor(nome, idade, especie) {
    if (!nome || !idade || !especie) {
      throw new Error("Preencha todos os campos obrigatórios.");
    }

    this.nome = nome;
    this.idade = idade;
    this.especie = especie;
  }

  mostrarAtributos() {
    return this.atributos();
  }

  atributos() {
    return {
      nome: this.nome,
      idade: this.idade,
      especie: this.especie
    };
  }
}

try {
  const meuAnimal = new Animal("Borboleta", 1, "Tumulus hottentotta");
  const atributos = meuAnimal.mostrarAtributos();

  console.log(atributos.nome);
  console.log(atributos.idade);
  console.log(atributos.especie);
} catch (error) {i
  console.error(error.name);
  console.error(error.message);
  console.error(error.stack);
}


