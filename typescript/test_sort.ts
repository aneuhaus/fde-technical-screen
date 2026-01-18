import { sort } from './sort';
import * as assert from 'assert';

console.log('Running tests...');

function testSort() {
    // Test Case 1: Standard package
    // Volume: 100*100*50 = 500,000 (< 1,000,000)
    // Dimensions: all < 150
    // Mass: 10 (< 20)
    assert.strictEqual(sort(100, 100, 50, 10), 'STANDARD', 'Test Case 1 Failed: Should be STANDARD');

    // Test Case 2: Bulky package (by volume)
    // Volume: 100*100*100 = 1,000,000 (>= 1,000,000)
    // Mass: 10 (< 20)
    assert.strictEqual(sort(100, 100, 100, 10), 'SPECIAL', 'Test Case 2 Failed: Should be SPECIAL (bulky by volume)');

    // Test Case 3: Bulky package (by dimension)
    // Volume: 150*10*10 = 15,000 (< 1,000,000)
    // Dimension: 150 (>= 150)
    // Mass: 10 (< 20)
    assert.strictEqual(sort(150, 10, 10, 10), 'SPECIAL', 'Test Case 3 Failed: Should be SPECIAL (bulky by dimension)');

    // Test Case 4: Heavy package
    // Volume: 10*10*10 = 1,000 (< 1,000,000)
    // Mass: 20 (>= 20)
    assert.strictEqual(sort(10, 10, 10, 20), 'SPECIAL', 'Test Case 4 Failed: Should be SPECIAL (heavy)');

    // Test Case 5: Rejected package (Bulky and Heavy)
    // Volume: 100*100*100 = 1,000,000 (>= 1,000,000)
    // Mass: 20 (>= 20)
    assert.strictEqual(sort(100, 100, 100, 20), 'REJECTED', 'Test Case 5 Failed: Should be REJECTED');

    // Test Case 6: Edge case - exactly bulky threshold
    assert.strictEqual(sort(1000, 10, 100, 10), 'SPECIAL', 'Test Case 6 Failed: Edge case should be SPECIAL');

    console.log('All tests passed!');
}

try {
    testSort();
} catch (e) {
    console.error('Tests failed:', e);
    process.exit(1);
}
