// find the target element in two d arr

// brute force approach

// const findTarget = (arr, target) => {
//   let m = arr.length;
//   let n = arr[0].length;
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[i][j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };



// optimised approach

const findTarget = (arr, target) => {
       let m = arr.length;
   let n = arr[0].length;

   let left=0;
   let right=(m*n)-1
   while(left<=right)
   {
    let mid=Math.floor((left+right)/2)
       let mid_ele= arr[Math.floor(mid/2)][mid%2]
       if(target===mid_ele)
       {
        return true
       }
       else if(target<mid_ele)
       {
        left=mid+1
       }
       else{
        right=mid-1
       }
   }
   return false;
}
const arr = [
    [1, 3, 5, 7],
    [9, 11, 13, 15],
    [17, 19, 21, 23],
  ];
const target = 3;
console.log(findTarget(arr, target));
