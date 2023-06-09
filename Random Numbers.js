
function Update()
{
var num1 = Math.ceil(Math.random() *10);
var num2 = Math.ceil(Math.random() *10);
var sum = num1 + num2;

if (num1 % 2 == 0 && (num1 == num2))
{
   document.getElementById("results").innerHTML = "you win! - Missile Awaaay!"

}
else if(num2 == 7 || sum == 7 )
{
    document.getElementById("results").innerHTML = "Launch Code initiated!"
}
else
{
    document.getElementById("results").innerHTML ="push - no launch /no fire" 
}

document.getElementById("num1").innerHTML = "num1 = " + num1;
document.getElementById("num2").innerHTML = "num2 = " + num2;
}