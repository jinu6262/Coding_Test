function solution(hp) {
    let count = 0;
    let now_hp = hp;
    const ants = [5,3,1]
    
    for(i=0; i<ants.length; i++){
        count = count + parseInt(now_hp/ants[i])
        now_hp = now_hp%ants[i]
    }
    
    return count;
}