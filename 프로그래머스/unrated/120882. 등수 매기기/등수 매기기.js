function solution(score) {
    let arr = []
    let sum_score = score.map(a=> {
        let sum = 0
        for(let i = 0; i<a.length; i++) sum += a[i]
        return sum
    })
    
    let sort_score = [...sum_score].sort((a, b) => b - a);

    for (let i = 0; i < sort_score.length; i++) {
        arr.push(sort_score.indexOf(sum_score[i]) + 1);
    }
    return arr;
}