function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((el,i)=> el === arr2[i])
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(item => item.gender === gender).reduce((acc, item, index, arr) => {
      acc += item.age;
      if(index === arr.length -1){
          return acc / arr.length;
      }
      return acc;
  }, 0)
  return result;
}