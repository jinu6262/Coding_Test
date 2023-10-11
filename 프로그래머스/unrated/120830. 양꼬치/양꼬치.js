function solution(n, k) {
    const nPrice = 12000
    const kPrice = 2000
    
    const nTotal = n * nPrice
    const kTotal = (k - parseInt(n/10)) * kPrice
    
    return nTotal + kTotal;
}