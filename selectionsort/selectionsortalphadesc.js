let name1 = "ankitsaini";
let a = name1.split("");

let temp = 0,
  min;
for (let i = 0; i < a.length; i++) {
  min = i;
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] > a[min]) {
      min = j;
    }
  }
  temp = a[i];
  a[i] = a[min];
  a[min] = temp;
}
console.log(a.join(""));
