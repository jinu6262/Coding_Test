function solution(my_string) {
    const number_arr = [...my_string].filter(n => n==='0' || Number(n))
    return number_arr.map(Number).sort((a, b)=> a - b);
}