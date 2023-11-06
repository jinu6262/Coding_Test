function solution(numbers) {
    const stn_list = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    const num_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    for(let i = 0; i<10; i++){
        numbers = numbers.replaceAll(stn_list[i], num_list[i])
    }
    return Number(numbers);
}