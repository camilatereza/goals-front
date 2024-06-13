import { Goal } from './goal';

export interface Group {
  _id: number;
  name: string;
  category: string; //areas da vida que as metas vão relacionar
  color: string; //customizar e diferenciar com cores futuramente com imagend também
  goals?: Goal[]; //todas as metas presentes no grupo
}
