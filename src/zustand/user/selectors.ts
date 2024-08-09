import { useBoundStore } from '../store';

export function selectUser() {
  return useBoundStore.getState().user;
}
