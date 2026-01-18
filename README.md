# Thoughtful Robotic Automation Challenge

This repository contains multi-language solutions (Python, TypeScript, Rust) for Thoughtful's robotic automation factory sorting challenge.

## Challenge Objective

The objective is to write a function that dispatches packages to the correct stack according to their volume and mass. Read full challenge description in `challenge.md`.

### Rules

1. **Bulky**: Volume (Width x Height x Length) $\ge$ 1,000,000 cm³ OR any dimension $\ge$ 150 cm.
2. **Heavy**: Mass $\ge$ 20 kg.

### Stacks

- **STANDARD**: Not bulky or heavy.
- **SPECIAL**: Either bulky or heavy.
- **REJECTED**: Both bulky and heavy.

## Project Structure

```
.
├── python/
│   ├── sort.py             # Implementation
│   └── tests/
│       └── test_sort.py    # Tests
├── typescript/
│   ├── sort.ts             # Implementation
│   └── tests/
│       └── test_sort.ts    # Tests
└── rust/
    ├── src/
    │   └── sort.rs         # Implementation
    └── tests/
        └── test_sort.rs    # Integration tests
```

## How to Run Tests

### Python
Requires Python 3.x.
```bash
python3 python/tests/test_sort.py
```

### TypeScript
Requires Node.js.
```bash
npx -y tsx typescript/tests/test_sort.ts
```

### Rust
Requires Cargo.
```bash
cd rust && cargo test
```
