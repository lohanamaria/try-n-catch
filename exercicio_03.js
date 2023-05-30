class NerdIF {
  constructor(estudante, cosplay, nota_cosplay) {
    if (!estudante || !cosplay || !nota_cosplay) {
      throw new Error("Os atributos estudante, cosplay e nota_cosplay são obrigatórios.");
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
  const aluno = new NerdIF("João", "Homem-Aranha", 9.5);
  const atributos = aluno.retornarAtributos();

  console.log(atributos.estudante);
  console.log(atributos.cosplay);
  console.log(atributos.nota_cosplay);
} catch (error) {
  console.error(error.message);
}

