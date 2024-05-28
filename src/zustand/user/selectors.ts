import { useBoundStore } from '../store';

export function useSelectUser() {
  return useBoundStore((state) => state.user);
}
