import { EntrantCount } from './createSlice';
import { useBoundStore } from '../store';

export function setEntrantCount(entrantCount: EntrantCount) {
  useBoundStore.setState(() => ({ entrantCount }));
}
