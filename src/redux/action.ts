export const INCREASE = 'INCREASE';
export function increase(num = 1) {
  console.log(num, arguments);
  return { type: INCREASE, num };
}
