export type User = {
  id: string;
  first_name: string; // todo change to camel
  last_name: string;
  email: string;
  password: string;
  role: string;
};

export type UserState = {
  user: User | undefined;
};

export const createUserSlice = () => ({
  user: undefined,
});
