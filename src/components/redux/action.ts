export const INCREASE = 'INCREASE';
export const SUBTRACTION = 'SUBTRACTION';

export function add() {
  return { type: INCREASE };
}

export function back() {
  return { type: SUBTRACTION };
}
