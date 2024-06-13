import { Achievable } from './achievable';

export interface Goal {
  _id: number;
  name: string;
  specific: string; //objetivo que a meta vai atender
  timely: string; //prazo até a conclusão
  relevant: string; //qual importancia dela
  smallGoals?: Achievable[]; //quebra-la em metas alcançaveis
  measurable: string; //mensurar o progresso da meta
}
