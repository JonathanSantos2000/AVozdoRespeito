interface Extra {
  TipoExtra: string; // Tipo do extra
  TituloExtra: string; // Título descritivo do extra
  link: string; // URL ou referência
}

export interface RespostaAutor {
  idAutor: string; // Identificador único do autor (opcional)
  Tipo: string; // Tipo da resposta: Audio, Video, Texto
  nomeAutor: string; // Nome do autor da resposta
  resposta: string; // Conteúdo da resposta
  extras: Extra[]; // Lista de extras relacionados à resposta
}

interface FAQ {
  respostasAutor: RespostaAutor[]; // Lista de respostas por autor
}

export class Question {
  id!: string; // Identificador único da pergunta
  Titulo!: string; // Título ou enunciado da pergunta
  categoria!: string; // Categoria ou tipo do FAQ (opcional)
  faq!: FAQ; // Lista de FAQs relacionadas à pergunta
}
