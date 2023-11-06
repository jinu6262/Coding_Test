function solution(numbers, k) {
    let point = 1
    for(let i = 1; i<k; i++){
        point = point + 2
        if(point-numbers.length === 1) point = 1
        if(point-numbers.length === 2) point = 2    
    }
    return point;
}