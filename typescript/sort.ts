export type Stack = 'STANDARD' | 'SPECIAL' | 'REJECTED';

/**
 * Sorts packages into stacks based on their dimensions and mass.
 * 
 * @param width - The width of the package in cm.
 * @param height - The height of the package in cm.
 * @param length - The length of the package in cm.
 * @param mass - The mass of the package in kg.
 * @returns The name of the stack ('STANDARD', 'SPECIAL', or 'REJECTED').
 */
export function sort(width: number, height: number, length: number, mass: number): Stack {
  // Calculate volume
  const volume = width * height * length;

  // Determine if the package is bulky
  // Bulky if volume >= 1,000,000 cm³ OR any dimension >= 150 cm

  const isBulky = volume >= 1000000 || width >= 150 || height >= 150 || length >= 150;

  // Determine if the package is heavy
  // Heavy if mass >= 20 kg
  const isHeavy = mass >= 20;

  // Dispatch to the correct stack

  return isBulky && isHeavy ? 'REJECTED' : isBulky || isHeavy ? 'SPECIAL' : 'STANDARD';
}
