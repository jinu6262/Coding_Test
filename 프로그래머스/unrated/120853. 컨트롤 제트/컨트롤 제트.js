function solution(s) {
    const arr = s.split(" ");
    let sum = 0;
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==='Z') sum = sum - Number(arr[i-1])
        else sum = sum + Number(arr[i])
    }
    
    return sum;
}