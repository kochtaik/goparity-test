/**
 * @param min inclusive
 * @param max inclusive
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
