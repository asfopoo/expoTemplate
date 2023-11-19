export type UserAction =
  | { type: 'GET_USER'; user: User }
  | { type: 'UPDATE_USER'; user: User }
  | { type: 'CLEAR_USER' };

export type UserContextType = {
  getUser: () => Promise<User>;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};
