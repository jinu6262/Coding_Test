function solution(hp) {
    let count = 0;
    let now_hp = hp;
    const ants = [5,3,1]
    
    for(const ant of ants){
        count = count + parseInt(now_hp/ant)
        now_hp = now_hp%ant
    }
    
    return count;
}