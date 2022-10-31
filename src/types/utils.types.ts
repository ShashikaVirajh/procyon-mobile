export type WholeDecimal = {
  wholeNumber: number;
  decimalNumber: number;
};

export type TAppAlert = {
  title?: string;
  message?: string;
  cancelable?: boolean;
  postiveText?: string;
  negativeText?: string;
  postiveFunc?: () => void;
};
