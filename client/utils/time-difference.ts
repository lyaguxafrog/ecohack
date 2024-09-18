export const getTimeDifference = (futureTime?: Date): number | null => {
  const now = new Date();

  if (!futureTime) {
    return null;
  }

  return Math.abs(futureTime.getTime() - now.getTime());
};
