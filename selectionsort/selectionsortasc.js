let a=[38,52,9,18,6,62,13]
let temp=0,min;
for(let i=0;i<a.length;i++){
  min=i;
  for(let j=i+1;j<a.length;j++){
    if(a[j]<a[min]){
      min=j;
    }
  
  }
    temp=a[i]
    a[i]=a[min]
    a[min]=temp;
}
for(let t of a){
console.log(t)
}