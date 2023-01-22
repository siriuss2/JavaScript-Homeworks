function sumMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (const num of arr) {
      if (typeof num === 'number' && isFinite(num)) {
        if (num > max) {
          max = num;
        }
        if (num < min) {
          min = num;
        }
      }
    }
    return { max: max, min: min, sum: max + min };
  }


    const arr = [2, 5, 6, 8, 16];
    const result = sumMinMax(arr);
    console.log(result);