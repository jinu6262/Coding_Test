function solution(my_string) {
    
    const new_string = [...my_string].map(c => {
        if(c === c.toUpperCase()){
            return c.toLowerCase()
        }
        if(c === c.toLowerCase()){
            return c.toUpperCase()
        }
    })

    return new_string.join('');
}