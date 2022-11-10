const badInd = (s, e, arr) => {
  while (s <= e) {
    let mid = Math.floor(s + (e - s) / 2);
    if (arr[mid] === 1) {
      if (arr[mid - 1] === 0) {
        return mid;
      } else {
        return badInd(s, mid - 1, arr);
      }
    } else {
      return badInd(mid + 1, e, arr);
    }
  }
};

let arr = [0, 0, 0, 0,1, 1, 1, 1, 1];
console.log(badInd(0, arr.length - 1, arr));
