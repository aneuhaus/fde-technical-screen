# Thoughtful Robotic Automation Challenge

This repository contains multi-language solutions (Python, TypeScript, Rust) for Thoughtful's robotic automation factory sorting challenge.

## Challenge Objective

The objective is to write a function that dispatches packages to the correct stack according to their volume and mass. Read full challenge description in [`challenge.md`](challenge.md).

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
│   ├── sort.py             
│   └── tests/
│       └── test_sort.py
├── typescript/
│   ├── sort.ts             
│   └── tests/
│       └── test_sort.ts
└── rust/
    ├── src/
    │   └── sort.rs         
    └── tests/
```
        
## How to Run Tests

### Run Python, Rust, and Typescript tests at once
```bash
sh all_tests.sh
```

## Requirements

Python 3.x, Node.js, and Cargo.
Requirements are checked by `all_tests.sh`.
