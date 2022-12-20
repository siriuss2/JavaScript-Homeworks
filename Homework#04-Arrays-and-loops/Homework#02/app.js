function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!validateNumber(arr[i])) {
            return 'Error: One of the numbers is invalid';
        }
      sum += arr[i];
    }
    return sum;
  }
  
  function validateNumber(number) {
    if (isNaN(number)) {
      return false;
    }
    return true;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));


  