export const dateStringToDate = (dateString: string): Date => {
  const datePart = dateString.split('/').map((value: string): number => {
    return parseInt(value);
  });

  return new Date(datePart[2], datePart[1] - 1, datePart[0]);
};
