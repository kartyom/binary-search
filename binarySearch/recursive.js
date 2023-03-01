function recursiveSearch(arr, num) {
  let arrStart = 0;
  let arrEnd = arr.length;

  function binarySearch(arrStart, arrEnd) {
    if (num < arr[Math.ceil((arrStart + arrEnd) / 2)]) {
      arrEnd = Math.ceil((arrStart + arrEnd) / 2);
    } else {
      arrStart = Math.ceil((arrStart + arrEnd) / 2); 
    }

    if (arr[arrStart] === num) {
      return arrStart;
    } 
    return binarySearch(arrStart, arrEnd)  
  }
  
    return binarySearch(arrStart, arrEnd);
}
