function solution(num, k) {
    const result = num.toString().indexOf(k.toString())
    if(result !== -1) return result+1
    return result
}