use sort_challenge::sort::sort;

#[test]
fn test_standard_package() {
    // Volume: 100*100*50 = 500,000 (< 1,000,000)
    // Dimensions: all < 150
    // Mass: 10 (< 20)
    assert_eq!(sort(100.0, 100.0, 50.0, 10.0), "STANDARD");
}

#[test]
fn test_bulky_package_by_volume() {
    // Volume: 100*100*100 = 1,000,000 (>= 1,000,000)
    // Mass: 10 (< 20)
    assert_eq!(sort(100.0, 100.0, 100.0, 10.0), "SPECIAL");
}

#[test]
fn test_bulky_package_by_dimension() {
    // Volume: 150*10*10 = 15,000 (< 1,000,000)
    // Dimension: 150 (>= 150)
    // Mass: 10 (< 20)
    assert_eq!(sort(150.0, 10.0, 10.0, 10.0), "SPECIAL");
}

#[test]
fn test_heavy_package() {
    // Volume: 10*10*10 = 1,000 (< 1,000,000)
    // Mass: 20 (>= 20)
    assert_eq!(sort(10.0, 10.0, 10.0, 20.0), "SPECIAL");
}

#[test]
fn test_rejected_package() {
    // Volume: 100*100*100 = 1,000,000 (>= 1,000,000)
    // Mass: 20 (>= 20)
    assert_eq!(sort(100.0, 100.0, 100.0, 20.0), "REJECTED");
}

#[test]
fn test_edge_case_exactly_bulky() {
    // 1,000 x 10 x 100 = 1,000,000
    assert_eq!(sort(1000.0, 10.0, 100.0, 10.0), "SPECIAL");
}
