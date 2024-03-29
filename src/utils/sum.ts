export const sum = (a: number, b: number): number => {
  return a + b;
};

export const sums = (...args: number[]): number => {
  return args.reduce((prev, current) => prev + current, 0);
};
