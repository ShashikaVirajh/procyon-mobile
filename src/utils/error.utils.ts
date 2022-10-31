import { TCustomError } from '@type/error.types';

export const transformErrorMessage = (error: any): TCustomError => {
  const errorMessage = error?.response?.data?.msg || error?.message;
  return { errorMessage: errorMessage || 'Error Occured' };
};
