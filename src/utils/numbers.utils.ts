import { WholeDecimal } from '@type/utils.types';

/** Split a number in to whole number and decimal number */
export const splitToWholeAndDecimal = (value: number): WholeDecimal => {
  const splitted = value.toString().split('.');
  const wholeNumber = Number(splitted[0]);
  const decimalNumber = Number(splitted[1]);

  return { wholeNumber, decimalNumber };
};

/** Create a number array from a given number */
export const createArrayFromNumber = (number: number = 0, fromZero: boolean = false): number[] => {
  const numberArray = Array.from({ length: number }, (_, index) => {
    return fromZero ? index : index + 1;
  });

  return numberArray;
};

export const isArray = (array: any): boolean => Array.isArray(array);

export const isFirstArrayItem = (index: number): boolean => {
  return index === 0;
};

export const isLastArrayItem = (index: number, array: any[]): boolean => {
  if (!isArray(array)) return false;

  return index === array?.length - 1;
};

export const getNameInitials = (value: string): string => {
  if (value === '' && typeof value !== 'string') return '';

  const [firstName, lastName] = value.trim().split(' ');
  return lastName ? firstName[0] + lastName[0] : firstName[0];
};
