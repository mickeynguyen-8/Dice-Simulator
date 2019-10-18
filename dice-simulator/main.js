//Dice Game Stimulator
'use strict'

//Global variables


let budget = 5000;
let totalmoney = document.getElementById('funds');
let randNumhouse = Math.floor(Math.random() * 6) + 1;
let randNumplayer = Math.floor(Math.random() * 6) + 1;
let resultEl = document.getElementById('loot');

//Add EvenListener to run the function
document.getElementById('play-btn').addEventListener('click', theDiceGame);
document.getElementById('purchase-btn').addEventListener('click', LifeofLuxury);


//Run the function 


function theDiceGame() {
    //A random dice for the house roll
    if (randNumhouse == 1) {
        document.getElementById('house-die').src = 'images/1.png';
    }
    else if (randNumhouse == 2) {
            document.getElementById('house-die').src = 'images/2.png';
        }
    else if (randNumhouse == 3) {
            document.getElementById('house-die').src = 'images/3.png';
    }
    else if (randNumhouse == 4) {
        document.getElementById('house-die').src = 'images/4.png';
    }
    else if (randNumhouse == 5) {
        document.getElementById('house-die').src = 'images/5.png';
    }
    else {
        document.getElementById('house-die').src = 'images/6.png';
    }
    
    //A random dice for the player roll
    if (randNumplayer == 1) {
        document.getElementById('player-die').src = 'images/1.png';
    }
    else if (randNumplayer == 2) {
        document.getElementById('player-die').src = 'images/2.png';
    }
    else if (randNumplayer == 3) {
        document.getElementById('player-die').src = 'images/3.png';
    }
    else if (randNumplayer == 4) {
        document.getElementById('player-die').src = 'images/4.png';
    }
    else if (randNumplayer == 5) {
        document.getElementById('player-die').src = 'images/5.png';
    }
    else {
        document.getElementById('player-die').src = 'images/6.png';
    }

    let position = Number(document.getElementById('bet-input').value);
    console.log('budget: ' + budget);
    console.log('position: ' + position);
    if (randNumhouse < randNumplayer) {
        console.log('in if part 1');
        totalmoney.innerHTML = budget + position;
    }
    else if (randNumhouse > randNumplayer) {
        console.log('in if part 2');
        totalmoney.innerHTML = budget - position;
    }
    else {
        console.log('in if part 3');
        totalmoney.innerHTML = budget;
    }
}

    

function LifeofLuxury() {
    let randNum = Math.random();
    if (totalmoney < 1000 ){
        resultEl.innerHTML +='<img src="images/socks.png">';
    }

    else if (1000 < totalmoney && totalmoney < 5000){
        if (randNum < 0.33){
            resultEl.innerHTML +='<img src="images/ring.png">';
        }
        else if (randNum < 0.66) {
            resultEl.innerHTML +='<img src="images/bike.jpg">';
        }
        else {
            resultEl.innerHTML +='<img src="images/trip.jpg">';
        }
        totalmoney.innerHTML -= 1000;
    }
    
    else {
        if (randNum < 0.25){
            resultEl.innerHTML += '<img src="images/motorcycle.jpg">';
        }
        else if (randNum < 0.5) {
            resultEl.innerHTML += '<img src="images/house.png">';
        }
        else if (randNum < 0.75) {
            resultEl.innerHTML += '<img src="images/boat.png">';
        }
        else {
            resultEl.innerHTML += '<img src="images/car.png">';
        }
        totalmoney.innerHTML -= 5000;
    }
    
}