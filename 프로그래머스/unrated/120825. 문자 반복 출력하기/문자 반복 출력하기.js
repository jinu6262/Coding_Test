function solution(my_string, n) {
    const my_arr = my_string.split('')
    let str = ''
    my_arr.map(c => str = str + c.repeat(n))
    return str;
}