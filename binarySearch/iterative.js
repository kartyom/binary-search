function iterativeSearch(arr, num) {
  let arrEnd = arr.length;
  let arrStart = 0;

  while (arrEnd - arrStart > 1) {
    if (num < arr[Math.ceil((arrStart + arrEnd) / 2)]) {
      arrEnd = Math.ceil((arrStart + arrEnd) / 2);
    } else {
      arrStart = Math.ceil((arrStart + arrEnd) / 2);
    }
  }

  if (arr[arrStart] === num) {
    return arrStart;
  } else {
    return -1;
  }
}

