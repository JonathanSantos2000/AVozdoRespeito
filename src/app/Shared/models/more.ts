export class KnowMore {
  id!: string;
  titulo!: string;
  img!: string;
  resumo!: string;
  conteudoCompleto!: conteudoCompleto[];
  referencia!: string;
  link!: string;
}

interface conteudoCompleto {
  conteudo: string;
}
