function solution(keyinput, board) {    
    let result = [0,0]
    const left = 0 - (board[0]-1)/2
    const right = 0 + (board[0]-1)/2
    const top = 0 + (board[1]-1)/2
    const bottom = 0 - (board[1]-1)/2
    
    for(let i = 0; i<keyinput.length; i++){
        if(keyinput[i] === 'right' && result[0] < right) result[0] += 1
        if(keyinput[i] === 'left' && result[0] > left) result[0] -= 1
        if(keyinput[i] === 'up' && result[1] < top) result[1] += 1
        if(keyinput[i] === 'down' && result[1] > bottom) result[1] -= 1
    }
    
    return result;
}