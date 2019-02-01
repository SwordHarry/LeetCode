class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map map = new HashMap();
        int len = nums.length;
        int[] result = new int[2];
        for(int i = 0;i < len;i++) {
            if(map.get(target - nums[i]) != null) {
                result[0] = (int)map.get(target-nums[i]);
                result[1] = i;
                return result;
            }
            map.put(nums[i],i);
        }
        return null;
    }
}