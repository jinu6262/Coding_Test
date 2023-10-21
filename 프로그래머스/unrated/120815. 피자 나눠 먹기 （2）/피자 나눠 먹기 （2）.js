function solution(n) {
    const piece = 6;
    let lcm = 1;
    
    while(true){
      if((lcm % n == 0) && (lcm % piece == 0)){
        break;
      }
      lcm++;
    }
    
    return lcm/6;
}