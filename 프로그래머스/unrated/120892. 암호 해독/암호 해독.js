function solution(cipher, code) {
    let new_str = ''
    
    for(let i = 0; i<cipher.length; i++){
        if((i+1)%code === 0) new_str = new_str + cipher[i]
    }
    
    return new_str;
}