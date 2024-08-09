import { useBoundStore } from '../store';

export function selectEntrantCount() {
  return useBoundStore.getState().entrantCount;
}
