function solution(s1, s2) {
    let count = 0
    for(i=0;i<s1.length;i++){
        for(j=0;j<s2.length;j++){
            if(s1[i] === s2[j]) count++
        }
    }
    return count;
}

// filter 메소드를 사용한 방법도 있음