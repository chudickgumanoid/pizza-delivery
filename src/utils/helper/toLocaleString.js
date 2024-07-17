/**
 * Преобразует число в строку с форматированием по российским правилам.
 * @param {number} number - Число для форматирования.
 * @param {boolean} format - Флаг форматирования.
 * @returns {string} Строковое представление числа с форматированием.
 */
export const toLocaleString = (number, format = true) => {
  if (number) {
    number = number
      .toLocaleString("ru", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })
      .replace(",", ".");

    if (!/\.\d+/.test(number)) {
      number = number + ".00";
    }
    return format ? number.replace(".00", "") : number;
  }

  return "0.00";
};
