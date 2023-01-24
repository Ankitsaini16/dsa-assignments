let arr = [2, 5, 8, 4, 9];
// let temp;
let flag = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      // temp=arr[j];
      arr[j] = arr[j] + arr[j + 1];
      arr[j + 1] = arr[j] - arr[j + 1];
      arr[j] = arr[j] - arr[j + 1];
      flag = 1;
    }
    //optimized version
  }
  if (flag == 0) {
    break;
  }
}
// console.log(arr);
for (let t of arr) {
  console.log(t);
}
