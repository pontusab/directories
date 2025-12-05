export const formatNumber = (num: number) => {
  if (num >= 1000000) {
    let str = (num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1);
    if (str.endsWith(".0")) str = str.slice(0, -2);
    return `${str}M`;
  }
  if (num >= 1000) {
    let str = (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1);
    if (str.endsWith(".0")) str = str.slice(0, -2);
    return `${str}k`;
  }
  return num.toString();
};
