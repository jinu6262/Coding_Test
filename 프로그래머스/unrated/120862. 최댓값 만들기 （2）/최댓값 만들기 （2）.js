function solution(numbers) {
    const N = numbers.length;

    numbers.sort((a,b) => a - b);

    return Math.max(
        numbers[N-1] * numbers[N-2],
        numbers[0] * numbers[1]
    )
}

// 가장 큰 값, 작은 값 구할 때 - 오름차순