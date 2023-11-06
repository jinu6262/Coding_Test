function solution(bin1, bin2) {
  let temp = (Number(bin1) + Number(bin2)).toString().split("").map(Number).reverse()

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
        temp[i] = 0
        if(temp[i + 1]) temp[i + 1]++
        else temp[i + 1] = 1
    } else if (temp[i] === 3) {
        temp[i] = 1
        if(temp[i + 1]) temp[i + 1]++
        else temp[i + 1] = 1
    }
  }
  return temp.reverse().join("").toString()
}