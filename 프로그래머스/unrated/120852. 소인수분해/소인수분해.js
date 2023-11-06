function solution(n) {
    let arr = []
    for(let i = 1; i<=n; i++){
        if(n%i === 0){
            let count = 0
            for(let j = 1; j<=i; j++){
                if(i%j === 0) count++
            }
            if(count === 2) arr.push(i)
        }
        
    }
    return arr;
}