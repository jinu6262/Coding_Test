function solution(my_string) {
    const arr = ['a', 'e', 'i', 'o', 'u']
    let str = my_string
    for(i=0; i<my_string.length; i++){
        str = str.replaceAll(arr[i], '');
    }
    
    return str;
}