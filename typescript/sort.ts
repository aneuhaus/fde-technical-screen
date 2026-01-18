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
    let isBulky = false;
    if (volume >= 1000000) {
        isBulky = true;
    } else if (width >= 150) {
        isBulky = true;
    } else if (height >= 150) {
        isBulky = true;
    } else if (length >= 150) {
        isBulky = true;
    }

    // Determine if the package is heavy
    // Heavy if mass >= 20 kg
    let isHeavy = false;
    if (mass >= 20) {
        isHeavy = true;
    }

    // Dispatch to the correct stack
    // NO ternary operators allowed by instructions
    if (isBulky && isHeavy) {
        return 'REJECTED';
    }

    if (isBulky || isHeavy) {
        return 'SPECIAL';
    }

    return 'STANDARD';
}
