//Get The Two Inputs From The HTML File
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const calc = document.getElementById("calc");
const rand = document.getElementById("rand");
const clr = document.getElementById("clr");
const results = document.getElementById("results");

calc.addEventListener("click", function () {
    // Change Input Value From String To Number
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    //Add The Values Together And Insert To HTML
    results.innerHTML = valOne + valTwo;
});


//Clear Inputs And Display Area
clr.addEventListener("click", function () {
    results.innerHTML = "";
    ip1.value = "";
    ip2.value = "";
});

//Create A Function That Generates A Random Number Between 0 And 1000
function myRandomNumber(){
return Math.floor(Math.random()*1000);
}
//And Event Listener To Random Button
rand.addEventListener('click', function(){
ip1.value = myRandomNumber();
ip2.value = myRandomNumber();
});
