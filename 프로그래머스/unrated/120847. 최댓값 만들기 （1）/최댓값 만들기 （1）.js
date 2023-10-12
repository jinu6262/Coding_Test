function solution(numbers) {
    const maxValue = Math.max(...numbers);
    let arr = numbers.filter((num) => num === maxValue);
    if(arr.length > 1) return maxValue * maxValue
    
    arr = numbers.filter((num) => num !== maxValue);
    const maxValue2 = Math.max(...arr);
    
    
    
    return maxValue * maxValue2;
}