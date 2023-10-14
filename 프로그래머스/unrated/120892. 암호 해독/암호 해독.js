function solution(cipher, code) {
    const cipher_arr = cipher.split("")
    let new_str = ''
    
    for(let i = 0; i<cipher_arr.length; i++){
        if((i+1)%code === 0) new_str = new_str + cipher_arr[i]
    }
    
    return new_str;
}