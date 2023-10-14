function solution(numbers) {
    let max = numbers[0]*numbers[1]
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            const value = numbers[i]*numbers[j]
            if(max < value){
                max = value
            }
        }
    }
    return max;
}