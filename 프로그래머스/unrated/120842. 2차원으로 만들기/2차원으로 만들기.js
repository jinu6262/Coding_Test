function solution(num_list, n) {
    const result = []
    for(let i = 0; i<num_list.length; i = i+n){
        const arr = []
        for(let j = 0; j<n; j++) {
            arr.push(num_list[i+j])    
        }
        result.push(arr)
    }
    return result;
}