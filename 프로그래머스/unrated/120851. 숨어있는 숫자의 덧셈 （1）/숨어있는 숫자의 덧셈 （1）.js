function solution(my_string) {
    let my_arr = my_string.split('')
    const arr = my_arr.filter(c => Number(c))
    let sum = 0
    arr.map(n => sum = sum + Number(n))
    
    return sum;
}