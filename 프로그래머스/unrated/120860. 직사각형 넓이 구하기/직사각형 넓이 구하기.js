function solution(dots) {    
    const point1 = dots[0][0]
    const point2 = dots[0][1]
    let max_x = 0
    let min_x = 0
    let max_y = 0
    let min_y = 0
    
    for(let i = 0; i<dots.length; i++){
        dots[i][0] -= point1
        dots[i][1] -= point2
        
        max_x = Math.max(dots[i][0], max_x)
        min_x = Math.min(dots[i][0], min_x)
        
        max_y = Math.max(dots[i][1], max_y)
        min_y = Math.min(dots[i][1], min_y)
    }
    
    return Math.abs(max_x - min_x) * Math.abs(max_y - min_y)
}