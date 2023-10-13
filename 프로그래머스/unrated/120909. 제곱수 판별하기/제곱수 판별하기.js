function solution(n) {
    // 제곱수의 약수의 개수는 항상 홀수이다
    let count = 0
    for(i=1; i<=n; i++){
        if(n%i === 0) count++
    }
    
    if(count%2) return 1
    
    return 2
}