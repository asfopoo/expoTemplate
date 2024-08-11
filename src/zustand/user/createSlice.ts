export type User = {
  id: string;
  fullName: string;
  email: string;
  password: string;
  role: string;
};

export type UserSlice = {
  user: User | undefined;
};

export const createUserSlice = () => ({
  user: undefined,
});
