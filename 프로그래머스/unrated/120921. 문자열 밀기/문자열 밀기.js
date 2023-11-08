function solution(A, B) {
    for(let i = 0; i<A.length; i++){
        if(A===B) return i
        A = A.slice(A.length-1, A.length) + A.slice(0, -1)
    }
    return -1;
}