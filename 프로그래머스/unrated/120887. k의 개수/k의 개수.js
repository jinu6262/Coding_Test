function solution(i, j, k) {
    let result = 0
    for(let num = i; num<=j; num++){
        result = result + [...num.toString()].filter(element => k.toString() === element).length;
    }
    return result;
}