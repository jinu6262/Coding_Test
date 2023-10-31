function solution(s) {
    let arr = []

    for(let el of Array.from(new Set([...s]))){
        let count = 0;
        for(let el2 of s) {
            if(el === el2) count++
        }
        if(count === 1) arr.push(el)
    }

    return arr.sort().join("")
}