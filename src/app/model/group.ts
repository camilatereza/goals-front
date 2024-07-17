import { Category } from './category';
import { Goal } from './goal';

export interface Group {
  id: number;
  name: string;
  favorite?: boolean;
  description?: string;
  category: Category; //areas da vida que as metas vão relacionar
  color: string; //customizar e diferenciar com cores futuramente com imagend também
  goals?: Goal[]; //todas as metas presentes no grupo
}
