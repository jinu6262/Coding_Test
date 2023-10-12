function solution(n) {
    let count = 0;
    for(i=n;i>0;i=i-1){
        if(n%i===0) count++
    }
    return count;
}