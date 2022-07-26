let randomNumber1 = Math.random();
let randomNumber2 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;;
randomNumber2 = Math.floor(randomNumber2*6)+1;;
// console.log(randomNumber);

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if(randomNumber1===randomNumber2){
    document.querySelector(".container h1").innerHTML = "Draw!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩 Player 2 Wins!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
}
