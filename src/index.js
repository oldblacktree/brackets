 module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let newArr = [];
  let bracketPosition = [];
  
  function findBracketPosition(bracket) {
    for (let i = 0; i < bracketsConfig.length; i++) {
      for (let j = 0; j < bracketsConfig[i].length; j++) {
        if (bracket === bracketsConfig[i][j]) {
          bracketPosition.push([i, j]);
        }
      }
    }
  }

  for (let k = 0; k < arr.length; k++){
    bracketPosition = [];
    findBracketPosition(arr[k]);

    if (bracketPosition.length === 2){
      if (newArr.length === 0){
        newArr.push(bracketPosition[0])
      } else if (bracketPosition[0][0] === newArr[newArr.length - 1][0]) {
        newArr.pop();
      } else {
        newArr.push(bracketPosition[0])
      }
    } 
    
      else if (bracketPosition[0][1] === 0){
      newArr.push(bracketPosition[0]);
    } else if(newArr.length === 0){ 
      return false;
    } else if (bracketPosition[0][0] === newArr[newArr.length - 1][0]) {
        newArr.pop();
      } else return false;
    }
  
  if (newArr.length === 0) {
    return true;
  } else return false;
}
