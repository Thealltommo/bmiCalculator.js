var weight = prompt("What is your weight in KG?")
var height = prompt("What is your height in metres?")

function bmiCalculator(weight,height){

  var bmi = Math.round(weight / (height * height));
  return bmi;
}
alert("Your bmi is " + bmi);
