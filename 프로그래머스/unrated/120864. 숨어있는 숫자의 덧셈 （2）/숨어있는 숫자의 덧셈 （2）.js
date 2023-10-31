function solution(my_string) {
    let sum = 0;
    my_string.split(/[A-Za-z]+/).map(num => sum = sum + Number(num))
    
    return sum
}