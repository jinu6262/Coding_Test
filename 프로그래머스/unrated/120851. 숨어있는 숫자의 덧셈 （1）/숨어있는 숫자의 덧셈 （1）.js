function solution(my_string) {
    let sum = 0
    const arr = [...my_string].filter(c => Number(c)).map(n => sum = sum + Number(n))
    
    return sum;
}