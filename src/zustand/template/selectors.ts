// Template to create a new selector
import { useBoundStore } from '../store';

export function selector() {
  // get some state here
  return useBoundStore.getState();
}
