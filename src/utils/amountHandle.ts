export const formatNumber = (value: string) => {
  if (!value) return '';
  const number = value.replace(/\D/g, '');
  return number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const parseNumber = (value: string) => {
  return value.replace(/,/g, '');
};
