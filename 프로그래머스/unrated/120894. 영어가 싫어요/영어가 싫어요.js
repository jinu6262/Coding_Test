function solution(numbers) {
    const stn_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    for(let i = 0; i<10; i++){
        numbers = numbers.replaceAll(stn_list[i], i)
    }
    
    return Number(numbers);
}