var letterCombinations = function(digits) {
    if (!digits) return []
    const keyMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const solution = []
    function generateCombinations (selection = [], curIndex = 0) {
        if (selection.length === digits.length) solution.push(selection)
        if (curIndex === digits.length) return
        for (const choice of keyMap[digits[curIndex]])
            generateCombinations([...selection, choice], curIndex + 1)
    }
    generateCombinations()
    return solution.reduce((acc, cur) => [...acc, cur.join('')], [])
};


