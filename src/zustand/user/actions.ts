import { User } from './createSlice';
import { useBoundStore } from '../store';

export function setUser(user: User) {
  return useBoundStore.setState(() => ({ user }));
}

export function removeUser() {
  return useBoundStore.setState(() => ({ user: undefined }));
}
