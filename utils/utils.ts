export const getRandomValue = (max: number, min = 0): number => {
  return Math.floor(min + Math.random() * (1 + max - min));
};
