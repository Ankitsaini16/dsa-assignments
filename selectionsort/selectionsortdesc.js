let a = [38, 52, 9, 18, 6, 62, 13];
let temp = 0,
  max;
for (let i = 0; i < a.length; i++) {
  max = i;
  for (let j = i + 1; j < a.length; j++) {
    if (a[j] > a[max]) {
      max = j;
    }
  }
  temp = a[i];
  a[i] = a[max];
  a[max] = temp;
}
for (let t of a) {
  console.log(t);
}
