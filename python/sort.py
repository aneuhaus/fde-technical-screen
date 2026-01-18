def sort(width, height, length, mass):
    """
    Sorts packages into stacks based on their dimensions and mass.
    
    Args:
        width (float): The width of the package in cm.
        height (float): The height of the package in cm.
        length (float): The length of the package in cm.
        mass (float): The mass of the package in kg.
        
    Returns:
        str: The name of the stack ('STANDARD', 'SPECIAL', or 'REJECTED').
    """
    
    # Calculate volume
    volume = width * height * length
    
    # Determine if the package is bulky
    # Bulky if volume >= 1,000,000 cm³ OR any dimension >= 150 cm
    is_bulky = volume >= 1000000 or width >= 150 or height >= 150 or length >= 150
    
    # Determine if the package is heavy
    # Heavy if mass >= 20 kg
    is_heavy = mass >= 20
    
    # Dispatch to the correct stack
    if is_bulky and is_heavy:
        return "REJECTED"
    
    if is_bulky or is_heavy:
        return "SPECIAL"
        
    return "STANDARD"
