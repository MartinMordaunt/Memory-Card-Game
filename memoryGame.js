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

let findArray = [ 
    {
       div: document.getElementById("findOne")
    },
    {
       div: document.getElementById("findTwo")
    },
    {
       div: document.getElementById("findThree")
    }
]

let findAnimalNums = [
    {
        animal: document.innerHTML = "🦊",
        num: 0

    },
    {
        animal: document.innerHTML = "🐰",
        num: 1

    },
    {
        animal: document.innerHTML = "🐸",
        num: 2

    },
    {
        animal: document.innerHTML = "🦁",
        num: 3

    },
    {
        animal: document.innerHTML = "🐯",
        num: 4

    },
    {
        animal: document.innerHTML = "🐭",
        num: 5

    },
    {
        animal: document.innerHTML = "🦄",
        num: 6

    },
    {
        animal: document.innerHTML = "🐲",
        num: 7

    },
    {
        animal: document.innerHTML = "🐷",
        num: 8

    },
    {
        animal: document.innerHTML = "🐺",
        num: 9

    },
    {
        animal: document.innerHTML = "🐼",
        num: 10

    },
    {
        animal: document.innerHTML = "🐻",
        num: 11

    }

]


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
// Same with this. Not working for some reason so we have to do it manually for time being
// function findCardsInPlace(){
//     for(let i =0; i < 4; i++){
//         findArray[i].div.append(findAnimalNums[i].animal);
//     }
// }
 function findCardsInPlace(){
     findArray[0].div.append(findAnimalNums[0].animal);
     findArray[1].div.append(findAnimalNums[1].animal);
     findArray[2].div.append(findAnimalNums[2].animal);
 }

// Could not use this due to cannot read property of undefined error ;( 
// i think its something to do with the findArray because it works with divArray  
// function clearFindDivs(){ 
//     for(let i = 0; i < 4; i++){
//         findArray[i].div.innerHTML = "";
//     } 
// }


  start.addEventListener("click",startGame)
let value = 10;
function startGame(){
    shuffle(animalNums);
    cardsInPlace();
    findArray[0].div.innerHTML = "";
    findArray[1].div.innerHTML = "";
    findArray[2].div.innerHTML = "";
    setTimeout(function(){
        shuffle(findAnimalNums);
        findCardsInPlace();
        for(i = 0; i < animalNums.length; i++){
        animalNums[i].animal.style.display = "none";
    }},10000);
    let valueChange = setInterval(function(){ value = value - 1 },1000);
    // gameStatus.textContent = "Memorize the Cards, You have 10 Seconds!"
    let updateValue = setInterval(function(){ gameStatus.innerHTML = "<span>Memorize the Cards. You have " + value + " seconds </span>" },1000);
    setTimeout(function(){
        clearInterval(valueChange)
        clearInterval(updateValue)
    },10000)
}

// I THINK MAYBE E.TARGET MIGHT NEED TO BE USED FOR MATCHING CARD WITH CARD
// function checkCard(e){
//     var target = e.target;
//     console.log(target)

// }

let score = 0;

divArray[0].div.addEventListener("click",checkCardOne)


function checkCardOne(){
    if(divArray[0].div.textContent === findArray[0]||[1]||[2].div.textContent){
        score += 1
        document.getElementById("scoreP").innerHTML = "hello" 
    }
    else{
        document.getElementById("scoreP").innerHTML = "wrong" 
    }
}
// THIS IS HOW YOU WOULD DO IT IF YOU KNEW HOW TO USE TARGET.EVENT/ THIS THE OTHER WAY IS TO DO EACH AND EVERY ONE INDIVIDUALLY
// function checkCard(){
//     for(let i = 0; i < 13; i++){
//         if(divArray[i].div.textContent === findArray[i].div.textContent)
//     }
// }

