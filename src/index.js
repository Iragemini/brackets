module.exports = function check(str, bracketsConfig) {
    let result = true;
    let bracketsArr = [];
    let k = 0;

    if(str.length % 2 === 1){
        return false;
    }
  
    for(let i = 0; i < str.length; i++) {

        let elemStr = str[i];

        for(let j = 0; j < bracketsConfig.length; j++) {

          let elemConfig = bracketsConfig[j][0];

          if(elemStr === elemConfig) {
            if(elemStr === elemConfig && str[i + 1] === elemConfig && elemConfig === bracketsConfig[j][1]) {
              i++;
              break;
            } else {
              if(bracketsArr.includes(elemStr) && elemConfig === bracketsConfig[j][1]){
                  k--;
                  bracketsArr.pop();
                  if( bracketsArr.length === 1 ) {
                      return false;
                  }
                } else {
                  bracketsArr.push(bracketsConfig[j][1]);
                  k++;
                }
            } 
        } else {
          if(str[i] === bracketsConfig[j][1]) {
            if(str[i] === bracketsArr[k - 1]){
              k--;
              bracketsArr.pop();
            } else {
              return false;
            }
          }
          
        }
      }
    }
  
return result;
}
