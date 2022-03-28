let dicetray = {
   "d4": 0,
   "d6": 0,
   "d8": 0,
   "d10": 0,
   "d12": 0,
   "d20": 0,
  };
let modifie = 0;
function modifier() {
  modifie = 0;
  document.querySelector(`.modif`).value = modifie;
}
let diceresult = [];
function dicenum(dicetype) {  
  switch(dicetype){
    case "d4":
      dicetray[dicetype]++;
      break;
    case "d6":
      dicetray[dicetype]++;
      break; 
    case "d8":
      dicetray[dicetype]++;
      break;
    case "d10":
      dicetray[dicetype]++;
      break;
    case "d12":
      dicetray[dicetype]++;
      break;
    case "d20":
      dicetray[dicetype]++;
      break;
  }
  //dicetray[dicetype]++;
  document.querySelector(`#${dicetype}`).innerHTML = dicetray[dicetype];
};

var result = 0;
function roll() {
  let total = 0;
  let i = 0;
  for (let dice in dicetray) {
    total = diceroll(dice, i);
    /*for (let j = 0; j < dicetray[dice]; j++) {
      if (i != 5) {
        result = Math.floor(Math.random() * (4 + (2 * i))) + 1;
      } else {
        result = Math.floor(Math.random() * (4 + (2 * 8))) + 1;
      }
      total += result;
      diceresult.push(result);
      console.log(diceresult + ' a');
    }*/
    i++;
  }
  modifie = document.querySelector(`.modif`).valueAsNumber;
  total += modifie;
  render();
  document.querySelector("#total").innerHTML = " + " + modifie + " = " + total;
};
function diceroll(dice, i){
  let total = 0;
  for (let j = 0; j < dicetray[dice]; j++) {
      if (i != 5) {
        result = Math.floor(Math.random() * (4 + (2 * i))) + 1;
      } else {
        result = Math.floor(Math.random() * (4 + (2 * 8))) + 1;
      }
      total += result;
      diceresult.push(result);
      console.log(diceresult + "a");
    }
  return total;
}

function render(){
  let rolls = '<ul>';
  
  for (let dice in dicetray){
    if (dicetray[dice] != 0){
      rolls += `<li class = "baseStyle--hist">${dicetray[dice]}${dice} = `;
      for (let i = 0; i < dicetray[dice]; i++ ){
        if (i == dicetray[dice] - 1){
          rolls += `${diceresult[i]}`;
        }else{
          rolls += `${diceresult[i]}, `;
        }
      }
      diceresult.splice(0,dicetray[dice]);
      rolls += `</li>`;
    }
  }
  rolls += '</ul>';
  document.querySelector('.hist').innerHTML = rolls;
}

function reset() {
  dicetray = {
   "d4": 0,
   "d6": 0,
   "d8": 0,
   "d10": 0,
   "d12": 0,
   "d20": 0,
  };
  modifie = 0;
  document.querySelector(`.modif`).value = modifie;
  rolls = '';
  diceresult = [];
  document.querySelector('.hist').innerHTML = rolls;
  document.querySelector("#total").innerHTML = 0;
  for (let dice in dicetray) {
    document.querySelector(`#${dice}`).innerHTML = dicetray[dice];
  }
}
