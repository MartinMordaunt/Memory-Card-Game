let fox = document.getElementById("fox");          let foxNum = 0;                 let divOne = document.getElementById("one");
let rabbit = document.getElementById("rabbit");    let rabbitNum = 1;              let divTwo = document.getElementById("two");
let frog = document.getElementById("frog");        let frogNum = 2;                let divThree = document.getElementById("three");
let lion = document.getElementById("lion");        let lionNum = 3;                let divFour = document.getElementById("four");
let tiger = document.getElementById("tiger");      let tigerNum = 4;               let divFive = document.getElementById("five");
let mouse = document.getElementById("mouse");      let mouseNum = 5;               let divSix = document.getElementById("six");
let unicorn = document.getElementById("unicorn");  let unicornNum = 6;             let divSeven = document.getElementById("seven");
let dragon = document.getElementById("dragon");    let dragonNum = 7;              let divEight = document.getElementById("eight");
let pig = document.getElementById("pig");          let pigNum = 8;                 let divNine = document.getElementById("nine");
let wolf = document.getElementById("wolf");        let wolfNum = 9;                let divTen = document.getElementById("ten"); 
let panda = document.getElementById("panda");      let pandaNum = 10;              let divEleven = document.getElementById("eleven");
let bear = document.getElementById("bear");        let bearNum = 11;               let divTwelve = document.getElementById("twelve");
let start = document.getElementById("start");
let gameStatus = document.getElementById("gameStatus");

let divArray = [
    {
        div: document.getElementById("one")
    },
    {
        div: document.getElementById("two")
    },
    {
        div: document.getElementById("three")
    },
    {
        div: document.getElementById("four")
    },
    {
        div: document.getElementById("five")
    },
    {
        div: document.getElementById("six")
    },
    {
        div: document.getElementById("seven")
    },
    {
        div: document.getElementById("eight")
    },
    {
        div: document.getElementById("nine")
    },
    {
        div: document.getElementById("ten")
    },
    {
        div:document.getElementById("eleven")
    },
    {
        div: document.getElementById("twelve")
    }

]

let animalNums = [
    {
        animal: document.getElementById("fox"),
        num: 0

    },
    {
        animal: document.getElementById("rabbit"),
        num: 1

    },
    {
        animal: document.getElementById("frog"),
        num: 2

    },
    {
        animal: document.getElementById("lion"),
        num: 3

    },
    {
        animal: document.getElementById("tiger"),
        num: 4

    },
    {
        animal: document.getElementById("mouse"),
        num: 5

    },
    {
        animal: document.getElementById("unicorn"),
        num: 6

    },
    {
        animal: document.getElementById("dragon"),
        num: 7

    },
    {
        animal: document.getElementById("pig"),
        num: 8

    },
    {
        animal: document.getElementById("wolf"),
        num: 9

    },
    {
        animal: document.getElementById("panda"),
        num: 10

    },
    {
        animal: document.getElementById("bear"),
        num: 11

    }

]

//My Try At randomising without duplicates : lol
// function randomiseCards(){
//     for(let i=0; i < cardArray.length; i++){
//         let rndmNum = Math.floor(Math.random() * 12)
//         newCardArray.push(rndmNum)
//         console.log(newCardArray)
//     }
// }
// replaced in for loop below,  animalNums[i].animal

// First way of creating random non duplicating numbers 
//     function randomiseCards(){
//         var nums = [0,1,2,3,4,5,6,7,8,9,10,11],
//             newCardArray = [],
//             i = nums.length,
//             j = 0;

//         while (i--) {
//             j = Math.floor(Math.random() * (i+1));
//             newCardArray.push(nums[j]);
//             nums.splice(j,1);
//         }
//         console.log(newCardArray);
//     }
// randomiseCards();





function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  
  // Used like so
  
  
  



  function cardsInPlace(){
    for(let i =0; i < animalNums.length; i++){
        divArray[i].div.append(animalNums[i].animal);
    }
}
// function disappearCards(){
//     for(i = 0; i < divArray.length; i++){
//         divArray[i].div.style.display = "none";
//     }
// }
// function disappearCardsTimer(){ 
//     setTimeout(disappearCards,10000);
// }




  start.addEventListener("click",startGame)

function startGame(){
    shuffle(animalNums);
    cardsInPlace()
    setTimeout(function(){
        for(i = 0; i < animalNums.length; i++){
        animalNums[i].animal.style.display = "none";
    }},10000);
    gameStatus.textContent = "Memorize the Cards, You have 10 Seconds!"
    
}
