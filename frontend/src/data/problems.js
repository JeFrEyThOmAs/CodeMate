export const PROBLEMS = {
    "two-sum": {
      id: "two-sum",
      title: "Two Sum",
      difficulty: "Easy",
      category: "Array • Hash Table",
      description: {
        text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
        notes: [
          "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
          "You can return the answer in any order.",
        ],
      },
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
        },
        {
          input: "nums = [3,2,4], target = 6",
          output: "[1,2]",
        },
        {
          input: "nums = [3,3], target = 6",
          output: "[0,1]",
        },
      ],
      constraints: [
        "2 ≤ nums.length ≤ 10⁴",
        "-10⁹ ≤ nums[i] ≤ 10⁹",
        "-10⁹ ≤ target ≤ 10⁹",
        "Only one valid answer exists",
      ],
      starterCode: {
        javascript: `function twoSum(nums, target) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
  console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
  console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
        python: `def twoSum(nums, target):
      # Write your solution here
      pass
  
  # Test cases
  print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
  print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
  print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
        java: `import java.util.*;
  
  class Solution {
      public static int[] twoSum(int[] nums, int target) {
          // Write your solution here
          
          return new int[0];
      }
      
      public static void main(String[] args) {
          System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
          System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
      }
  }`,
      },
      expectedOutput: {
        javascript: "[0,1]\n[1,2]\n[0,1]",
        python: "[0, 1]\n[1, 2]\n[0, 1]",
        java: "[0, 1]\n[1, 2]\n[0, 1]",
      },
    },
  
    "reverse-string": {
      id: "reverse-string",
      title: "Reverse String",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "Write a function that reverses a string. The input string is given as an array of characters s.",
        notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
      },
      examples: [
        {
          input: 's = ["h","e","l","l","o"]',
          output: '["o","l","l","e","h"]',
        },
        {
          input: 's = ["H","a","n","n","a","h"]',
          output: '["h","a","n","n","a","H"]',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
      starterCode: {
        javascript: `function reverseString(s) {
    // Write your solution here
    
  }
  
  // Test cases
  let test1 = ["h","e","l","l","o"];
  reverseString(test1);
  console.log(test1); // Expected: ["o","l","l","e","h"]
  
  let test2 = ["H","a","n","n","a","h"];
  reverseString(test2);
  console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
        python: `def reverseString(s):
      # Write your solution here
      pass
  
  # Test cases
  test1 = ["h","e","l","l","o"]
  reverseString(test1)
  print(test1)  # Expected: ["o","l","l","e","h"]
  
  test2 = ["H","a","n","n","a","h"]
  reverseString(test2)
  print(test2)  # Expected: ["h","a","n","n","a","H"]`,
        java: `import java.util.*;
  
  class Solution {
      public static void reverseString(char[] s) {
          // Write your solution here
          
      }
      
      public static void main(String[] args) {
          char[] test1 = {'h','e','l','l','o'};
          reverseString(test1);
          System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
          
          char[] test2 = {'H','a','n','n','a','h'};
          reverseString(test2);
          System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
      }
  }`,
      },
      expectedOutput: {
        javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
        python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
        java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      },
    },
  
    "valid-palindrome": {
      id: "valid-palindrome",
      title: "Valid Palindrome",
      difficulty: "Easy",
      category: "String • Two Pointers",
      description: {
        text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
        notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
      },
      examples: [
        {
          input: 's = "A man, a plan, a canal: Panama"',
          output: "true",
          explanation: '"amanaplanacanalpanama" is a palindrome.',
        },
        {
          input: 's = "race a car"',
          output: "false",
          explanation: '"raceacar" is not a palindrome.',
        },
        {
          input: 's = " "',
          output: "true",
          explanation:
            's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
        },
      ],
      constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
      starterCode: {
        javascript: `function isPalindrome(s) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
  console.log(isPalindrome("race a car")); // Expected: false
  console.log(isPalindrome(" ")); // Expected: true`,
        python: `def isPalindrome(s):
      # Write your solution here
      pass
  
  # Test cases
  print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
  print(isPalindrome("race a car"))  # Expected: False
  print(isPalindrome(" "))  # Expected: True`,
        java: `class Solution {
      public static boolean isPalindrome(String s) {
          // Write your solution here
          
          return false;
      }
      
      public static void main(String[] args) {
          System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
          System.out.println(isPalindrome("race a car")); // Expected: false
          System.out.println(isPalindrome(" ")); // Expected: true
      }
  }`,
      },
      expectedOutput: {
        javascript: "true\nfalse\ntrue",
        python: "True\nFalse\nTrue",
        java: "true\nfalse\ntrue",
      },
    },
  
    "maximum-subarray": {
      id: "maximum-subarray",
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Array • Dynamic Programming",
      description: {
        text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
        notes: [],
      },
      examples: [
        {
          input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
          output: "6",
          explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
        },
        {
          input: "nums = [1]",
          output: "1",
          explanation: "The subarray [1] has the largest sum 1.",
        },
        {
          input: "nums = [5,4,-1,7,8]",
          output: "23",
          explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
        },
      ],
      constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxSubArray(nums) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
  console.log(maxSubArray([1])); // Expected: 1
  console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
        python: `def maxSubArray(nums):
      # Write your solution here
      pass
  
  # Test cases
  print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
  print(maxSubArray([1]))  # Expected: 1
  print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
        java: `class Solution {
      public static int maxSubArray(int[] nums) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
          System.out.println(maxSubArray(new int[]{1})); // Expected: 1
          System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
      }
  }`,
      },
      expectedOutput: {
        javascript: "6\n1\n23",
        python: "6\n1\n23",
        java: "6\n1\n23",
      },
    },
  
    "container-with-most-water": {
      id: "container-with-most-water",
      title: "Container With Most Water",
      difficulty: "Medium",
      category: "Array • Two Pointers",
      description: {
        text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
        notes: [
          "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
          "Return the maximum amount of water a container can store.",
          "Notice that you may not slant the container.",
        ],
      },
      examples: [
        {
          input: "height = [1,8,6,2,5,4,8,3,7]",
          output: "49",
          explanation:
            "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
        },
        {
          input: "height = [1,1]",
          output: "1",
        },
      ],
      constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
      starterCode: {
        javascript: `function maxArea(height) {
    // Write your solution here
    
  }
  
  // Test cases
  console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
  console.log(maxArea([1,1])); // Expected: 1`,
        python: `def maxArea(height):
      # Write your solution here
      pass
  
  # Test cases
  print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
  print(maxArea([1,1]))  # Expected: 1`,
        java: `class Solution {
      public static int maxArea(int[] height) {
          // Write your solution here
          
          return 0;
      }
      
      public static void main(String[] args) {
          System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
          System.out.println(maxArea(new int[]{1,1})); // Expected: 1
      }
  }`,
      },
      expectedOutput: {
        javascript: "49\n1",
        python: "49\n1",
        java: "49\n1",
      },
    },
      "move-zeroes": {
        "id": "move-zeroes",
        "title": "Move Zeroes",
        "difficulty": "Easy",
        "category": "Array • Two Pointers",
        "description": {
          "text": "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
          "notes": [
            "You must do this in-place without making a copy of the array.",
            "Minimize the total number of operations."
          ]
        },
        "examples": [
          {
            "input": "nums = [0,1,0,3,12]",
            "output": "[1,3,12,0,0]"
          },
          {
            "input": "nums = [0]",
            "output": "[0]"
          }
        ],
        "constraints": [
          "1 ≤ nums.length ≤ 10⁴",
          "-2³¹ ≤ nums[i] ≤ 2³¹ - 1"
        ],
        "starterCode": {
          "javascript": "function moveZeroes(nums) {\n  // Write your solution here\n}\n\nlet arr = [0,1,0,3,12];\nmoveZeroes(arr);\nconsole.log(arr); // Expected: [1,3,12,0,0]",
          "python": "def moveZeroes(nums):\n    pass\n\narr = [0,1,0,3,12]\nmoveZeroes(arr)\nprint(arr)",
          "java": "class Solution {\n    public static void moveZeroes(int[] nums) {\n        // Write your solution here\n    }\n}"
        }
      },
    
      "best-time-to-buy-sell-stock": {
        "id": "best-time-to-buy-sell-stock",
        "title": "Best Time to Buy and Sell Stock",
        "difficulty": "Easy",
        "category": "Array • Greedy",
        "description": {
          "text": "You are given an array prices where prices[i] is the price of a stock on the ith day. Return the maximum profit you can achieve.",
          "notes": [
            "You may complete at most one transaction.",
            "You must buy before you sell."
          ]
        },
        "examples": [
          {
            "input": "prices = [7,1,5,3,6,4]",
            "output": "5"
          },
          {
            "input": "prices = [7,6,4,3,1]",
            "output": "0"
          }
        ],
        "constraints": [
          "1 ≤ prices.length ≤ 10⁵",
          "0 ≤ prices[i] ≤ 10⁴"
        ],
        "starterCode": {
          "javascript": "function maxProfit(prices) {\n  // Write your solution here\n}\n\nconsole.log(maxProfit([7,1,5,3,6,4])); // Expected: 5",
          "python": "def maxProfit(prices):\n    pass\n\nprint(maxProfit([7,1,5,3,6,4]))",
          "java": "class Solution {\n    public static int maxProfit(int[] prices) {\n        return 0;\n    }\n}"
        }
      },
    
      "longest-substring-without-repeating": {
        "id": "longest-substring-without-repeating",
        "title": "Longest Substring Without Repeating Characters",
        "difficulty": "Medium",
        "category": "String • Sliding Window",
        "description": {
          "text": "Given a string s, find the length of the longest substring without repeating characters.",
          "notes": [
            "Substring must be contiguous."
          ]
        },
        "examples": [
          {
            "input": "s = \"abcabcbb\"",
            "output": "3"
          },
          {
            "input": "s = \"bbbbb\"",
            "output": "1"
          }
        ],
        "constraints": [
          "0 ≤ s.length ≤ 5 * 10⁴",
          "s consists of English letters, digits, symbols and spaces"
        ],
        "starterCode": {
          "javascript": "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}\n\nconsole.log(lengthOfLongestSubstring(\"abcabcbb\")); // Expected: 3",
          "python": "def lengthOfLongestSubstring(s):\n    pass\n\nprint(lengthOfLongestSubstring(\"abcabcbb\"))",
          "java": "class Solution {\n    public static int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}"
        }
      },
    
      "product-of-array-except-self": {
        "id": "product-of-array-except-self",
        "title": "Product of Array Except Self",
        "difficulty": "Medium",
        "category": "Array • Prefix Sum",
        "description": {
          "text": "Given an integer array nums, return an array answer such that answer[i] is the product of all elements of nums except nums[i].",
          "notes": [
            "You must solve it without division.",
            "Time complexity O(n)."
          ]
        },
        "examples": [
          {
            "input": "nums = [1,2,3,4]",
            "output": "[24,12,8,6]"
          }
        ],
        "constraints": [
          "2 ≤ nums.length ≤ 10⁵",
          "-30 ≤ nums[i] ≤ 30"
        ],
        "starterCode": {
          "javascript": "function productExceptSelf(nums) {\n  // Write your solution here\n}\n\nconsole.log(productExceptSelf([1,2,3,4]));",
          "python": "def productExceptSelf(nums):\n    pass\n\nprint(productExceptSelf([1,2,3,4]))",
          "java": "class Solution {\n    public static int[] productExceptSelf(int[] nums) {\n        return new int[0];\n    }\n}"
        }
      },
    
      "merge-intervals": {
        "id": "merge-intervals",
        "title": "Merge Intervals",
        "difficulty": "Medium",
        "category": "Array • Sorting",
        "description": {
          "text": "Given an array of intervals, merge all overlapping intervals.",
          "notes": [
            "Intervals are represented as [start, end]."
          ]
        },
        "examples": [
          {
            "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
            "output": "[[1,6],[8,10],[15,18]]"
          }
        ],
        "constraints": [
          "1 ≤ intervals.length ≤ 10⁴",
          "intervals[i].length == 2"
        ],
        "starterCode": {
          "javascript": "function merge(intervals) {\n  // Write your solution here\n}\n\nconsole.log(merge([[1,3],[2,6],[8,10],[15,18]]));",
          "python": "def merge(intervals):\n    pass\n\nprint(merge([[1,3],[2,6],[8,10],[15,18]]))",
          "java": "class Solution {\n    public static int[][] merge(int[][] intervals) {\n        return new int[0][0];\n    }\n}"
        }
      },
        "contains-duplicate": {
          "id": "contains-duplicate",
          "title": "Contains Duplicate",
          "difficulty": "Easy",
          "category": "Array • Hash Table",
          "description": {
            "text": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
            "notes": []
          },
          "examples": [
            {
              "input": "nums = [1,2,3,1]",
              "output": "true"
            },
            {
              "input": "nums = [1,2,3,4]",
              "output": "false"
            }
          ],
          "constraints": [
            "1 ≤ nums.length ≤ 10⁵",
            "-10⁹ ≤ nums[i] ≤ 10⁹"
          ],
          "starterCode": {
            "javascript": "function containsDuplicate(nums) {\n  // Write your solution here\n}\n\nconsole.log(containsDuplicate([1,2,3,1]));",
            "python": "def containsDuplicate(nums):\n    pass\n\nprint(containsDuplicate([1,2,3,1]))",
            "java": "class Solution {\n    public static boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n}"
          }
        },
      
        "valid-anagram": {
          "id": "valid-anagram",
          "title": "Valid Anagram",
          "difficulty": "Easy",
          "category": "String • Hash Table",
          "description": {
            "text": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
            "notes": []
          },
          "examples": [
            {
              "input": "s = \"anagram\", t = \"nagaram\"",
              "output": "true"
            },
            {
              "input": "s = \"rat\", t = \"car\"",
              "output": "false"
            }
          ],
          "constraints": [
            "1 ≤ s.length, t.length ≤ 5 * 10⁴",
            "s and t consist of lowercase English letters"
          ],
          "starterCode": {
            "javascript": "function isAnagram(s, t) {\n  // Write your solution here\n}\n\nconsole.log(isAnagram(\"anagram\", \"nagaram\"));",
            "python": "def isAnagram(s, t):\n    pass\n\nprint(isAnagram(\"anagram\", \"nagaram\"))",
            "java": "class Solution {\n    public static boolean isAnagram(String s, String t) {\n        return false;\n    }\n}"
          }
        },
      
        "two-sum-ii": {
          "id": "two-sum-ii",
          "title": "Two Sum II - Input Array Is Sorted",
          "difficulty": "Medium",
          "category": "Array • Two Pointers",
          "description": {
            "text": "Given a 1-indexed array of integers numbers that is already sorted, find two numbers such that they add up to a specific target.",
            "notes": [
              "You may not use the same element twice.",
              "Return the indices of the two numbers added by 1."
            ]
          },
          "examples": [
            {
              "input": "numbers = [2,7,11,15], target = 9",
              "output": "[1,2]"
            }
          ],
          "constraints": [
            "2 ≤ numbers.length ≤ 3 * 10⁴",
            "-1000 ≤ numbers[i] ≤ 1000"
          ],
          "starterCode": {
            "javascript": "function twoSum(numbers, target) {\n  // Write your solution here\n}\n\nconsole.log(twoSum([2,7,11,15], 9));",
            "python": "def twoSum(numbers, target):\n    pass\n\nprint(twoSum([2,7,11,15], 9))",
            "java": "class Solution {\n    public static int[] twoSum(int[] numbers, int target) {\n        return new int[0];\n    }\n}"
          }
        },
      
        "group-anagrams": {
          "id": "group-anagrams",
          "title": "Group Anagrams",
          "difficulty": "Medium",
          "category": "String • Hash Table",
          "description": {
            "text": "Given an array of strings strs, group the anagrams together.",
            "notes": [
              "The order of output does not matter."
            ]
          },
          "examples": [
            {
              "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
              "output": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]"
            }
          ],
          "constraints": [
            "1 ≤ strs.length ≤ 10⁴",
            "0 ≤ strs[i].length ≤ 100"
          ],
          "starterCode": {
            "javascript": "function groupAnagrams(strs) {\n  // Write your solution here\n}\n\nconsole.log(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]));",
            "python": "def groupAnagrams(strs):\n    pass\n\nprint(groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]))",
            "java": "class Solution {\n    public static List<List<String>> groupAnagrams(String[] strs) {\n        return new ArrayList<>();\n    }\n}"
          }
        },
      
        "longest-consecutive-sequence": {
          "id": "longest-consecutive-sequence",
          "title": "Longest Consecutive Sequence",
          "difficulty": "Medium",
          "category": "Array • Hash Set",
          "description": {
            "text": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
            "notes": [
              "You must write an algorithm that runs in O(n) time."
            ]
          },
          "examples": [
            {
              "input": "nums = [100,4,200,1,3,2]",
              "output": "4"
            }
          ],
          "constraints": [
            "0 ≤ nums.length ≤ 10⁵",
            "-10⁹ ≤ nums[i] ≤ 10⁹"
          ],
          "starterCode": {
            "javascript": "function longestConsecutive(nums) {\n  // Write your solution here\n}\n\nconsole.log(longestConsecutive([100,4,200,1,3,2]));",
            "python": "def longestConsecutive(nums):\n    pass\n\nprint(longestConsecutive([100,4,200,1,3,2]))",
            "java": "class Solution {\n    public static int longestConsecutive(int[] nums) {\n        return 0;\n    }\n}"
          }
        }
      
      
    
  };
  
  export const LANGUAGE_CONFIG = {
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

