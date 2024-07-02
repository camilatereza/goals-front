export interface Smart {
  id: number;
  letter: string; //letra referencia da sigla
  translate: string; //significado em português
  description: string; //descrição de como usar e para que serve
  key: string; //palavra chave da sigla
}

export interface Area {
  id: number;
  name: string; //nome de uma das áreas
  description: string; // descrição do que a área abrange
  advantage: string; //pq é importante priorizar essa área
  subarea?: boolean; // se for true é uma subarea que pertence a uma grande area
  groupArea?: number; //id referencia qual area a subarea pertence
}
