function solution(my_string) {
    const arr = []
    for(let i = 0; i<my_string.length; i++){
        if(arr.indexOf(my_string[i]) === -1) arr.push(my_string[i])
    }
    
    return arr.join("");
}