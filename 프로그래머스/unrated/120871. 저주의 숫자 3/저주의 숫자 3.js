function solution(n) {
    let count = 0
    for(let i = 1; i<=n; i++){
        count += 1
        while(count%3===0 || count.toString().indexOf('3') >= 0) count += 1
    }
    return count;
}