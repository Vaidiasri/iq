import type { Problem } from "../types";

export const PROBLEMS: Record<string, Problem> = {
  "two-sum": {
    "id": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      "notes": [
        "You may assume that each input would have exactly one solution.",
        "You may not use the same element twice."
      ]
    },
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      }
    ],
    "constraints": [
      "2 ≤ nums.length ≤ 10^4",
      "-10^9 ≤ nums[i] ≤ 10^9"
    ],
    "starterCode": {
      "javascript": "function twoSum(nums, target) {\n  // Write your solution here\n  \n}",
      "python": "def twoSum(nums, target):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your solution here\n        return new int[0];\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "[0,1]\n[1,2]",
      "python": "[0, 1]\n[1, 2]",
      "java": "[0, 1]\n[1, 2]"
    }
  },
  "problem-1": {
    "id": "problem-1",
    "title": "Two Sum",
    "difficulty": "Easy",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      "notes": [
        "Given an array of integers nums and an integer target, return indices of the two numbers such that t... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        "input": "nums = [3,2,4], target = 6",
        "output": "[1,2]"
      },
      {
        "input": "nums = [3,3], target = 6",
        "output": "[0,1]"
      }
    ],
    "constraints": [
      "2 <= nums.length <= 104",
      "109 <= nums[i] <= 109"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-2": {
    "id": "problem-2",
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "category": "Linked List • Math",
    "description": {
      "text": "You are given two non-empty linked lists representing two non-negative integers.",
      "notes": [
        "You are given two non-empty linked lists representing two non-negative integers. The digits are stor... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "l1 = [2,4,3], l2 = [5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342 + 465 = 807."
      },
      {
        "input": "l1 = [0], l2 = [0]",
        "output": "[0]"
      },
      {
        "input": "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        "output": "[8,9,9,9,0,0,0,1]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-3": {
    "id": "problem-3",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "category": "Hash Table • String",
    "description": {
      "text": "Given a string s, find the length of the longest substring without duplicate characters.",
      "notes": [
        "Given a string s, find the length of the longest substring without duplicate characters. Example 1: ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "The answer is \"abc\", with the length of 3. Note that \"bca\" and \"cab\" are also correct answers."
      },
      {
        "input": "s = \"bbbbb\"",
        "output": "1",
        "explanation": "The answer is \"b\", with the length of 1."
      },
      {
        "input": "s = \"pwwkew\"",
        "output": "3",
        "explanation": "The answer is \"wke\", with the length of 3. Notice that the answer must be a substring, \"pwke\" is a subsequence and not a substring."
      }
    ],
    "constraints": [
      "0 <= s.length <= 5 * 104 s consists of English letters, digits, symbols and spaces."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-4": {
    "id": "problem-4",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "category": "Array • Binary Search",
    "description": {
      "text": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      "notes": [
        "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two s... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "explanation": "merged array = [1,2,3] and median is 2."
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000",
        "explanation": "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5."
      }
    ],
    "constraints": [
      "nums1.length == m nums2.length == n 0 <= m <= 1000 0 <= n <= 1000 1 <= m + n <= 2000",
      "106 <= nums1[i], nums2[i] <= 106"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-5": {
    "id": "problem-5",
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "category": "Two Pointers • String",
    "description": {
      "text": "Given a string s, return the longest palindromic substring in s.",
      "notes": [
        "Given a string s, return the longest palindromic substring in s. Example 1: Input: s = \"babad\" Outpu... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "\"aba\" is also a valid answer."
      },
      {
        "input": "s = \"cbbd\"",
        "output": "\"bb\""
      }
    ],
    "constraints": [
      "1 <= s.length <= 1000 s consist of only digits and English letters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-6": {
    "id": "problem-6",
    "title": "Zigzag Conversion",
    "difficulty": "Medium",
    "category": "String",
    "description": {
      "text": "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility) P A H N A P L S I I G Y I R And then read line by line: \"PAHNAPLSIIGYIR\" Write the code that will take a string and make this c...",
      "notes": [
        "The string \"PAYPALISHIRING\" is written in a zigzag pattern on a given number of rows like this: (you... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"PAYPALISHIRING\", numRows = 3",
        "output": "\"PAHNAPLSIIGYIR\""
      },
      {
        "input": "s = \"PAYPALISHIRING\", numRows = 4",
        "output": "\"PINALSIGYAHRPI\"",
        "explanation": "P I N A L S I G Y A H R P I"
      },
      {
        "input": "s = \"A\", numRows = 1",
        "output": "\"A\""
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-7": {
    "id": "problem-7",
    "title": "Reverse Integer",
    "difficulty": "Medium",
    "category": "Math",
    "description": {
      "text": "Given a signed 32-bit integer x, return x with its digits reversed.",
      "notes": [
        "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "x = 123",
        "output": "321"
      },
      {
        "input": "x = -123",
        "output": "-321"
      },
      {
        "input": "x = 120",
        "output": "21"
      }
    ],
    "constraints": [
      "-231 <= x <= 231",
      "1"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-8": {
    "id": "problem-8",
    "title": "String to Integer (atoi)",
    "difficulty": "Medium",
    "category": "String",
    "description": {
      "text": "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
      "notes": [
        "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer. The alg... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"42\"",
        "output": "42",
        "explanation": "The underlined characters are what is read in and the caret is the current reader position. Step 1: \"42\" (no characters read because there is no leading whitespace) ^ Step 2: \"42\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \"42\" (\"42\" is read in) ^"
      },
      {
        "input": "s = \" -042\"",
        "output": "-42",
        "explanation": "Step 1: \" -042\" (leading whitespace is read and ignored) ^ Step 2: \" -042\" ('-' is read, so the result should be negative) ^ Step 3: \" -042\" (\"042\" is read in, leading zeros ignored in the result) ^"
      },
      {
        "input": "s = \"1337c0d3\"",
        "output": "1337",
        "explanation": "Step 1: \"1337c0d3\" (no characters read because there is no leading whitespace) ^ Step 2: \"1337c0d3\" (no characters read because there is neither a '-' nor '+') ^ Step 3: \"1337c0d3\" (\"1337\" is read in; reading stops because the next character is a non-digit) ^"
      }
    ],
    "constraints": [
      "0 <= s.length <= 200 s consists of English letters (lower-case and upper-case), digits (0",
      "9), ' ', '+', '-', and '.'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-9": {
    "id": "problem-9",
    "title": "Palindrome Number",
    "difficulty": "Easy",
    "category": "Math",
    "description": {
      "text": "Given an integer x, return true if x is a palindrome, and false otherwise.",
      "notes": [
        "Given an integer x, return true if x is a palindrome, and false otherwise. Example 1: Input: x = 121... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "x = 121",
        "output": "true",
        "explanation": "121 reads as 121 from left to right and from right to left."
      },
      {
        "input": "x = -121",
        "output": "false",
        "explanation": "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      },
      {
        "input": "x = 10",
        "output": "false",
        "explanation": "Reads 01 from right to left. Therefore it is not a palindrome."
      }
    ],
    "constraints": [
      "-231 <= x <= 231",
      "1 Follow up: Could you solve it without converting the integer to a string?"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-10": {
    "id": "problem-10",
    "title": "Regular Expression Matching",
    "difficulty": "Hard",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given an input string s and a pattern p, implement regular expression matching with support for '.",
      "notes": [
        "Given an input string s and a pattern p, implement regular expression matching with support for '.' ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"aa\", p = \"a\"",
        "output": "false",
        "explanation": "\"a\" does not match the entire string \"aa\"."
      },
      {
        "input": "s = \"aa\", p = \"a*\"",
        "output": "true",
        "explanation": "'*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes \"aa\"."
      },
      {
        "input": "s = \"ab\", p = \".*\"",
        "output": "true",
        "explanation": "\".*\" means \"zero or more (*) of any character (.)\"."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-11": {
    "id": "problem-11",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "You are given an integer array height of length n.",
      "notes": [
        "You are given an integer array height of length n. There are n vertical lines drawn such that the tw... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "height = [1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": "The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49."
      },
      {
        "input": "height = [1,1]",
        "output": "1"
      }
    ],
    "constraints": [
      "n == height.length 2 <= n <= 105 0 <= height[i] <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-12": {
    "id": "problem-12",
    "title": "Integer to Roman",
    "difficulty": "Medium",
    "category": "Hash Table • Math",
    "description": {
      "text": "Seven different symbols represent Roman numerals with the following values: Symbol Value I 1 V 5 X 10 L 50 C 100 D 500 M 1000 Roman numerals are formed by appending the conversions of decimal place values from highest to lowest.",
      "notes": [
        "Seven different symbols represent Roman numerals with the following values: Symbol Value I 1 V 5 X 1... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "num = 3749",
        "output": "\"MMMDCCXLIX\"",
        "explanation": "3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M) 700 = DCC as 500 (D) + 100 (C) + 100 (C) 40 = XL as 10 (X) less of 50 (L) 9 = IX as 1 (I) less of 10 (X) Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places"
      },
      {
        "input": "num = 58",
        "output": "\"LVIII\"",
        "explanation": "50 = L 8 = VIII"
      },
      {
        "input": "num = 1994",
        "output": "\"MCMXCIV\"",
        "explanation": "1000 = M 900 = CM 90 = XC 4 = IV"
      }
    ],
    "constraints": [
      "1 <= num <= 3999"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-13": {
    "id": "problem-13",
    "title": "Roman to Integer",
    "difficulty": "Easy",
    "category": "Hash Table • Math",
    "description": {
      "text": "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.",
      "notes": [
        "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Symbol Value I 1 ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"III\"",
        "output": "3",
        "explanation": "III = 3."
      },
      {
        "input": "s = \"LVIII\"",
        "output": "58",
        "explanation": "L = 50, V= 5, III = 3."
      },
      {
        "input": "s = \"MCMXCIV\"",
        "output": "1994",
        "explanation": "M = 1000, CM = 900, XC = 90 and IV = 4."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-14": {
    "id": "problem-14",
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "category": "Array • String",
    "description": {
      "text": "Write a function to find the longest common prefix string amongst an array of strings.",
      "notes": [
        "Write a function to find the longest common prefix string amongst an array of strings. If there is n... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "strs = [\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\""
      },
      {
        "input": "strs = [\"dog\",\"racecar\",\"car\"]",
        "output": "\"\"",
        "explanation": "There is no common prefix among the input strings."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-15": {
    "id": "problem-15",
    "title": "3Sum",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      "notes": [
        "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": "nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0. nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter."
      },
      {
        "input": "nums = [0,1,1]",
        "output": "[]",
        "explanation": "The only possible triplet does not sum up to 0."
      },
      {
        "input": "nums = [0,0,0]",
        "output": "[[0,0,0]]",
        "explanation": "The only possible triplet sums up to 0."
      }
    ],
    "constraints": [
      "3 <= nums.length <= 3000",
      "105 <= nums[i] <= 105"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-16": {
    "id": "problem-16",
    "title": "3Sum Closest",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.",
      "notes": [
        "Given an integer array nums of length n and an integer target, find three integers at distinct indic... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [-1,2,1,-4], target = 1",
        "output": "2",
        "explanation": "The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)."
      },
      {
        "input": "nums = [0,0,0], target = 1",
        "output": "0",
        "explanation": "The sum that is closest to the target is 0. (0 + 0 + 0 = 0)."
      }
    ],
    "constraints": [
      "3 <= nums.length <= 500",
      "1000 <= nums[i] <= 1000",
      "104 <= target <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-17": {
    "id": "problem-17",
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "category": "Hash Table • String",
    "description": {
      "text": "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.",
      "notes": [
        "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that th... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "digits = \"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]"
      },
      {
        "input": "digits = \"2\"",
        "output": "[\"a\",\"b\",\"c\"]"
      }
    ],
    "constraints": [
      "1 <= digits.length <= 4 digits[i] is a digit in the range ['2', '9']."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-18": {
    "id": "problem-18",
    "title": "4Sum",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that: 0 <= a, b, c, d < n a, b, c, and d are distinct.",
      "notes": [
        "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,0,-1,0,-2,2], target = 0",
        "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
      },
      {
        "input": "nums = [2,2,2,2,2], target = 8",
        "output": "[[2,2,2,2]]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 200",
      "109 <= nums[i] <= 109",
      "109 <= target <= 109"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-19": {
    "id": "problem-19",
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "category": "Linked List • Two Pointers",
    "description": {
      "text": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      "notes": [
        "Given the head of a linked list, remove the nth node from the end of the list and return its head. E... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,4,5], n = 2",
        "output": "[1,2,3,5]"
      },
      {
        "input": "head = [1], n = 1",
        "output": "[]"
      },
      {
        "input": "head = [1,2], n = 1",
        "output": "[1]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-20": {
    "id": "problem-20",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "category": "String • Stack",
    "description": {
      "text": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      "notes": [
        "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the in... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"()\"",
        "output": "true"
      },
      {
        "input": "s = \"()[]{}\"",
        "output": "true"
      },
      {
        "input": "s = \"(]\"",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= s.length <= 104 s consists of parentheses only '()[]{}'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-21": {
    "id": "problem-21",
    "title": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "category": "Linked List • Recursion",
    "description": {
      "text": "You are given the heads of two sorted linked lists list1 and list2.",
      "notes": [
        "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sor... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "list1 = [1,2,4], list2 = [1,3,4]",
        "output": "[1,1,2,3,4,4]"
      },
      {
        "input": "list1 = [], list2 = []",
        "output": "[]"
      },
      {
        "input": "list1 = [], list2 = [0]",
        "output": "[0]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-22": {
    "id": "problem-22",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
      "notes": [
        "Given n pairs of parentheses, write a function to generate all combinations of well-formed parenthes... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]"
      },
      {
        "input": "n = 1",
        "output": "[\"()\"]"
      }
    ],
    "constraints": [
      "1 <= n <= 8"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-23": {
    "id": "problem-23",
    "title": "Merge k Sorted Lists",
    "difficulty": "Hard",
    "category": "Linked List • Divide and Conquer",
    "description": {
      "text": "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.",
      "notes": [
        "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "lists = [[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": "The linked-lists are: [ 1->4->5, 1->3->4, 2->6 ] merging them into one sorted linked list: 1->1->2->3->4->4->5->6"
      },
      {
        "input": "lists = []",
        "output": "[]"
      },
      {
        "input": "lists = [[]]",
        "output": "[]"
      }
    ],
    "constraints": [
      "k == lists.length 0 <= k <= 104 0 <= lists[i].length <= 500"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-24": {
    "id": "problem-24",
    "title": "Swap Nodes in Pairs",
    "difficulty": "Medium",
    "category": "Linked List • Recursion",
    "description": {
      "text": "Given a linked list, swap every two adjacent nodes and return its head.",
      "notes": [
        "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem w... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[2,1,4,3]",
        "explanation": ""
      },
      {
        "input": "head = []",
        "output": "[]"
      },
      {
        "input": "head = [1]",
        "output": "[1]"
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [0, 100]. 0 <= Node.val <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-25": {
    "id": "problem-25",
    "title": "Reverse Nodes in k-Group",
    "difficulty": "Hard",
    "category": "Linked List • Recursion",
    "description": {
      "text": "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.",
      "notes": [
        "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[2,1,4,3,5]"
      },
      {
        "input": "head = [1,2,3,4,5], k = 3",
        "output": "[3,2,1,4,5]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-26": {
    "id": "problem-26",
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "Easy",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
      "notes": [
        "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,1,2]",
        "output": "2, nums = [1,2,_]",
        "explanation": "Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned k (hence they are underscores)."
      },
      {
        "input": "nums = [0,0,1,1,1,2,2,3,3,4]",
        "output": "5, nums = [0,1,2,3,4,_,_,_,_,_]",
        "explanation": "Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively. It does not matter what you leave beyond the returned k (hence they are underscores)."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 3 * 104",
      "100 <= nums[i] <= 100 nums is sorted in non-decreasing order."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-27": {
    "id": "problem-27",
    "title": "Remove Element",
    "difficulty": "Easy",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.",
      "notes": [
        "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [3,2,2,3], val = 3",
        "output": "2, nums = [2,2,_,_]",
        "explanation": "Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)."
      },
      {
        "input": "nums = [0,1,2,2,3,0,4,2], val = 2",
        "output": "5, nums = [0,1,4,0,3,_,_,_]",
        "explanation": "Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4. Note that the five elements can be returned in any order. It does not matter what you leave beyond the returned k (hence they are underscores)."
      }
    ],
    "constraints": [
      "0 <= nums.length <= 100 0 <= nums[i] <= 50 0 <= val <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-28": {
    "id": "problem-28",
    "title": "Find the Index of the First Occurrence in a String",
    "difficulty": "Easy",
    "category": "Two Pointers • String",
    "description": {
      "text": "Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
      "notes": [
        "Given two strings needle and haystack, return the index of the first occurrence of needle in haystac... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "haystack = \"sadbutsad\", needle = \"sad\"",
        "output": "0",
        "explanation": "\"sad\" occurs at index 0 and 6. The first occurrence is at index 0, so we return 0."
      },
      {
        "input": "haystack = \"leetcode\", needle = \"leeto\"",
        "output": "-1",
        "explanation": "\"leeto\" did not occur in \"leetcode\", so we return -1."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-29": {
    "id": "problem-29",
    "title": "Divide Two Integers",
    "difficulty": "Medium",
    "category": "Math • Bit Manipulation",
    "description": {
      "text": "Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.",
      "notes": [
        "Given two integers dividend and divisor, divide two integers without using multiplication, division,... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "dividend = 10, divisor = 3",
        "output": "3",
        "explanation": "10/3 = 3.33333.. which is truncated to 3."
      },
      {
        "input": "dividend = 7, divisor = -3",
        "output": "-2",
        "explanation": "7/-3 = -2.33333.. which is truncated to -2."
      }
    ],
    "constraints": [
      "-231 <= dividend, divisor <= 231",
      "1 divisor != 0"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-30": {
    "id": "problem-30",
    "title": "Substring with Concatenation of All Words",
    "difficulty": "Hard",
    "category": "Hash Table • String",
    "description": {
      "text": "You are given a string s and an array of strings words.",
      "notes": [
        "You are given a string s and an array of strings words. All the strings of words are of the same len... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"barfoothefoobarman\", words = [\"foo\",\"bar\"]",
        "output": "[0,9]",
        "explanation": "The substring starting at 0 is \"barfoo\". It is the concatenation of [\"bar\",\"foo\"] which is a permutation of words. The substring starting at 9 is \"foobar\". It is the concatenation of [\"foo\",\"bar\"] which is a permutation of words."
      },
      {
        "input": "s = \"wordgoodgoodgoodbestword\", words = [\"word\",\"good\",\"best\",\"word\"]",
        "output": "[]",
        "explanation": "There is no concatenated substring."
      },
      {
        "input": "s = \"barfoofoobarthefoobarman\", words = [\"bar\",\"foo\",\"the\"]",
        "output": "[6,9,12]",
        "explanation": "The substring starting at 6 is \"foobarthe\". It is the concatenation of [\"foo\",\"bar\",\"the\"]. The substring starting at 9 is \"barthefoo\". It is the concatenation of [\"bar\",\"the\",\"foo\"]. The substring starting at 12 is \"thefoobar\". It is the concatenation of [\"the\",\"foo\",\"bar\"]."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-31": {
    "id": "problem-31",
    "title": "Next Permutation",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "A permutation of an array of integers is an arrangement of its members into a sequence or linear order.",
      "notes": [
        "A permutation of an array of integers is an arrangement of its members into a sequence or linear ord... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[1,3,2]"
      },
      {
        "input": "nums = [3,2,1]",
        "output": "[1,2,3]"
      },
      {
        "input": "nums = [1,1,5]",
        "output": "[1,5,1]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 100 0 <= nums[i] <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-32": {
    "id": "problem-32",
    "title": "Longest Valid Parentheses",
    "difficulty": "Hard",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring.",
      "notes": [
        "Given a string containing just the characters '(' and ')', return the length of the longest valid (w... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"(()\"",
        "output": "2",
        "explanation": "The longest valid parentheses substring is \"()\"."
      },
      {
        "input": "s = \")()())\"",
        "output": "4",
        "explanation": "The longest valid parentheses substring is \"()()\"."
      },
      {
        "input": "s = \"\"",
        "output": "0"
      }
    ],
    "constraints": [
      "0 <= s.length <= 3 * 104 s[i] is '(', or ')'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-33": {
    "id": "problem-33",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "category": "Array • Binary Search",
    "description": {
      "text": "There is an integer array nums sorted in ascending order (with distinct values).",
      "notes": [
        "There is an integer array nums sorted in ascending order (with distinct values). Prior to being pass... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1"
      },
      {
        "input": "nums = [1], target = 0",
        "output": "-1"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-34": {
    "id": "problem-34",
    "title": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "Medium",
    "category": "Array • Binary Search",
    "description": {
      "text": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.",
      "notes": [
        "Given an array of integers nums sorted in non-decreasing order, find the starting and ending positio... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [5,7,7,8,8,10], target = 8",
        "output": "[3,4]"
      },
      {
        "input": "nums = [5,7,7,8,8,10], target = 6",
        "output": "[-1,-1]"
      },
      {
        "input": "nums = [], target = 0",
        "output": "[-1,-1]"
      }
    ],
    "constraints": [
      "0 <= nums.length <= 105",
      "109 <= nums[i] <= 109 nums is a non-decreasing array. -109 <= target <= 109"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-35": {
    "id": "problem-35",
    "title": "Search Insert Position",
    "difficulty": "Easy",
    "category": "Array • Binary Search",
    "description": {
      "text": "Given a sorted array of distinct integers and a target value, return the index if the target is found.",
      "notes": [
        "Given a sorted array of distinct integers and a target value, return the index if the target is foun... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,3,5,6], target = 5",
        "output": "2"
      },
      {
        "input": "nums = [1,3,5,6], target = 2",
        "output": "1"
      },
      {
        "input": "nums = [1,3,5,6], target = 7",
        "output": "4"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-36": {
    "id": "problem-36",
    "title": "Valid Sudoku",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Determine if a 9 x 9 Sudoku board is valid.",
      "notes": [
        "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "board = [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"] ,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"] ,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"] ,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"] ,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"] ,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"] ,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"] ,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"] ,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "true"
      },
      {
        "input": "board = [[\"8\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"] ,[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"] ,[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"] ,[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"] ,[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"] ,[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"] ,[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"] ,[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"] ,[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "false",
        "explanation": "Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid."
      }
    ],
    "constraints": [
      "board.length == 9 board[i].length == 9 board[i][j] is a digit 1",
      "9 or '.'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-37": {
    "id": "problem-37",
    "title": "Sudoku Solver",
    "difficulty": "Hard",
    "category": "Array • Hash Table",
    "description": {
      "text": "Write a program to solve a Sudoku puzzle by filling the empty cells.",
      "notes": [
        "Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "board = [[\"5\",\"3\",\".\",\".\",\"7\",\".\",\".\",\".\",\".\"],[\"6\",\".\",\".\",\"1\",\"9\",\"5\",\".\",\".\",\".\"],[\".\",\"9\",\"8\",\".\",\".\",\".\",\".\",\"6\",\".\"],[\"8\",\".\",\".\",\".\",\"6\",\".\",\".\",\".\",\"3\"],[\"4\",\".\",\".\",\"8\",\".\",\"3\",\".\",\".\",\"1\"],[\"7\",\".\",\".\",\".\",\"2\",\".\",\".\",\".\",\"6\"],[\".\",\"6\",\".\",\".\",\".\",\".\",\"2\",\"8\",\".\"],[\".\",\".\",\".\",\"4\",\"1\",\"9\",\".\",\".\",\"5\"],[\".\",\".\",\".\",\".\",\"8\",\".\",\".\",\"7\",\"9\"]]",
        "output": "[[\"5\",\"3\",\"4\",\"6\",\"7\",\"8\",\"9\",\"1\",\"2\"],[\"6\",\"7\",\"2\",\"1\",\"9\",\"5\",\"3\",\"4\",\"8\"],[\"1\",\"9\",\"8\",\"3\",\"4\",\"2\",\"5\",\"6\",\"7\"],[\"8\",\"5\",\"9\",\"7\",\"6\",\"1\",\"4\",\"2\",\"3\"],[\"4\",\"2\",\"6\",\"8\",\"5\",\"3\",\"7\",\"9\",\"1\"],[\"7\",\"1\",\"3\",\"9\",\"2\",\"4\",\"8\",\"5\",\"6\"],[\"9\",\"6\",\"1\",\"5\",\"3\",\"7\",\"2\",\"8\",\"4\"],[\"2\",\"8\",\"7\",\"4\",\"1\",\"9\",\"6\",\"3\",\"5\"],[\"3\",\"4\",\"5\",\"2\",\"8\",\"6\",\"1\",\"7\",\"9\"]]",
        "explanation": "The input board is shown above and the only valid solution is shown below:"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-38": {
    "id": "problem-38",
    "title": "Count and Say",
    "difficulty": "Medium",
    "category": "String",
    "description": {
      "text": "The count-and-say sequence is a sequence of digit strings defined by the recursive formula: countAndSay(1) = \"1\" countAndSay(n) is the run-length encoding of countAndSay(n - 1).",
      "notes": [
        "The count-and-say sequence is a sequence of digit strings defined by the recursive formula: countAnd... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 4",
        "output": "\"1211\"",
        "explanation": "countAndSay(1) = \"1\" countAndSay(2) = RLE of \"1\" = \"11\" countAndSay(3) = RLE of \"11\" = \"21\" countAndSay(4) = RLE of \"21\" = \"1211\""
      },
      {
        "input": "n = 1",
        "output": "\"1\"",
        "explanation": "This is the base case."
      }
    ],
    "constraints": [
      "1 <= n <= 30 Follow up: Could you solve it iteratively?"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-39": {
    "id": "problem-39",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "category": "Array • Backtracking",
    "description": {
      "text": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.",
      "notes": [
        "Given an array of distinct integers candidates and a target integer target, return a list of all uni... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "candidates = [2,3,6,7], target = 7",
        "output": "[[2,2,3],[7]]",
        "explanation": "2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times. 7 is a candidate, and 7 = 7. These are the only two combinations."
      },
      {
        "input": "candidates = [2,3,5], target = 8",
        "output": "[[2,2,2,2],[2,3,3],[3,5]]"
      },
      {
        "input": "candidates = [2], target = 1",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-40": {
    "id": "problem-40",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "category": "Array • Backtracking",
    "description": {
      "text": "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.",
      "notes": [
        "Given a collection of candidate numbers (candidates) and a target number (target), find all unique c... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "candidates = [10,1,2,7,6,1,5], target = 8",
        "output": "[ [1,1,6], [1,2,5], [1,7], [2,6] ]"
      },
      {
        "input": "candidates = [2,5,2,1,2], target = 5",
        "output": "[ [1,2,2], [5] ]"
      }
    ],
    "constraints": [
      "1 <= candidates.length <= 100 1 <= candidates[i] <= 50 1 <= target <= 30"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-41": {
    "id": "problem-41",
    "title": "First Missing Positive",
    "difficulty": "Hard",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an unsorted integer array nums.",
      "notes": [
        "Given an unsorted integer array nums. Return the smallest positive integer that is not present in nu... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,2,0]",
        "output": "3",
        "explanation": "The numbers in the range [1,2] are all in the array."
      },
      {
        "input": "nums = [3,4,-1,1]",
        "output": "2",
        "explanation": "1 is in the array but 2 is missing."
      },
      {
        "input": "nums = [7,8,9,11,12]",
        "output": "1",
        "explanation": "The smallest positive integer 1 is missing."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 105",
      "231 <= nums[i] <= 231",
      "1"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-42": {
    "id": "problem-42",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      "notes": [
        "Given n non-negative integers representing an elevation map where the width of each bar is 1, comput... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": "The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped."
      },
      {
        "input": "height = [4,2,0,3,2,5]",
        "output": "9"
      }
    ],
    "constraints": [
      "n == height.length 1 <= n <= 2 * 104 0 <= height[i] <= 105"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-43": {
    "id": "problem-43",
    "title": "Multiply Strings",
    "difficulty": "Medium",
    "category": "Math • String",
    "description": {
      "text": "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.",
      "notes": [
        "Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "num1 = \"2\", num2 = \"3\"",
        "output": "\"6\""
      },
      {
        "input": "num1 = \"123\", num2 = \"456\"",
        "output": "\"56088\""
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-44": {
    "id": "problem-44",
    "title": "Wildcard Matching",
    "difficulty": "Hard",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where: '?' Matches any single character.",
      "notes": [
        "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"aa\", p = \"a\"",
        "output": "false",
        "explanation": "\"a\" does not match the entire string \"aa\"."
      },
      {
        "input": "s = \"aa\", p = \"*\"",
        "output": "true",
        "explanation": "'*' matches any sequence."
      },
      {
        "input": "s = \"cb\", p = \"?a\"",
        "output": "false",
        "explanation": "'?' matches 'c', but the second letter is 'a', which does not match 'b'."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-45": {
    "id": "problem-45",
    "title": "Jump Game II",
    "difficulty": "Medium",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "You are given a 0-indexed array of integers nums of length n.",
      "notes": [
        "You are given a 0-indexed array of integers nums of length n. You are initially positioned at index ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "2",
        "explanation": "The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        "input": "nums = [2,3,0,1,4]",
        "output": "2"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 104 0 <= nums[i] <= 1000 It's guaranteed that you can reach nums[n - 1]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-46": {
    "id": "problem-46",
    "title": "Permutations",
    "difficulty": "Medium",
    "category": "Array • Backtracking",
    "description": {
      "text": "Given an array nums of distinct integers, return all the possible permutations.",
      "notes": [
        "Given an array nums of distinct integers, return all the possible permutations. You can return the a... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      },
      {
        "input": "nums = [0,1]",
        "output": "[[0,1],[1,0]]"
      },
      {
        "input": "nums = [1]",
        "output": "[[1]]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 6",
      "10 <= nums[i] <= 10 All the integers of nums are unique."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-47": {
    "id": "problem-47",
    "title": "Permutations II",
    "difficulty": "Medium",
    "category": "Array • Backtracking",
    "description": {
      "text": "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
      "notes": [
        "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permu... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,1,2]",
        "output": "[[1,1,2], [1,2,1], [2,1,1]]"
      },
      {
        "input": "nums = [1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 8",
      "10 <= nums[i] <= 10"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-48": {
    "id": "problem-48",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "category": "Array • Math",
    "description": {
      "text": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
      "notes": [
        "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise). ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]"
      },
      {
        "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
      }
    ],
    "constraints": [
      "n == matrix.length == matrix[i].length 1 <= n <= 20",
      "1000 <= matrix[i][j] <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-49": {
    "id": "problem-49",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an array of strings strs, group the anagrams together.",
      "notes": [
        "Given an array of strings strs, group the anagrams together. You can return the answer in any order.... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": "There is no string in strs that can be rearranged to form \"bat\". The strings \"nat\" and \"tan\" are anagrams as they can be rearranged to form each other. The strings \"ate\", \"eat\", and \"tea\" are anagrams as they can be rearranged to form each other."
      },
      {
        "input": "strs = [\"\"]",
        "output": "[[\"\"]]"
      },
      {
        "input": "strs = [\"a\"]",
        "output": "[[\"a\"]]"
      }
    ],
    "constraints": [
      "1 <= strs.length <= 104 0 <= strs[i].length <= 100 strs[i] consists of lowercase English letters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-50": {
    "id": "problem-50",
    "title": "Pow(x, n)",
    "difficulty": "Medium",
    "category": "Math • Recursion",
    "description": {
      "text": "Implement pow(x, n), which calculates x raised to the power n (i.",
      "notes": [
        "Implement pow(x, n), which calculates x raised to the power n (i.e., xn). Example 1: Input: x = 2.00... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "x = 2.00000, n = 10",
        "output": "1024.00000"
      },
      {
        "input": "x = 2.10000, n = 3",
        "output": "9.26100"
      },
      {
        "input": "x = 2.00000, n = -2",
        "output": "0.25000",
        "explanation": "2-2 = 1/22 = 1/4 = 0.25"
      }
    ],
    "constraints": [
      "-100.0 < x < 100.0",
      "231 <= n <= 231",
      "1 n is an integer. Either x is not zero or n > 0. -104 <= xn <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-51": {
    "id": "problem-51",
    "title": "N-Queens",
    "difficulty": "Hard",
    "category": "Array • Backtracking",
    "description": {
      "text": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
      "notes": [
        "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queen... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 4",
        "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
        "explanation": "There exist two distinct solutions to the 4-queens puzzle as shown above"
      },
      {
        "input": "n = 1",
        "output": "[[\"Q\"]]"
      }
    ],
    "constraints": [
      "1 <= n <= 9"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-52": {
    "id": "problem-52",
    "title": "N-Queens II",
    "difficulty": "Hard",
    "category": "Backtracking",
    "description": {
      "text": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.",
      "notes": [
        "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queen... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 4",
        "output": "2",
        "explanation": "There are two distinct solutions to the 4-queens puzzle as shown."
      },
      {
        "input": "n = 1",
        "output": "1"
      }
    ],
    "constraints": [
      "1 <= n <= 9"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-53": {
    "id": "problem-53",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "category": "Array • Divide and Conquer",
    "description": {
      "text": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      "notes": [
        "Given an integer array nums, find the subarray with the largest sum, and return its sum. Example 1: ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum 6."
      },
      {
        "input": "nums = [1]",
        "output": "1",
        "explanation": "The subarray [1] has the largest sum 1."
      },
      {
        "input": "nums = [5,4,-1,7,8]",
        "output": "23",
        "explanation": "The subarray [5,4,-1,7,8] has the largest sum 23."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 105"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-54": {
    "id": "problem-54",
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "category": "Array • Matrix",
    "description": {
      "text": "Given an m x n matrix, return all elements of the matrix in spiral order.",
      "notes": [
        "Given an m x n matrix, return all elements of the matrix in spiral order. Example 1: Input: matrix =... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]"
      },
      {
        "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1,2,3,4,8,12,11,10,9,5,6,7]"
      }
    ],
    "constraints": [
      "m == matrix.length n == matrix[i].length 1 <= m, n <= 10",
      "100 <= matrix[i][j] <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-55": {
    "id": "problem-55",
    "title": "Jump Game",
    "difficulty": "Medium",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "You are given an integer array nums.",
      "notes": [
        "You are given an integer array nums. You are initially positioned at the array's first index, and ea... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        "input": "nums = [3,2,1,0,4]",
        "output": "false",
        "explanation": "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 104 0 <= nums[i] <= 105"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-56": {
    "id": "problem-56",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "category": "Array • Sorting",
    "description": {
      "text": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      "notes": [
        "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, an... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": "Since intervals [1,3] and [2,6] overlap, merge them into [1,6]."
      },
      {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]",
        "explanation": "Intervals [1,4] and [4,5] are considered overlapping."
      },
      {
        "input": "intervals = [[4,7],[1,4]]",
        "output": "[[1,7]]",
        "explanation": "Intervals [1,4] and [4,7] are considered overlapping."
      }
    ],
    "constraints": [
      "1 <= intervals.length <= 104 intervals[i].length == 2 0 <= starti <= endi <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-57": {
    "id": "problem-57",
    "title": "Insert Interval",
    "difficulty": "Medium",
    "category": "Array",
    "description": {
      "text": "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.",
      "notes": [
        "You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] re... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "output": "[[1,5],[6,9]]"
      },
      {
        "input": "intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]",
        "output": "[[1,2],[3,10],[12,16]]",
        "explanation": "Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-58": {
    "id": "problem-58",
    "title": "Length of Last Word",
    "difficulty": "Easy",
    "category": "String",
    "description": {
      "text": "Given a string s consisting of words and spaces, return the length of the last word in the string.",
      "notes": [
        "Given a string s consisting of words and spaces, return the length of the last word in the string. A... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"Hello World\"",
        "output": "5",
        "explanation": "The last word is \"World\" with length 5."
      },
      {
        "input": "s = \" fly me to the moon \"",
        "output": "4",
        "explanation": "The last word is \"moon\" with length 4."
      },
      {
        "input": "s = \"luffy is still joyboy\"",
        "output": "6",
        "explanation": "The last word is \"joyboy\" with length 6."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-59": {
    "id": "problem-59",
    "title": "Spiral Matrix II",
    "difficulty": "Medium",
    "category": "Array • Matrix",
    "description": {
      "text": "Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.",
      "notes": [
        "Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral ord... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 3",
        "output": "[[1,2,3],[8,9,4],[7,6,5]]"
      },
      {
        "input": "n = 1",
        "output": "[[1]]"
      }
    ],
    "constraints": [
      "1 <= n <= 20"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-60": {
    "id": "problem-60",
    "title": "Permutation Sequence",
    "difficulty": "Hard",
    "category": "Math • Recursion",
    "description": {
      "text": "The set [1, 2, 3, .",
      "notes": [
        "The set [1, 2, 3, ..., n] contains a total of n! unique permutations. By listing and labeling all of... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 3, k = 3",
        "output": "\"213\""
      },
      {
        "input": "n = 4, k = 9",
        "output": "\"2314\""
      },
      {
        "input": "n = 3, k = 1",
        "output": "\"123\""
      }
    ],
    "constraints": [
      "1 <= n <= 9 1 <= k <= n!"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-61": {
    "id": "problem-61",
    "title": "Rotate List",
    "difficulty": "Medium",
    "category": "Linked List • Two Pointers",
    "description": {
      "text": "Given the head of a linked list, rotate the list to the right by k places.",
      "notes": [
        "Given the head of a linked list, rotate the list to the right by k places. Example 1: Input: head = ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,4,5], k = 2",
        "output": "[4,5,1,2,3]"
      },
      {
        "input": "head = [0,1,2], k = 4",
        "output": "[2,0,1]"
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [0, 500]. -100 <= Node.val <= 100 0 <= k <= 2 * 109"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-62": {
    "id": "problem-62",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "category": "Math • Dynamic Programming",
    "description": {
      "text": "There is a robot on an m x n grid.",
      "notes": [
        "There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "m = 3, n = 7",
        "output": "28"
      },
      {
        "input": "m = 3, n = 2",
        "output": "3",
        "explanation": "From the top-left corner, there are a total of 3 ways to reach the bottom-right corner: 1. Right -> Down -> Down 2. Down -> Down -> Right 3. Down -> Right -> Down"
      }
    ],
    "constraints": [
      "1 <= m, n <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-63": {
    "id": "problem-63",
    "title": "Unique Paths II",
    "difficulty": "Medium",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "You are given an m x n integer array grid.",
      "notes": [
        "You are given an m x n integer array grid. There is a robot initially located at the top-left corner... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]",
        "output": "2",
        "explanation": "There is one obstacle in the middle of the 3x3 grid above. There are two ways to reach the bottom-right corner: 1. Right -> Right -> Down -> Down 2. Down -> Down -> Right -> Right"
      },
      {
        "input": "obstacleGrid = [[0,1],[0,0]]",
        "output": "1"
      }
    ],
    "constraints": [
      "m == obstacleGrid.length n == obstacleGrid[i].length 1 <= m, n <= 100 obstacleGrid[i][j] is 0 or 1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-64": {
    "id": "problem-64",
    "title": "Minimum Path Sum",
    "difficulty": "Medium",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.",
      "notes": [
        "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, whic... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "grid = [[1,3,1],[1,5,1],[4,2,1]]",
        "output": "7",
        "explanation": "Because the path 1 &rarr; 3 &rarr; 1 &rarr; 1 &rarr; 1 minimizes the sum."
      },
      {
        "input": "grid = [[1,2,3],[4,5,6]]",
        "output": "12"
      }
    ],
    "constraints": [
      "m == grid.length n == grid[i].length 1 <= m, n <= 200 0 <= grid[i][j] <= 200"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-65": {
    "id": "problem-65",
    "title": "Valid Number",
    "difficulty": "Hard",
    "category": "String",
    "description": {
      "text": "Given a string s, return whether s is a valid number.",
      "notes": [
        "Given a string s, return whether s is a valid number. For example, all the following are valid numbe... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"0\"",
        "output": "true"
      },
      {
        "input": "s = \"e\"",
        "output": "false"
      },
      {
        "input": "s = \".\"",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= s.length <= 20 s consists of only English letters (both uppercase and lowercase), digits (0",
      "9), plus '+', minus '-', or dot '.'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-66": {
    "id": "problem-66",
    "title": "Plus One",
    "difficulty": "Easy",
    "category": "Array • Math",
    "description": {
      "text": "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.",
      "notes": [
        "You are given a large integer represented as an integer array digits, where each digits[i] is the it... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "digits = [1,2,3]",
        "output": "[1,2,4]",
        "explanation": "The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4]."
      },
      {
        "input": "digits = [4,3,2,1]",
        "output": "[4,3,2,2]",
        "explanation": "The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322. Thus, the result should be [4,3,2,2]."
      },
      {
        "input": "digits = [9]",
        "output": "[1,0]",
        "explanation": "The array represents the integer 9. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0]."
      }
    ],
    "constraints": [
      "1 <= digits.length <= 100 0 <= digits[i] <= 9 digits does not contain any leading 0's."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-67": {
    "id": "problem-67",
    "title": "Add Binary",
    "difficulty": "Easy",
    "category": "Math • String",
    "description": {
      "text": "Given two binary strings a and b, return their sum as a binary string.",
      "notes": [
        "Given two binary strings a and b, return their sum as a binary string. Example 1: Input: a = \"11\", b... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "a = \"11\", b = \"1\"",
        "output": "\"100\""
      },
      {
        "input": "a = \"1010\", b = \"1011\"",
        "output": "\"10101\""
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-68": {
    "id": "problem-68",
    "title": "Text Justification",
    "difficulty": "Hard",
    "category": "Array • String",
    "description": {
      "text": "Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.",
      "notes": [
        "Given an array of strings words and a width maxWidth, format the text such that each line has exactl... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "words = [\"This\", \"is\", \"an\", \"example\", \"of\", \"text\", \"justification.\"], maxWidth = 16",
        "output": "[ \"This is an\", \"example of text\", \"justification. \" ]"
      },
      {
        "input": "words = [\"What\",\"must\",\"be\",\"acknowledgment\",\"shall\",\"be\"], maxWidth = 16",
        "output": "[ \"What must be\", \"acknowledgment \", \"shall be \" ]",
        "explanation": "Note that the last line is \"shall be \" instead of \"shall be\", because the last line must be left-justified instead of fully-justified. Note that the second line is also left-justified because it contains only one word."
      },
      {
        "input": "words = [\"Science\",\"is\",\"what\",\"we\",\"understand\",\"well\",\"enough\",\"to\",\"explain\",\"to\",\"a\",\"computer.\",\"Art\",\"is\",\"everything\",\"else\",\"we\",\"do\"], maxWidth = 20",
        "output": "[ \"Science is what we\", \"understand well\", \"enough to explain to\", \"a computer. Art is\", \"everything else we\", \"do \" ]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-69": {
    "id": "problem-69",
    "title": "Sqrt(x)",
    "difficulty": "Easy",
    "category": "Math • Binary Search",
    "description": {
      "text": "Given a non-negative integer x, return the square root of x rounded down to the nearest integer.",
      "notes": [
        "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "x = 4",
        "output": "2",
        "explanation": "The square root of 4 is 2, so we return 2."
      },
      {
        "input": "x = 8",
        "output": "2",
        "explanation": "The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned."
      }
    ],
    "constraints": [
      "0 <= x <= 231",
      "1"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-70": {
    "id": "problem-70",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "category": "Math • Dynamic Programming",
    "description": {
      "text": "You are climbing a staircase.",
      "notes": [
        "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 2",
        "output": "2",
        "explanation": "There are two ways to climb to the top. 1. 1 step + 1 step 2. 2 steps"
      },
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "There are three ways to climb to the top. 1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step"
      }
    ],
    "constraints": [
      "1 <= n <= 45"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-71": {
    "id": "problem-71",
    "title": "Simplify Path",
    "difficulty": "Medium",
    "category": "String • Stack",
    "description": {
      "text": "You are given an absolute path for a Unix-style file system, which always begins with a slash '/'.",
      "notes": [
        "You are given an absolute path for a Unix-style file system, which always begins with a slash '/'. Y... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "path = \"/home/\"",
        "output": "\"/home\"",
        "explanation": "The trailing slash should be removed."
      },
      {
        "input": "path = \"/home//foo/\"",
        "output": "\"/home/foo\"",
        "explanation": "Multiple consecutive slashes are replaced by a single one."
      },
      {
        "input": "path = \"/home/user/Documents/../Pictures\"",
        "output": "\"/home/user/Pictures\"",
        "explanation": "A double period \"..\" refers to the directory up a level (the parent directory)."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-72": {
    "id": "problem-72",
    "title": "Edit Distance",
    "difficulty": "Medium",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
      "notes": [
        "Given two strings word1 and word2, return the minimum number of operations required to convert word1... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": "horse -> rorse (replace 'h' with 'r') rorse -> rose (remove 'r') rose -> ros (remove 'e')"
      },
      {
        "input": "word1 = \"intention\", word2 = \"execution\"",
        "output": "5",
        "explanation": "intention -> inention (remove 't') inention -> enention (replace 'i' with 'e') enention -> exention (replace 'n' with 'x') exention -> exection (replace 'n' with 'c') exection -> execution (insert 'u')"
      }
    ],
    "constraints": [
      "0 <= word1.length, word2.length <= 500 word1 and word2 consist of lowercase English letters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-73": {
    "id": "problem-73",
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.",
      "notes": [
        "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's. You ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]"
      },
      {
        "input": "matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]"
      }
    ],
    "constraints": [
      "m == matrix.length n == matrix[0].length 1 <= m, n <= 200",
      "231 <= matrix[i][j] <= 231"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-74": {
    "id": "problem-74",
    "title": "Search a 2D Matrix",
    "difficulty": "Medium",
    "category": "Array • Binary Search",
    "description": {
      "text": "You are given an m x n integer matrix matrix with the following two properties: Each row is sorted in non-decreasing order.",
      "notes": [
        "You are given an m x n integer matrix matrix with the following two properties: Each row is sorted i... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true"
      },
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "false"
      }
    ],
    "constraints": [
      "m == matrix.length n == matrix[i].length 1 <= m, n <= 100",
      "104 <= matrix[i][j], target <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-75": {
    "id": "problem-75",
    "title": "Sort Colors",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.",
      "notes": [
        "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects o... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]"
      },
      {
        "input": "nums = [2,0,1]",
        "output": "[0,1,2]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-76": {
    "id": "problem-76",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "category": "Hash Table • String",
    "description": {
      "text": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
      "notes": [
        "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": "The minimum window substring \"BANC\" includes 'A', 'B', and 'C' from string t."
      },
      {
        "input": "s = \"a\", t = \"a\"",
        "output": "\"a\"",
        "explanation": "The entire string s is the minimum window."
      },
      {
        "input": "s = \"a\", t = \"aa\"",
        "output": "\"\"",
        "explanation": "Both 'a's from t must be included in the window. Since the largest window of s only has one 'a', return empty string."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-77": {
    "id": "problem-77",
    "title": "Combinations",
    "difficulty": "Medium",
    "category": "Backtracking",
    "description": {
      "text": "Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].",
      "notes": [
        "Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 4, k = 2",
        "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
        "explanation": "There are 4 choose 2 = 6 total combinations. Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination."
      },
      {
        "input": "n = 1, k = 1",
        "output": "[[1]]",
        "explanation": "There is 1 choose 1 = 1 total combination."
      }
    ],
    "constraints": [
      "1 <= n <= 20 1 <= k <= n"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-78": {
    "id": "problem-78",
    "title": "Subsets",
    "difficulty": "Medium",
    "category": "Array • Backtracking",
    "description": {
      "text": "Given an integer array nums of unique elements, return all possible subsets (the power set).",
      "notes": [
        "Given an integer array nums of unique elements, return all possible subsets (the power set). The sol... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10",
      "10 <= nums[i] <= 10 All the numbers of nums are unique."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-79": {
    "id": "problem-79",
    "title": "Word Search",
    "difficulty": "Medium",
    "category": "Array • String",
    "description": {
      "text": "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
      "notes": [
        "Given an m x n grid of characters board and a string word, return true if word exists in the grid. T... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "output": "true"
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"SEE\"",
        "output": "true"
      },
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCB\"",
        "output": "false"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-80": {
    "id": "problem-80",
    "title": "Remove Duplicates from Sorted Array II",
    "difficulty": "Medium",
    "category": "Array • Two Pointers",
    "description": {
      "text": "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.",
      "notes": [
        "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such tha... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3]",
        "output": "5, nums = [1,1,2,2,3,_]",
        "explanation": "Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively. It does not matter what you leave beyond the returned k (hence they are underscores)."
      },
      {
        "input": "nums = [0,0,1,1,1,1,2,3,3]",
        "output": "7, nums = [0,0,1,1,2,3,3,_,_]",
        "explanation": "Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively. It does not matter what you leave beyond the returned k (hence they are underscores)."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 3 * 104",
      "104 <= nums[i] <= 104 nums is sorted in non-decreasing order."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-81": {
    "id": "problem-81",
    "title": "Search in Rotated Sorted Array II",
    "difficulty": "Medium",
    "category": "Array • Binary Search",
    "description": {
      "text": "There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).",
      "notes": [
        "There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values)... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,5,6,0,0,1,2], target = 0",
        "output": "true"
      },
      {
        "input": "nums = [2,5,6,0,0,1,2], target = 3",
        "output": "false"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 5000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-82": {
    "id": "problem-82",
    "title": "Remove Duplicates from Sorted List II",
    "difficulty": "Medium",
    "category": "Linked List • Two Pointers",
    "description": {
      "text": "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.",
      "notes": [
        "Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only d... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,3,4,4,5]",
        "output": "[1,2,5]"
      },
      {
        "input": "head = [1,1,1,2,3]",
        "output": "[2,3]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-83": {
    "id": "problem-83",
    "title": "Remove Duplicates from Sorted List",
    "difficulty": "Easy",
    "category": "Linked List",
    "description": {
      "text": "Given the head of a sorted linked list, delete all duplicates such that each element appears only once.",
      "notes": [
        "Given the head of a sorted linked list, delete all duplicates such that each element appears only on... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,1,2]",
        "output": "[1,2]"
      },
      {
        "input": "head = [1,1,2,3,3]",
        "output": "[1,2,3]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-84": {
    "id": "problem-84",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "category": "Array • Stack",
    "description": {
      "text": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
      "notes": [
        "Given an array of integers heights representing the histogram's bar height where the width of each b... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "heights = [2,1,5,6,2,3]",
        "output": "10",
        "explanation": "The above is a histogram where width of each bar is 1. The largest rectangle is shown in the red area, which has an area = 10 units."
      },
      {
        "input": "heights = [2,4]",
        "output": "4"
      }
    ],
    "constraints": [
      "1 <= heights.length <= 105 0 <= heights[i] <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-85": {
    "id": "problem-85",
    "title": "Maximal Rectangle",
    "difficulty": "Hard",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.",
      "notes": [
        "Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing onl... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "matrix = [[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "6",
        "explanation": "The maximal rectangle is shown in the above picture."
      },
      {
        "input": "matrix = [[\"0\"]]",
        "output": "0"
      },
      {
        "input": "matrix = [[\"1\"]]",
        "output": "1"
      }
    ],
    "constraints": [
      "rows == matrix.length cols == matrix[i].length 1 <= rows, cols <= 200 matrix[i][j] is '0' or '1'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-86": {
    "id": "problem-86",
    "title": "Partition List",
    "difficulty": "Medium",
    "category": "Linked List • Two Pointers",
    "description": {
      "text": "Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.",
      "notes": [
        "Given the head of a linked list and a value x, partition it such that all nodes less than x come bef... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,4,3,2,5,2], x = 3",
        "output": "[1,2,2,4,3,5]"
      },
      {
        "input": "head = [2,1], x = 2",
        "output": "[1,2]"
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [0, 200]. -100 <= Node.val <= 100",
      "200 <= x <= 200"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-87": {
    "id": "problem-87",
    "title": "Scramble String",
    "difficulty": "Hard",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "We can scramble a string s to get a string t using the following algorithm: If the length of the string is 1, stop.",
      "notes": [
        "We can scramble a string s to get a string t using the following algorithm: If the length of the str... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s1 = \"great\", s2 = \"rgeat\"",
        "output": "true",
        "explanation": "One possible scenario applied on s1 is: \"great\" --> \"gr/eat\" // divide at random index. \"gr/eat\" --> \"gr/eat\" // random decision is not to swap the two substrings and keep them in order. \"gr/eat\" --> \"g/r / e/at\" // apply the same algorithm recursively on both substrings. divide at random index each of them. \"g/r / e/at\" --> \"r/g / e/at\" // random decision was to swap the first substring and to keep the second substring in the same order. \"r/g / e/at\" --> \"r/g / e/ a/t\" // again apply the algorithm recursively, divide \"at\" to \"a/t\". \"r/g / e/ a/t\" --> \"r/g / e/ a/t\" // random decision is to keep both substrings in the same order. The algorithm stops now, and the result string is \"rgeat\" which is s2. As one possible scenario led s1 to be scrambled to s2, we return true."
      },
      {
        "input": "s1 = \"abcde\", s2 = \"caebd\"",
        "output": "false"
      },
      {
        "input": "s1 = \"a\", s2 = \"a\"",
        "output": "true"
      }
    ],
    "constraints": [
      "s1.length == s2.length 1 <= s1.length <= 30 s1 and s2 consist of lowercase English letters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-88": {
    "id": "problem-88",
    "title": "Merge Sorted Array",
    "difficulty": "Easy",
    "category": "Array • Two Pointers",
    "description": {
      "text": "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.",
      "notes": [
        "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        "output": "[1,2,2,3,5,6]",
        "explanation": "The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1."
      },
      {
        "input": "nums1 = [1], m = 1, nums2 = [], n = 0",
        "output": "[1]",
        "explanation": "The arrays we are merging are [1] and []. The result of the merge is [1]."
      },
      {
        "input": "nums1 = [0], m = 0, nums2 = [1], n = 1",
        "output": "[1]",
        "explanation": "The arrays we are merging are [] and [1]. The result of the merge is [1]. Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1."
      }
    ],
    "constraints": [
      "nums1.length == m + n nums2.length == n 0 <= m, n <= 200 1 <= m + n <= 200"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-89": {
    "id": "problem-89",
    "title": "Gray Code",
    "difficulty": "Medium",
    "category": "Math • Backtracking",
    "description": {
      "text": "An n-bit gray code sequence is a sequence of 2n integers where: Every integer is in the inclusive range [0, 2n - 1], The first integer is 0, An integer appears no more than once in the sequence, The binary representation of every pair of adjacent integers differs by exactly one bit, and The binary r...",
      "notes": [
        "An n-bit gray code sequence is a sequence of 2n integers where: Every integer is in the inclusive ra... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 2",
        "output": "[0,1,3,2]",
        "explanation": "The binary representation of [0,1,3,2] is [00,01,11,10]. - 00 and 01 differ by one bit - 01 and 11 differ by one bit - 11 and 10 differ by one bit - 10 and 00 differ by one bit [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01]. - 00 and 10 differ by one bit - 10 and 11 differ by one bit - 11 and 01 differ by one bit - 01 and 00 differ by one bit"
      },
      {
        "input": "n = 1",
        "output": "[0,1]"
      }
    ],
    "constraints": [
      "1 <= n <= 16"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-90": {
    "id": "problem-90",
    "title": "Subsets II",
    "difficulty": "Medium",
    "category": "Array • Backtracking",
    "description": {
      "text": "Given an integer array nums that may contain duplicates, return all possible subsets (the power set).",
      "notes": [
        "Given an integer array nums that may contain duplicates, return all possible subsets (the power set)... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [1,2,2]",
        "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]"
      },
      {
        "input": "nums = [0]",
        "output": "[[],[0]]"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 10",
      "10 <= nums[i] <= 10"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-91": {
    "id": "problem-91",
    "title": "Decode Ways",
    "difficulty": "Medium",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "You have intercepted a secret message encoded as a string of numbers.",
      "notes": [
        "You have intercepted a secret message encoded as a string of numbers. The message is decoded via the... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"12\"",
        "output": "2",
        "explanation": "\"12\" could be decoded as \"AB\" (1 2) or \"L\" (12)."
      },
      {
        "input": "s = \"226\"",
        "output": "3",
        "explanation": "\"226\" could be decoded as \"BZ\" (2 26), \"VF\" (22 6), or \"BBF\" (2 2 6)."
      },
      {
        "input": "s = \"06\"",
        "output": "0",
        "explanation": "\"06\" cannot be mapped to \"F\" because of the leading zero (\"6\" is different from \"06\"). In this case, the string is not a valid encoding, so return 0."
      }
    ],
    "constraints": [
      "1 <= s.length <= 100 s contains only digits and may contain leading zero(s)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-92": {
    "id": "problem-92",
    "title": "Reverse Linked List II",
    "difficulty": "Medium",
    "category": "Linked List",
    "description": {
      "text": "Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.",
      "notes": [
        "Given the head of a singly linked list and two integers left and right where left <= right, reverse ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,4,5], left = 2, right = 4",
        "output": "[1,4,3,2,5]"
      },
      {
        "input": "head = [5], left = 1, right = 1",
        "output": "[5]"
      }
    ],
    "constraints": [
      "The number of nodes in the list is n. 1 <= n <= 500",
      "500 <= Node.val <= 500 1 <= left <= right <= n Follow up: Could you do it in one pass?"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-93": {
    "id": "problem-93",
    "title": "Restore IP Addresses",
    "difficulty": "Medium",
    "category": "String • Backtracking",
    "description": {
      "text": "A valid IP address consists of exactly four integers separated by single dots.",
      "notes": [
        "A valid IP address consists of exactly four integers separated by single dots. Each integer is betwe... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"25525511135\"",
        "output": "[\"255.255.11.135\",\"255.255.111.35\"]"
      },
      {
        "input": "s = \"0000\"",
        "output": "[\"0.0.0.0\"]"
      },
      {
        "input": "s = \"101023\"",
        "output": "[\"1.0.10.23\",\"1.0.102.3\",\"10.1.0.23\",\"10.10.2.3\",\"101.0.2.3\"]"
      }
    ],
    "constraints": [
      "1 <= s.length <= 20 s consists of digits only."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-94": {
    "id": "problem-94",
    "title": "Binary Tree Inorder Traversal",
    "difficulty": "Easy",
    "category": "Stack • Tree",
    "description": {
      "text": "Given the root of a binary tree, return the inorder traversal of its nodes' values.",
      "notes": [
        "Given the root of a binary tree, return the inorder traversal of its nodes' values. Example 1: Input... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,null,2,3]",
        "output": "[1,3,2]",
        "explanation": ""
      },
      {
        "input": "root = [1,2,3,4,5,null,8,null,null,6,7,9]",
        "output": "[4,2,6,5,7,1,3,9,8]",
        "explanation": ""
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-95": {
    "id": "problem-95",
    "title": "Unique Binary Search Trees II",
    "difficulty": "Medium",
    "category": "Dynamic Programming • Backtracking",
    "description": {
      "text": "Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n.",
      "notes": [
        "Given an integer n, return all the structurally unique BST's (binary search trees), which has exactl... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 3",
        "output": "[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]"
      },
      {
        "input": "n = 1",
        "output": "[[1]]"
      }
    ],
    "constraints": [
      "1 <= n <= 8"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-96": {
    "id": "problem-96",
    "title": "Unique Binary Search Trees",
    "difficulty": "Medium",
    "category": "Math • Dynamic Programming",
    "description": {
      "text": "Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.",
      "notes": [
        "Given an integer n, return the number of structurally unique BST's (binary search trees) which has e... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "n = 3",
        "output": "5"
      },
      {
        "input": "n = 1",
        "output": "1"
      }
    ],
    "constraints": [
      "1 <= n <= 19"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-97": {
    "id": "problem-97",
    "title": "Interleaving String",
    "difficulty": "Medium",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.",
      "notes": [
        "Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2. An interlea... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbcbcac\"",
        "output": "true",
        "explanation": "One way to obtain s3 is: Split s1 into s1 = \"aa\" + \"bc\" + \"c\", and s2 into s2 = \"dbbc\" + \"a\". Interleaving the two splits, we get \"aa\" + \"dbbc\" + \"bc\" + \"a\" + \"c\" = \"aadbbcbcac\". Since s3 can be obtained by interleaving s1 and s2, we return true."
      },
      {
        "input": "s1 = \"aabcc\", s2 = \"dbbca\", s3 = \"aadbbbaccc\"",
        "output": "false",
        "explanation": "Notice how it is impossible to interleave s2 with any other string to obtain s3."
      },
      {
        "input": "s1 = \"\", s2 = \"\", s3 = \"\"",
        "output": "true"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-98": {
    "id": "problem-98",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
      "notes": [
        "Given the root of a binary tree, determine if it is a valid binary search tree (BST). A valid BST is... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true"
      },
      {
        "input": "root = [5,1,4,null,null,3,6]",
        "output": "false",
        "explanation": "The root node's value is 5 but its right child's value is 4."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 104]. -231 <= Node.val <= 231",
      "1"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-99": {
    "id": "problem-99",
    "title": "Recover Binary Search Tree",
    "difficulty": "Medium",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the tree were swapped by mistake.",
      "notes": [
        "You are given the root of a binary search tree (BST), where the values of exactly two nodes of the t... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,3,null,null,2]",
        "output": "[3,1,null,null,2]",
        "explanation": "3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3 makes the BST valid."
      },
      {
        "input": "root = [3,1,4,null,null,2]",
        "output": "[2,1,4,null,null,3]",
        "explanation": "2 cannot be in the right subtree of 3 because 2 < 3. Swapping 2 and 3 makes the BST valid."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [2, 1000]. -231 <= Node.val <= 231"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-100": {
    "id": "problem-100",
    "title": "Same Tree",
    "difficulty": "Easy",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
      "notes": [
        "Given the roots of two binary trees p and q, write a function to check if they are the same or not. ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "p = [1,2,3], q = [1,2,3]",
        "output": "true"
      },
      {
        "input": "p = [1,2], q = [1,null,2]",
        "output": "false"
      },
      {
        "input": "p = [1,2,1], q = [1,1,2]",
        "output": "false"
      }
    ],
    "constraints": [
      "The number of nodes in both trees is in the range [0, 100]. -104 <= Node.val <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-101": {
    "id": "problem-101",
    "title": "Symmetric Tree",
    "difficulty": "Easy",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given the root of a binary tree, check whether it is a mirror of itself (i.",
      "notes": [
        "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,2,2,3,4,4,3]",
        "output": "true"
      },
      {
        "input": "root = [1,2,2,null,3,null,3]",
        "output": "false"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-102": {
    "id": "problem-102",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "category": "Tree • Breadth-First Search",
    "description": {
      "text": "Given the root of a binary tree, return the level order traversal of its nodes' values.",
      "notes": [
        "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000]. -1000 <= Node.val <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-103": {
    "id": "problem-103",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "category": "Tree • Breadth-First Search",
    "description": {
      "text": "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.",
      "notes": [
        "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e.... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[20,9],[15,7]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000]. -100 <= Node.val <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-104": {
    "id": "problem-104",
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given the root of a binary tree, return its maximum depth.",
      "notes": [
        "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the numb... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3"
      },
      {
        "input": "root = [1,null,2]",
        "output": "2"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 104]. -100 <= Node.val <= 100"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-105": {
    "id": "problem-105",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
      "notes": [
        "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary t... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        "output": "[3,9,20,null,null,15,7]"
      },
      {
        "input": "preorder = [-1], inorder = [-1]",
        "output": "[-1]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-106": {
    "id": "problem-106",
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.",
      "notes": [
        "Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tr... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]",
        "output": "[3,9,20,null,null,15,7]"
      },
      {
        "input": "inorder = [-1], postorder = [-1]",
        "output": "[-1]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-107": {
    "id": "problem-107",
    "title": "Binary Tree Level Order Traversal II",
    "difficulty": "Medium",
    "category": "Tree • Breadth-First Search",
    "description": {
      "text": "Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values.",
      "notes": [
        "Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[15,7],[9,20],[3]]"
      },
      {
        "input": "root = [1]",
        "output": "[[1]]"
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 2000]. -1000 <= Node.val <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-108": {
    "id": "problem-108",
    "title": "Convert Sorted Array to Binary Search Tree",
    "difficulty": "Easy",
    "category": "Array • Divide and Conquer",
    "description": {
      "text": "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
      "notes": [
        "Given an integer array nums where the elements are sorted in ascending order, convert it to a height... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [-10,-3,0,5,9]",
        "output": "[0,-3,9,-10,null,5]",
        "explanation": "[0,-10,5,null,-3,null,9] is also accepted:"
      },
      {
        "input": "nums = [1,3]",
        "output": "[3,1]",
        "explanation": "[1,null,3] and [3,1] are both height-balanced BSTs."
      }
    ],
    "constraints": [
      "1 <= nums.length <= 104",
      "104 <= nums[i] <= 104 nums is sorted in a strictly increasing order."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-109": {
    "id": "problem-109",
    "title": "Convert Sorted List to Binary Search Tree",
    "difficulty": "Medium",
    "category": "Linked List • Divide and Conquer",
    "description": {
      "text": "Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
      "notes": [
        "Given the head of a singly linked list where elements are sorted in ascending order, convert it to a... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [-10,-3,0,5,9]",
        "output": "[0,-3,9,-10,null,5]",
        "explanation": "One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST."
      },
      {
        "input": "head = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "The number of nodes in head is in the range [0, 2 * 104]. -105 <= Node.val <= 105"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-110": {
    "id": "problem-110",
    "title": "Balanced Binary Tree",
    "difficulty": "Easy",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given a binary tree, determine if it is height-balanced.",
      "notes": [
        "Given a binary tree, determine if it is height-balanced. Example 1: Input: root = [3,9,20,null,null,... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "true"
      },
      {
        "input": "root = [1,2,2,3,3,null,null,4,4]",
        "output": "false"
      },
      {
        "input": "root = []",
        "output": "true"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 5000]. -104 <= Node.val <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-111": {
    "id": "problem-111",
    "title": "Minimum Depth of Binary Tree",
    "difficulty": "Easy",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given a binary tree, find its minimum depth.",
      "notes": [
        "Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shor... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "2"
      },
      {
        "input": "root = [2,null,3,null,4,null,5,null,6]",
        "output": "5"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 105]. -1000 <= Node.val <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-112": {
    "id": "problem-112",
    "title": "Path Sum",
    "difficulty": "Easy",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",
      "notes": [
        "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
        "output": "true",
        "explanation": "The root-to-leaf path with the target sum is shown."
      },
      {
        "input": "root = [1,2,3], targetSum = 5",
        "output": "false",
        "explanation": "There are two root-to-leaf paths in the tree: (1 --> 2): The sum is 3. (1 --> 3): The sum is 4. There is no root-to-leaf path with sum = 5."
      },
      {
        "input": "root = [], targetSum = 0",
        "output": "false",
        "explanation": "Since the tree is empty, there are no root-to-leaf paths."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 5000]. -1000 <= Node.val <= 1000",
      "1000 <= targetSum <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-113": {
    "id": "problem-113",
    "title": "Path Sum II",
    "difficulty": "Medium",
    "category": "Backtracking • Tree",
    "description": {
      "text": "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.",
      "notes": [
        "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the su... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22",
        "output": "[[5,4,11,2],[5,8,4,5]]",
        "explanation": "There are two paths whose sum equals targetSum: 5 + 4 + 11 + 2 = 22 5 + 8 + 4 + 5 = 22"
      },
      {
        "input": "root = [1,2,3], targetSum = 5",
        "output": "[]"
      },
      {
        "input": "root = [1,2], targetSum = 0",
        "output": "[]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 5000]. -1000 <= Node.val <= 1000",
      "1000 <= targetSum <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-114": {
    "id": "problem-114",
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "category": "Linked List • Stack",
    "description": {
      "text": "Given the root of a binary tree, flatten the tree into a \"linked list\": The \"linked list\" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.",
      "notes": [
        "Given the root of a binary tree, flatten the tree into a \"linked list\": The \"linked list\" should use... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]"
      },
      {
        "input": "root = []",
        "output": "[]"
      },
      {
        "input": "root = [0]",
        "output": "[0]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-115": {
    "id": "problem-115",
    "title": "Distinct Subsequences",
    "difficulty": "Hard",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
      "notes": [
        "Given two strings s and t, return the number of distinct subsequences of s which equals t. The test ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"rabbbit\", t = \"rabbit\"",
        "output": "3",
        "explanation": "As shown below, there are 3 ways you can generate \"rabbit\" from s. rabbbit rabbbit rabbbit"
      },
      {
        "input": "s = \"babgbag\", t = \"bag\"",
        "output": "5",
        "explanation": "As shown below, there are 5 ways you can generate \"bag\" from s. babgbag babgbag babgbag babgbag babgbag"
      }
    ],
    "constraints": [
      "1 <= s.length, t.length <= 1000 s and t consist of English letters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-116": {
    "id": "problem-116",
    "title": "Populating Next Right Pointers in Each Node",
    "difficulty": "Medium",
    "category": "Linked List • Tree",
    "description": {
      "text": "You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.",
      "notes": [
        "You are given a perfect binary tree where all leaves are on the same level, and every parent has two... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,2,3,4,5,6,7]",
        "output": "[1,#,2,3,#,4,5,6,7,#]",
        "explanation": "Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level."
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [0, 212"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-117": {
    "id": "problem-117",
    "title": "Populating Next Right Pointers in Each Node II",
    "difficulty": "Medium",
    "category": "Linked List • Tree",
    "description": {
      "text": "Given a binary tree struct Node { int val; Node *left; Node *right; Node *next; } Populate each next pointer to point to its next right node.",
      "notes": [
        "Given a binary tree struct Node { int val; Node *left; Node *right; Node *next; } Populate each next... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,2,3,4,5,null,7]",
        "output": "[1,#,2,3,#,4,5,7,#]",
        "explanation": "Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level."
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-118": {
    "id": "problem-118",
    "title": "Pascal's Triangle",
    "difficulty": "Easy",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "Given an integer numRows, return the first numRows of Pascal's triangle.",
      "notes": [
        "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "numRows = 5",
        "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]"
      },
      {
        "input": "numRows = 1",
        "output": "[[1]]"
      }
    ],
    "constraints": [
      "1 <= numRows <= 30"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-119": {
    "id": "problem-119",
    "title": "Pascal's Triangle II",
    "difficulty": "Easy",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.",
      "notes": [
        "Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle. In Pascal... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "rowIndex = 3",
        "output": "[1,3,3,1]"
      },
      {
        "input": "rowIndex = 0",
        "output": "[1]"
      },
      {
        "input": "rowIndex = 1",
        "output": "[1,1]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-120": {
    "id": "problem-120",
    "title": "Triangle",
    "difficulty": "Medium",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "Given a triangle array, return the minimum path sum from top to bottom.",
      "notes": [
        "Given a triangle array, return the minimum path sum from top to bottom. For each step, you may move ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]",
        "output": "11",
        "explanation": "The triangle looks like: 2 3 4 6 5 7 4 1 8 3 The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above)."
      },
      {
        "input": "triangle = [[-10]]",
        "output": "-10"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-121": {
    "id": "problem-121",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      "notes": [
        "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "In this case, no transactions are done and the max profit = 0."
      }
    ],
    "constraints": [
      "1 <= prices.length <= 105 0 <= prices[i] <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-122": {
    "id": "problem-122",
    "title": "Best Time to Buy and Sell Stock II",
    "difficulty": "Medium",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "You are given an integer array prices where prices[i] is the price of a given stock on the ith day.",
      "notes": [
        "You are given an integer array prices where prices[i] is the price of a given stock on the ith day. ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "7",
        "explanation": "Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3. Total profit is 4 + 3 = 7."
      },
      {
        "input": "prices = [1,2,3,4,5]",
        "output": "4",
        "explanation": "Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Total profit is 4."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0."
      }
    ],
    "constraints": [
      "1 <= prices.length <= 3 * 104 0 <= prices[i] <= 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-123": {
    "id": "problem-123",
    "title": "Best Time to Buy and Sell Stock III",
    "difficulty": "Hard",
    "category": "Array • Dynamic Programming",
    "description": {
      "text": "You are given an array prices where prices[i] is the price of a given stock on the ith day.",
      "notes": [
        "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "prices = [3,3,5,0,0,3,1,4]",
        "output": "6",
        "explanation": "Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3. Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3."
      },
      {
        "input": "prices = [1,2,3,4,5]",
        "output": "4",
        "explanation": "Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4. Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again."
      },
      {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "In this case, no transaction is done, i.e. max profit = 0."
      }
    ],
    "constraints": [
      "1 <= prices.length <= 105 0 <= prices[i] <= 105"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-124": {
    "id": "problem-124",
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "category": "Dynamic Programming • Tree",
    "description": {
      "text": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them.",
      "notes": [
        "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,2,3]",
        "output": "6",
        "explanation": "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6."
      },
      {
        "input": "root = [-10,9,20,null,null,15,7]",
        "output": "42",
        "explanation": "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42."
      }
    ],
    "constraints": [
      "The number of nodes in the tree is in the range [1, 3 * 104]. -1000 <= Node.val <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-125": {
    "id": "problem-125",
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "category": "Two Pointers • String",
    "description": {
      "text": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
      "notes": [
        "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and remov... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": "\"amanaplanacanalpanama\" is a palindrome."
      },
      {
        "input": "s = \"race a car\"",
        "output": "false",
        "explanation": "\"raceacar\" is not a palindrome."
      },
      {
        "input": "s = \" \"",
        "output": "true",
        "explanation": "s is an empty string \"\" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome."
      }
    ],
    "constraints": [
      "1 <= s.length <= 2 * 105 s consists only of printable ASCII characters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-126": {
    "id": "problem-126",
    "title": "Word Ladder II",
    "difficulty": "Hard",
    "category": "Hash Table • String",
    "description": {
      "text": "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> .",
      "notes": [
        "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a seque... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "[[\"hit\",\"hot\",\"dot\",\"dog\",\"cog\"],[\"hit\",\"hot\",\"lot\",\"log\",\"cog\"]]",
        "explanation": "There are 2 shortest transformation sequences: \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\" \"hit\" -> \"hot\" -> \"lot\" -> \"log\" -> \"cog\""
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "[]",
        "explanation": "The endWord \"cog\" is not in wordList, therefore there is no valid transformation sequence."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-127": {
    "id": "problem-127",
    "title": "Word Ladder",
    "difficulty": "Hard",
    "category": "Hash Table • String",
    "description": {
      "text": "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> .",
      "notes": [
        "A transformation sequence from word beginWord to word endWord using a dictionary wordList is a seque... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": "One shortest transformation sequence is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> cog\", which is 5 words long."
      },
      {
        "input": "beginWord = \"hit\", endWord = \"cog\", wordList = [\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": "The endWord \"cog\" is not in wordList, therefore there is no valid transformation sequence."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-128": {
    "id": "problem-128",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
      "notes": [
        "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [100,4,200,1,3,2]",
        "output": "4",
        "explanation": "The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4."
      },
      {
        "input": "nums = [0,3,7,2,5,8,4,6,0,1]",
        "output": "9"
      },
      {
        "input": "nums = [1,0,1,2]",
        "output": "3"
      }
    ],
    "constraints": [
      "0 <= nums.length <= 105",
      "109 <= nums[i] <= 109"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-129": {
    "id": "problem-129",
    "title": "Sum Root to Leaf Numbers",
    "difficulty": "Medium",
    "category": "Tree • Depth-First Search",
    "description": {
      "text": "You are given the root of a binary tree containing digits from 0 to 9 only.",
      "notes": [
        "You are given the root of a binary tree containing digits from 0 to 9 only. Each root-to-leaf path i... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,2,3]",
        "output": "25",
        "explanation": "The root-to-leaf path 1->2 represents the number 12. The root-to-leaf path 1->3 represents the number 13. Therefore, sum = 12 + 13 = 25."
      },
      {
        "input": "root = [4,9,0,5,1]",
        "output": "1026",
        "explanation": "The root-to-leaf path 4->9->5 represents the number 495. The root-to-leaf path 4->9->1 represents the number 491. The root-to-leaf path 4->0 represents the number 40. Therefore, sum = 495 + 491 + 40 = 1026."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-130": {
    "id": "problem-130",
    "title": "Surrounded Regions",
    "difficulty": "Medium",
    "category": "Array • Depth-First Search",
    "description": {
      "text": "You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded: Connect: A cell is connected to adjacent cells horizontally or vertically.",
      "notes": [
        "You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surroun... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "board = [[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        "explanation": "In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded."
      },
      {
        "input": "board = [[\"X\"]]",
        "output": "[[\"X\"]]"
      }
    ],
    "constraints": [
      "m == board.length n == board[i].length 1 <= m, n <= 200 board[i][j] is 'X' or 'O'."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-131": {
    "id": "problem-131",
    "title": "Palindrome Partitioning",
    "difficulty": "Medium",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given a string s, partition s such that every substring of the partition is a palindrome.",
      "notes": [
        "Given a string s, partition s such that every substring of the partition is a palindrome. Return all... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
      },
      {
        "input": "s = \"a\"",
        "output": "[[\"a\"]]"
      }
    ],
    "constraints": [
      "1 <= s.length <= 16 s contains only lowercase English letters."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-132": {
    "id": "problem-132",
    "title": "Palindrome Partitioning II",
    "difficulty": "Hard",
    "category": "String • Dynamic Programming",
    "description": {
      "text": "Given a string s, partition s such that every substring of the partition is a palindrome.",
      "notes": [
        "Given a string s, partition s such that every substring of the partition is a palindrome. Return the... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "1",
        "explanation": "The palindrome partitioning [\"aa\",\"b\"] could be produced using 1 cut."
      },
      {
        "input": "s = \"a\"",
        "output": "0"
      },
      {
        "input": "s = \"ab\"",
        "output": "1"
      }
    ],
    "constraints": [
      "1 <= s.length <= 2000 s consists of lowercase English letters only."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-133": {
    "id": "problem-133",
    "title": "Clone Graph",
    "difficulty": "Medium",
    "category": "Hash Table • Depth-First Search",
    "description": {
      "text": "Given a reference of a node in a connected undirected graph.",
      "notes": [
        "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]",
        "explanation": "There are 4 nodes in the graph. 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4). 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3). 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4). 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3)."
      },
      {
        "input": "adjList = [[]]",
        "output": "[[]]",
        "explanation": "Note that the input contains one empty list. The graph consists of only one node with val = 1 and it does not have any neighbors."
      },
      {
        "input": "adjList = []",
        "output": "[]",
        "explanation": "This an empty graph, it does not have any nodes."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-134": {
    "id": "problem-134",
    "title": "Gas Station",
    "difficulty": "Medium",
    "category": "Array • Greedy",
    "description": {
      "text": "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].",
      "notes": [
        "There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        "output": "3",
        "explanation": "Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4 Travel to station 4. Your tank = 4 - 1 + 5 = 8 Travel to station 0. Your tank = 8 - 2 + 1 = 7 Travel to station 1. Your tank = 7 - 3 + 2 = 6 Travel to station 2. Your tank = 6 - 4 + 3 = 5 Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3. Therefore, return 3 as the starting index."
      },
      {
        "input": "gas = [2,3,4], cost = [3,4,3]",
        "output": "-1",
        "explanation": "You can't start at station 0 or 1, as there is not enough gas to travel to the next station. Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4 Travel to station 0. Your tank = 4 - 3 + 2 = 3 Travel to station 1. Your tank = 3 - 3 + 3 = 3 You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3. Therefore, you can't travel around the circuit once no matter where you start."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-135": {
    "id": "problem-135",
    "title": "Candy",
    "difficulty": "Hard",
    "category": "Array • Greedy",
    "description": {
      "text": "There are n children standing in a line.",
      "notes": [
        "There are n children standing in a line. Each child is assigned a rating value given in the integer ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "ratings = [1,0,2]",
        "output": "5",
        "explanation": "You can allocate to the first, second and third child with 2, 1, 2 candies respectively."
      },
      {
        "input": "ratings = [1,2,2]",
        "output": "4",
        "explanation": "You can allocate to the first, second and third child with 1, 2, 1 candies respectively. The third child gets 1 candy because it satisfies the above two conditions."
      }
    ],
    "constraints": [
      "n == ratings.length 1 <= n <= 2 * 104 0 <= ratings[i] <= 2 * 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-136": {
    "id": "problem-136",
    "title": "Single Number",
    "difficulty": "Easy",
    "category": "Array • Bit Manipulation",
    "description": {
      "text": "Given a non-empty array of integers nums, every element appears twice except for one.",
      "notes": [
        "Given a non-empty array of integers nums, every element appears twice except for one. Find that sing... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,2,1]",
        "output": "1"
      },
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4"
      },
      {
        "input": "nums = [1]",
        "output": "1"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 3 * 104"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-137": {
    "id": "problem-137",
    "title": "Single Number II",
    "difficulty": "Medium",
    "category": "Array • Bit Manipulation",
    "description": {
      "text": "Given an integer array nums where every element appears three times except for one, which appears exactly once.",
      "notes": [
        "Given an integer array nums where every element appears three times except for one, which appears ex... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "nums = [2,2,3,2]",
        "output": "3"
      },
      {
        "input": "nums = [0,1,0,1,0,1,99]",
        "output": "99"
      }
    ],
    "constraints": [
      "1 <= nums.length <= 3 * 104",
      "231 <= nums[i] <= 231",
      "1 Each element in nums appears exactly three times except for one element which appears once."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-138": {
    "id": "problem-138",
    "title": "Copy List with Random Pointer",
    "difficulty": "Medium",
    "category": "Hash Table • Linked List",
    "description": {
      "text": "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.",
      "notes": [
        "A linked list of length n is given such that each node contains an additional random pointer, which ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]"
      },
      {
        "input": "head = [[1,1],[2,1]]",
        "output": "[[1,1],[2,1]]"
      },
      {
        "input": "head = [[3,null],[3,0],[3,null]]",
        "output": "[[3,null],[3,0],[3,null]]"
      }
    ],
    "constraints": [
      "0 <= n <= 1000",
      "104 <= Node.val <= 104 Node.random is null or is pointing to some node in the linked list."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-139": {
    "id": "problem-139",
    "title": "Word Break",
    "difficulty": "Medium",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
      "notes": [
        "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a spac... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": "Return true because \"leetcode\" can be segmented as \"leet code\"."
      },
      {
        "input": "s = \"applepenapple\", wordDict = [\"apple\",\"pen\"]",
        "output": "true",
        "explanation": "Return true because \"applepenapple\" can be segmented as \"apple pen apple\". Note that you are allowed to reuse a dictionary word."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "false"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-140": {
    "id": "problem-140",
    "title": "Word Break II",
    "difficulty": "Hard",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word.",
      "notes": [
        "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
        "output": "[\"cats and dog\",\"cat sand dog\"]"
      },
      {
        "input": "s = \"pineapplepenapple\", wordDict = [\"apple\",\"pen\",\"applepen\",\"pine\",\"pineapple\"]",
        "output": "[\"pine apple pen apple\",\"pineapple pen apple\",\"pine applepen apple\"]",
        "explanation": "Note that you are allowed to reuse a dictionary word."
      },
      {
        "input": "s = \"catsandog\", wordDict = [\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-141": {
    "id": "problem-141",
    "title": "Linked List Cycle",
    "difficulty": "Easy",
    "category": "Hash Table • Linked List",
    "description": {
      "text": "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
      "notes": [
        "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cy... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "true",
        "explanation": "There is a cycle in the linked list, where the tail connects to the 0th node."
      },
      {
        "input": "head = [1], pos = -1",
        "output": "false",
        "explanation": "There is no cycle in the linked list."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-142": {
    "id": "problem-142",
    "title": "Linked List Cycle II",
    "difficulty": "Medium",
    "category": "Hash Table • Linked List",
    "description": {
      "text": "Given the head of a linked list, return the node where the cycle begins.",
      "notes": [
        "Given the head of a linked list, return the node where the cycle begins. If there is no cycle, retur... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [3,2,0,-4], pos = 1",
        "output": "tail connects to node index 1",
        "explanation": "There is a cycle in the linked list, where tail connects to the second node."
      },
      {
        "input": "head = [1,2], pos = 0",
        "output": "tail connects to node index 0",
        "explanation": "There is a cycle in the linked list, where tail connects to the first node."
      },
      {
        "input": "head = [1], pos = -1",
        "output": "no cycle",
        "explanation": "There is no cycle in the linked list."
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-143": {
    "id": "problem-143",
    "title": "Reorder List",
    "difficulty": "Medium",
    "category": "Linked List • Two Pointers",
    "description": {
      "text": "You are given the head of a singly linked-list.",
      "notes": [
        "You are given the head of a singly linked-list. The list can be represented as: L0 &rarr; L1 &rarr; ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [1,2,3,4]",
        "output": "[1,4,2,3]"
      },
      {
        "input": "head = [1,2,3,4,5]",
        "output": "[1,5,2,4,3]"
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [1, 5 * 104]. 1 <= Node.val <= 1000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-144": {
    "id": "problem-144",
    "title": "Binary Tree Preorder Traversal",
    "difficulty": "Easy",
    "category": "Stack • Tree",
    "description": {
      "text": "Given the root of a binary tree, return the preorder traversal of its nodes' values.",
      "notes": [
        "Given the root of a binary tree, return the preorder traversal of its nodes' values. Example 1: Inpu... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,null,2,3]",
        "output": "[1,2,3]",
        "explanation": ""
      },
      {
        "input": "root = [1,2,3,4,5,null,8,null,null,6,7,9]",
        "output": "[1,2,4,5,6,7,3,8,9]",
        "explanation": ""
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-145": {
    "id": "problem-145",
    "title": "Binary Tree Postorder Traversal",
    "difficulty": "Easy",
    "category": "Stack • Tree",
    "description": {
      "text": "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
      "notes": [
        "Given the root of a binary tree, return the postorder traversal of its nodes' values. Example 1: Inp... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "root = [1,null,2,3]",
        "output": "[3,2,1]",
        "explanation": ""
      },
      {
        "input": "root = [1,2,3,4,5,null,8,null,null,6,7,9]",
        "output": "[4,6,7,5,2,9,8,3,1]",
        "explanation": ""
      },
      {
        "input": "root = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-146": {
    "id": "problem-146",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "category": "Hash Table • Linked List",
    "description": {
      "text": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.",
      "notes": [
        "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "See description",
        "output": "See description"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-147": {
    "id": "problem-147",
    "title": "Insertion Sort List",
    "difficulty": "Medium",
    "category": "Linked List • Sorting",
    "description": {
      "text": "Given the head of a singly linked list, sort the list using insertion sort, and return the sorted list's head.",
      "notes": [
        "Given the head of a singly linked list, sort the list using insertion sort, and return the sorted li... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [4,2,1,3]",
        "output": "[1,2,3,4]"
      },
      {
        "input": "head = [-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]"
      }
    ],
    "constraints": [
      "The number of nodes in the list is in the range [1, 5000]. -5000 <= Node.val <= 5000"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-148": {
    "id": "problem-148",
    "title": "Sort List",
    "difficulty": "Medium",
    "category": "Linked List • Two Pointers",
    "description": {
      "text": "Given the head of a linked list, return the list after sorting it in ascending order.",
      "notes": [
        "Given the head of a linked list, return the list after sorting it in ascending order. Example 1: Inp... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "head = [4,2,1,3]",
        "output": "[1,2,3,4]"
      },
      {
        "input": "head = [-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]"
      },
      {
        "input": "head = []",
        "output": "[]"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-149": {
    "id": "problem-149",
    "title": "Max Points on a Line",
    "difficulty": "Hard",
    "category": "Array • Hash Table",
    "description": {
      "text": "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.",
      "notes": [
        "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the ... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "points = [[1,1],[2,2],[3,3]]",
        "output": "3"
      },
      {
        "input": "points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]",
        "output": "4"
      }
    ],
    "constraints": [
      "1 <= points.length <= 300 points[i].length == 2",
      "104 <= xi, yi <= 104 All the points are unique."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  },
  "problem-150": {
    "id": "problem-150",
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "category": "Array • Math",
    "description": {
      "text": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.",
      "notes": [
        "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polis... (See full description on web)"
      ]
    },
    "examples": [
      {
        "input": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "((2 + 1) * 3) = 9"
      },
      {
        "input": "tokens = [\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "explanation": "(4 + (13 / 5)) = 6"
      },
      {
        "input": "tokens = [\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
        "output": "22",
        "explanation": "((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = ((10 * (6 / (12 * -11))) + 17) + 5 = ((10 * (6 / -132)) + 17) + 5 = ((10 * 0) + 17) + 5 = (0 + 17) + 5 = 17 + 5 = 22"
      }
    ],
    "constraints": [
      "See description"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {any} input\n * @return {any}\n */\nfunction solve(input) {\n  // Write your solution here\n  \n}",
      "python": "def solve(input):\n    # Write your solution here\n    pass",
      "java": "class Solution {\n    public Object solve(Object input) {\n        // Write your solution here\n        return null;\n    }\n}"
    },
    "expectedOutput": {
      "javascript": "Run tests to see output",
      "python": "Run tests to see output",
      "java": "Run tests to see output"
    }
  }
};

export const LANGUAGE_CONFIG: Record<string, { name: string; icon: string; monacoLang: string }> = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};
