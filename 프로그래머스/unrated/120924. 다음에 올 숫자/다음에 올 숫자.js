function solution(common) {
    if((common[0] - common[1]) === (common[1] - common[2])) return common.pop()-(common[0] - common[1])
    else return common.pop()*(common[1]/common[0])
}