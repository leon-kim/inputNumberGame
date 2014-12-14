var inputs = window.prompt('enter 5 digits between 1 to 10');
var arrayForComputer = [];
var hits = 0;
var hitsButWrongPlace = 0;

// functions for computer number
// param @howmany [how many numbers do you want to test]
function getRandomInt(min, max, howmany) {
  if(howmany > 0){
   for(var i = 1; i <= howmany; i++){
     pushIntoArray( Math.floor(Math.random() * (max + 1 - min)) + min );
   }
  }
}

function pushIntoArray(val){
  console.log(val);
  arrayForComputer.push(val);
}

// functions for 
function spliter(str){
  return str.split("");
}

function useNumberType(arr){
  arr = arr.map(returnInt);
  return arr;
}

function returnInt(element) {
  return parseInt(element, 10);
}

function processUserInput(inputs){
  var user = spliter(inputs);
  user = useNumberType(user);
  return user;
}



// function to compare 

function compare(){
  arrayForComputer.forEach(function(v,k){
    if(!(rightPlaceRightNumber(v,k))){
      containsNumber(v,k);
    }
  });
}

function rightPlaceRightNumber(v,k){
  if(user[k] === v){
    hits++;
    return true;
  }
  return false;
}

function containsNumber(v,k){
  if(arrayForComputer.indexOf(user[k]) !== -1){
     hitsButWrongPlace++;
  }
}


function printResult(){
  console.log('CORRECT: ' + hits);
  console.log('CORRECT but wrong place: ' + hitsButWrongPlace);
  console.log('numbers from computer was ' + arrayForComputer);

}

getRandomInt(1,10,5);
var user = processUserInput(inputs);
compare();
printResult();



