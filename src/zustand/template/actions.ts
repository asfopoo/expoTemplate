// Template to create a new action
import { useBoundStore } from '../store';

export function setter() {
  useBoundStore.setState(() => ({}));
}
