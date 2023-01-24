let a = "ankitsaini";
let arr=a.split('')


//insertion sort
for (let i = 1; i < arr.length; i++) {
  let current = arr[i];
  let j = i - 1;
  while (j >= 0 && arr[j] > current) {
    //Keep swapping
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = current;
}
console.log(arr.join(''));