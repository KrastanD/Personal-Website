export const milisecondsToYears = (ms: number): number => {
  return Math.floor(ms / 1000 / 60 / 60 / 24 / 365);
};

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * array.length);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
