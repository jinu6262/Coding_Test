function solution(sides) {
    const max = Math.max(...sides) // 3
    let sum = 0;
    
    sides.forEach(num => {
        sum += num;        
    })
    
    if(sum-max <= max) return 2
    
    return 1;
}