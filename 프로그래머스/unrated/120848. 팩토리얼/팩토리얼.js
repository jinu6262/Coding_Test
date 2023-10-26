function solution(n) {
    let num = 0
    while(true){
        let f = 1
        for(let i = 1; i<=num; i++){
            f = f*i
        }
        if(f>n) break
        num++
    }
    
    return num-1
}