var permuteUnique = function(nums) {
    let solve = (nums, cur, ans, seen) => {
        if (cur.length > nums.length) return;
        
        if (cur.length == nums.length) {
            ans.push(cur.slice(0));
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (seen.has(i)) continue;
            if (i - 1 >= 0 && seen.has(i-1) === false && nums[i] == nums[i-1]) continue;
            seen.add(i);
            cur.push(nums[i]);
            
            solve(nums, cur, ans, seen);
            
            cur.pop();
            seen.delete(i);
        }
    }
    
    ans = [];
    seen = new Set();
    nums.sort((a, b) => a-b);
    solve(nums, [], ans, seen);
    return ans;
};
