import { sort } from '../sort';
import * as assert from 'assert';

console.log('Running tests...');

const testCases = [
    { name: 'test_standard_package', args: [100, 100, 50, 10], expected: 'STANDARD' },
    { name: 'test_bulky_package_by_volume', args: [100, 100, 100, 10], expected: 'SPECIAL' },
    { name: 'test_bulky_package_by_dimension', args: [150, 10, 10, 10], expected: 'SPECIAL' },
    { name: 'test_heavy_package', args: [10, 10, 10, 20], expected: 'SPECIAL' },
    { name: 'test_rejected_package', args: [100, 100, 100, 20], expected: 'REJECTED' },
    { name: 'test_edge_case_exactly_bulky', args: [1000, 10, 100, 10], expected: 'SPECIAL' },
];

let passed = 0;
let failed = 0;

for (const { name, args, expected } of testCases) {
    try {
        // @ts-ignore
        const actual = sort(...args);
        assert.strictEqual(actual, expected);
        console.log(`test ${name} ... ok`);
        passed++;
    } catch (e: any) {
        console.log(`test ${name} ... FAILED`);
        console.error(e.message);
        failed++;
    }
}

console.log(`\ntest result: ${failed === 0 ? 'ok' : 'FAILED'}. ${passed} passed; ${failed} failed;`);

if (failed > 0) {
    process.exit(1);
}
