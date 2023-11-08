function solution(a, b) {    
    const GCF = Math.max(...fun(a).filter(it => fun(b).includes(it)))
    
    for (const num of fun2(b/GCF)) {
        if(num !== 2 && num !== 5) return 2
    }
    
    return 1
}

function fun2(n) {
  let answer = new Set();
  
  for(let i = 2; i <= n; i++) {
    while(n % i === 0) {
      answer.add(i);
      n /= i;
    }
  }
  
  return [...answer];
}

function fun(num) {
    let arr = []
    for(let i = 1; i<=num; i++){
        if(num%i===0) arr.push(i)
    }
    return arr
}