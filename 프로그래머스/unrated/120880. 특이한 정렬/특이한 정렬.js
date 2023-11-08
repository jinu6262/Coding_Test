function solution(numlist, n) {
    let arr = numlist.sort((a, b)=> Math.abs(n-a) - Math.abs(n-b))
    
    for(let i = 0; i<arr.length-1; i++){
        if(Math.abs(n-arr[i]) === Math.abs(n-arr[i+1]) && arr[i] < arr[i+1]) {
            let item = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = item;
        }
    }

    return arr;
}