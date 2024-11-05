/**
 * Formats a number to Brazilian Real currency format.
 *
 * @param amount - The number to format.
 * @returns The formatted currency string.
 */
const formatCurrency = (amount: number): string => {
  // Round the amount to 2 decimal places
  const roundedAmount = Math.round(amount * 100) / 100;

  // Convert to string and split into integer and decimal parts
  const parts = roundedAmount.toString().split('.');

  // Format the integer part with thousands separator
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Format the decimal part with two digits, if necessary
  const decimalPart = (parts[1] || '00').padEnd(2, '0').slice(0, 2);

  return `R$ ${integerPart},${decimalPart}`;
};

export default formatCurrency;
