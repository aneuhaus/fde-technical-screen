#!/bin/bash
set -e

check_dependencies() {
    if ! command -v python3 &> /dev/null; then
        echo "Python3 is not installed"
        exit 1
    fi
    if ! command -v cargo &> /dev/null; then
        echo "Cargo is not installed"
        exit 1
    fi
    if ! command -v node &> /dev/null; then
        echo "node is not installed"
        exit 1
    fi
    if ! command -v npx &> /dev/null; then
        echo "npx is not installed"
        exit 1
    fi
}

check_dependencies

BOLD="\033[1m"
YELLOW="\033[33m"
RESET="\033[0m"

echo ""
echo "${BOLD}  Running all tests...${RESET}"
echo ""

echo "  ${YELLOW}Python tests...${RESET}"
echo ""
python3 python/tests/test_sort.py
echo "--------------------------------------------------------------------------------"

echo "  ${YELLOW}Rust tests...${RESET}"
echo ""
(cd rust && cargo test)
echo "--------------------------------------------------------------------------------"

echo "  ${YELLOW}TypeScript tests...${RESET}"
echo ""
npx -y tsx typescript/tests/test_sort.ts
