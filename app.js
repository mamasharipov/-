
function convertArrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] === 'name') {
        obj[arr[i]] = arr[i + 1];
      } else {
        obj[arr[i]] = {};
        obj[arr[i]][arr[i + 1]] = arr[i + 2];
        i += 2;
      }
    }
    return obj;
  }

  let arr = ['name', 'John', 'lastname', 'Black', 'age', '23', ' '];
  let obj = convertArrayToObject(arr);
  console.log(obj);






/*ДОП ДЗ*/
function calculateAverage(...numbers) {
    if (numbers.length === 0) {
      return 0; }
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  };
  console.log(calculateAverage(1,2,3,4,5,6,7,8,9,0,436,65,134,42,46645)); 
  console.log(calculateAverage(10, 20, 30, 40, 45,)); 
  console.log(calculateAverage()); 