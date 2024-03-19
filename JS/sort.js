function qSort(arr){
  if(!Array.isArray(arr)) return console.error('type error')
  if(arr.length <= 1) return arr;
  const pIndex = Math.floor(arr.length / 2);
  const p = arr.splice(pIndex, 1)[0];
  const left = [];
  const right = [];
  for (let i =0;i< arr.length; i++){
    if(arr[i] < p){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  
  return qSort(left).concat([p], qSort(right))
}

console.log(qSort([1,2,44,52,2,41,41,123,4,13,32,76,1]))

qSort('123')