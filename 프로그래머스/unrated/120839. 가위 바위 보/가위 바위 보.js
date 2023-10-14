function solution(rsp) {
    const result_rsp = [...rsp].map(c => {
        if(c==='2'){
            return c.replace(c,'0')
        }
        if(c==='0'){
            return c.replace(c,'5')
        }
        if(c==='5'){
            return c.replace(c,'2')
        }
    }).join("")
    
    return result_rsp;
}