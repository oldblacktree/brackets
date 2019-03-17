 module.exports = function check(str, bracketsConfig) {
  let brackets = str.split('');
  let bracketsStack = [];
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

  for (let k = 0; k < brackets.length; k++){
    bracketPosition = [];
    findBracketPosition(brackets[k]);

    if (bracketPosition.length === 2){
      if (bracketsStack.length === 0){
        bracketsStack.push(bracketPosition[0])
      } else if (bracketPosition[0][0] === bracketsStack[bracketsStack.length - 1][0]) {
        bracketsStack.pop();
      } else {
        bracketsStack.push(bracketPosition[0])
      }
    } 
    
      else if (bracketPosition[0][1] === 0){
      bracketsStack.push(bracketPosition[0]);
    } else if(bracketsStack.length === 0){ 
      return false;
    } else if (bracketPosition[0][0] === bracketsStack[bracketsStack.length - 1][0]) {
        bracketsStack.pop();
      } else return false;
    }
  
    if (bracketsStack.length === 0) {
      return true;
      
  } else return false;
}
