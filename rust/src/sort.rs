/// Sorts packages into stacks based on their dimensions and mass.
///
/// # Arguments
///
/// * `width` - The width of the package in cm.
/// * `height` - The height of the package in cm.
/// * `length` - The length of the package in cm.
/// * `mass` - The mass of the package in kg.
///
/// # Returns
///
/// A String containing the name of the stack ('STANDARD', 'SPECIAL', or 'REJECTED').
pub fn sort(width: f64, height: f64, length: f64, mass: f64) -> String {
    // Calculate volume
    let volume = width * height * length;

    // Determine if the package is bulky
    // Bulky if volume >= 1,000,000 cm³ OR any dimension >= 150 cm
    let mut is_bulky = false;
    if volume >= 1_000_000.0 {
        is_bulky = true;
    } else if width >= 150.0 {
        is_bulky = true;
    } else if height >= 150.0 {
        is_bulky = true;
    } else if length >= 150.0 {
        is_bulky = true;
    }

    // Determine if the package is heavy
    // Heavy if mass >= 20 kg
    let mut is_heavy = false;
    if mass >= 20.0 {
        is_heavy = true;
    }

    // Dispatch to the correct stack
    // NO ternary operators allowed by instructions
    if is_bulky && is_heavy {
        return String::from("REJECTED");
    }

    if is_bulky || is_heavy {
        return String::from("SPECIAL");
    }

    String::from("STANDARD")
}
