function solution(polynomial) {
    const arr = polynomial.split(" ")
    let x = 0
    let sum = 0
    let stn = ""
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i].indexOf('x') !== -1) {
            if(Number(arr[i].replace('x', '')) === 0) x += 1
            else x += Number(arr[i].replace('x', ''))
        }
        else if(arr[i] !== '+') sum += Number(arr[i])
    }
    
    if(x > 0) stn = `${x}x`
    if(x === 1) stn = `x`
    if(x > 0 && sum > 0) stn += ` + ${sum}`
    if(x === 0 && sum > 0) stn += `${sum}`    
    
    return stn
}