class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    if (!estudante || !cosplay || !nota_cosplay) {
      throw new Error("Preencha todos os campos obrigatórios.");
    }

    this.estudante = estudante;
    this.cosplay = cosplay;
    this.nota_cosplay = nota_cosplay;
  }

  retornarAtributos() {
    return this.atributos();
  }

  atributos() {
    return {
      estudante: this.estudante,
      cosplay: this.cosplay,
      nota_cosplay: this.nota_cosplay
    };
  }
}

try {
  const aluno = new NerdIF("", "Garnet", 9.5);
  const atributos = aluno.retornarAtributos();

  console.log(atributos.estudante);
  console.log(atributos.cosplay);
  console.log(atributos.nota_cosplay);
} catch (error) {
   console.error(error.name);
  console.error(error.message);
   console.error(error.stack);
}

