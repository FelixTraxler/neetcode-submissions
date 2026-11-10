class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        for row in range(9):
            nums = set([])
            for col in range(9):
                c = board[row][col]
                if c in nums:
                    return False
                if c != ".":
                    nums.add(c)

        for col in range(9):
            nums = set([])
            for row in range(9):
                c = board[row][col]
                if c in nums:
                    return False
                if c != ".":
                    nums.add(c)    

        for i in range(3):
            for j in range(3):
                nums = set([])
                for x in range(3):
                    for y in range(3):
                        c = board[3*i+y][3*j+x]
                        if c in nums:
                            return False
                        if c != ".":
                            nums.add(c)

        return True
