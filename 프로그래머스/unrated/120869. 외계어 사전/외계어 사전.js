function solution(spell, dic) {
    spell.length
    let result = 2
    
    for(let i = 0; i<dic.length; i++){
        if(dic[i].length === spell.length){
            for(let j = 0; j<spell.length; j++){
                if(!dic[i].includes(spell[j])) {
                    result = 2
                    break;
                }
                result = 1
            }
        }
    }
    
    return result;
}