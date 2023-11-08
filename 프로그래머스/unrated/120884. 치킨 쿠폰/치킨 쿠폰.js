function solution(chicken) {
    let sum = 0
    
    while(1){
        sum += parseInt(chicken / 10)
        chicken = parseInt(chicken / 10) + chicken % 10
        
        if(chicken < 10) return sum
    }
}



