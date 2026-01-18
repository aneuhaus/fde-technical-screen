import unittest
import sys
import os

# Add parent directory to path to allow importing sort.py
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from sort import sort

class TestSort(unittest.TestCase):
    def test_standard_package(self):
        # Volume: 100*100*50 = 500,000 (< 1,000,000)
        # Dimensions: all < 150
        # Mass: 10 (< 20)
        self.assertEqual(sort(100, 100, 50, 10), "STANDARD")

    def test_bulky_package_by_volume(self):
        # Volume: 100*100*100 = 1,000,000 (>= 1,000,000)
        # Mass: 10 (< 20)
        self.assertEqual(sort(100, 100, 100, 10), "SPECIAL")

    def test_bulky_package_by_dimension(self):
        # Volume: 150*10*10 = 15,000 (< 1,000,000)
        # Dimension: 150 (>= 150)
        # Mass: 10 (< 20)
        self.assertEqual(sort(150, 10, 10, 10), "SPECIAL")

    def test_heavy_package(self):
        # Volume: 10*10*10 = 1,000 (< 1,000,000)
        # Mass: 20 (>= 20)
        self.assertEqual(sort(10, 10, 10, 20), "SPECIAL")

    def test_rejected_package(self):
        # Volume: 100*100*100 = 1,000,000 (>= 1,000,000)
        # Mass: 20 (>= 20)
        self.assertEqual(sort(100, 100, 100, 20), "REJECTED")

    def test_edge_case_exactly_bulky(self):
        # 1,000 x 10 x 100 = 1,000,000
        self.assertEqual(sort(1000, 10, 100, 10), "SPECIAL")

if __name__ == "__main__":
    unittest.main(verbosity=2)
