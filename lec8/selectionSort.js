const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        minIndex=i;
      for (let j = i+1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex=j;
        }
      }
      [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]
    }
    return arr;
  };
  
  const arr = [1, 5, 64, 35, 7, 43, 22];
  console.log(selectionSort(arr));
  