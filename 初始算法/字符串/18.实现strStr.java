class Solution {
    public int strStr(String haystack, String needle) {
        int nLen = needle.length();
        if(nLen == 0) {
            return 0;
        }
        int hLen = haystack.length();
        int result = -1;
        for(int i = 0;i < hLen;i++) {
            if(haystack.charAt(i) == needle.charAt(0)) {
                result = i;
                for(int j = 1;j < nLen;j++) {
                    if((i + j) >= hLen || haystack.charAt(i + j) != needle.charAt(j)) {
                        result = -1;
                        break;
                    }
                }
            }
            if(result != -1) {
                break;
            }
        }
        
        return result;
    }
}