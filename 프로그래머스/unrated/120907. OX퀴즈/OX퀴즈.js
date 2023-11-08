function solution(quiz) {
    let result = []
    
    for(let i = 0; i<quiz.length; i++){
        let arr = quiz[i].split(' ')

        if(arr[1] === "+" && Number(arr[0]) + Number(arr[2]) === Number(arr[arr.length-1])) result.push('O')        
        else if(arr[1] === "-" && Number(arr[0]) - Number(arr[2]) === Number(arr[arr.length-1])) result.push('O')
        else result.push('X')
    }
    
    return result;
}