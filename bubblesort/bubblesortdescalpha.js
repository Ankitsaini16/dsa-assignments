let name2 = "ankitsaini";
let name1 = name2.split("");
let temp;
let flag = 0;
for (let i = 0; i < name1.length; i++) {
  for (let j = 0; j < name1.length - 1 - i; j++) {
    if (name1[j] < name1[j + 1]) {
      temp = name1[j + 1];
      name1[j + 1] = name1[j];
      name1[j] = temp;
      flag = 1;
    }
  }
}
console.log(name1.join(""));