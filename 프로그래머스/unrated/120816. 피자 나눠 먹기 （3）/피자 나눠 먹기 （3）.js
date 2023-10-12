function solution(slice, n) {
    // slice 조각 수
    // n 사람 수
    let pizza = parseInt(n/slice)
    
    if(n%slice >= 1) pizza = pizza + 1
    
    return pizza;
}