function solution(balls, share) {      
    return factorial(balls)/(factorial(balls-share)*factorial(share))
}

function factorial(n) {
    let result = BigInt(1);
    for (let i = 1; i <= n; i++) {
        result *= BigInt(i)
    }

    return result
}
