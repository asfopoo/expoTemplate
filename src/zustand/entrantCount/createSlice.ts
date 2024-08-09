export type EntrantCount = number;

export type EntrantCountSlice = {
  entrantCount: EntrantCount;
};

export const createEntrantCountSlice = () => ({
  entrantCount: 0,
});
