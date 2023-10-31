function solution(array, n) {    
    return array.reduce((acc, cur) => { 
        if(Math.abs(cur - n) > Math.abs(acc - n)) return acc
        else if(Math.abs(cur - n) === Math.abs(acc - n)) return Math.min(cur, acc)
        else return cur
    })
}