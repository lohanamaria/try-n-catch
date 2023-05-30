class Animal {
  constructor(nome, idade, especie) {
    if (!nome || !idade || !especie) {
      throw new Error("Os atributos nome, idade e especie são obrigatórios.");
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
  const meuAnimal = new Animal("Fido", 3, "cachorro");
  const atributos = meuAnimal.mostrarAtributos();

  // Imprimindo os atributos
  console.log(atributos.nome);
  console.log(atributos.idade);
  console.log(atributos.especie);
} catch (error) {
  console.error(error.message);
}
 

