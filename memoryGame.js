
// MAIN CARDS 
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

// FIND CARDS
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

//SHUFFLE AND PUTTING CARDS IN PLACE
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
// #2 Same with this. Not working for some reason so we have to do it manually for time being
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

// #1 Could not use this due to cannot read property of undefined error ;( 
// i think its something to do with the findArray because it works with divArray  
// function clearFindDivs(){ 
//     for(let i = 0; i < 4; i++){
//         findArray[i].div.innerHTML = "";
//     } 
// }

// START BUTTON FUNCTION
  start.addEventListener("click",startGame)
let value = 10;
function startGame(){
    shuffle(animalNums);
    cardsInPlace();
    findArray[0].div.innerHTML = "";
    findArray[1].div.innerHTML = "";
    findArray[2].div.innerHTML = "";
    let cardDisplay = setTimeout(function(){
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
    start.removeEventListener('click', startGame)
}

// I THINK MAYBE E.TARGET MIGHT NEED TO BE USED FOR MATCHING CARD WITH CARD
// function checkCard(e){
//     var target = e.target;
//     console.log(target)

// }


// CREATING CARD MATCHING
let score = 0;

divArray[0].div.addEventListener("click",checkCardOne)
divArray[1].div.addEventListener("click",checkCardTwo)
divArray[2].div.addEventListener("click",checkCardThree)
divArray[3].div.addEventListener("click",checkCardFour)
divArray[4].div.addEventListener("click",checkCardFive)
divArray[5].div.addEventListener("click",checkCardSix)
divArray[6].div.addEventListener("click",checkCardSeven)
divArray[7].div.addEventListener("click",checkCardEight)
divArray[8].div.addEventListener("click",checkCardNine)
divArray[9].div.addEventListener("click",checkCardTen)
divArray[10].div.addEventListener("click",checkCardEleven)
divArray[11].div.addEventListener("click",checkCardTwelve)

// THIS IS CRAZY AND WAY TOO LONG NOT WORTH IT FIND OUT HOW TO LOOP THEM ALL TOGETHER IT SHOULD BE VERY SIMPLE 
function checkCardOne(){
    if(animalNums[0].animal.textContent === findArray[0].div.textContent){
        animalNums[0].animal.style.display = "block"
        animalNums[0].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[0].animal.textContent === findArray[1].div.textContent){
        animalNums[0].animal.style.display = "block"
        animalNums[0].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[0].animal.textContent === findArray[2].div.textContent){
        animalNums[0].animal.style.display = "block"
        animalNums[0].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[0].animal.style.display = "block"
        animalNums[0].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[0].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardTwo(){
    if(animalNums[1].animal.textContent === findArray[0].div.textContent){
        animalNums[1].animal.style.display = "block"
        animalNums[1].animal.classList.add("animate");
        setTimeout(function(){animalNums[1].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[1].animal.textContent === findArray[1].div.textContent){
        animalNums[1].animal.style.display = "block"
        animalNums[1].animal.classList.add("animate");
        setTimeout(function(){animalNums[1].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[1].animal.textContent === findArray[2].div.textContent){
        animalNums[1].animal.style.display = "block"
        animalNums[1].animal.classList.add("animate");
        setTimeout(function(){animalNums[1].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[1].animal.style.display = "block"
        animalNums[1].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[1].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardThree(){
    if(animalNums[2].animal.textContent === findArray[0].div.textContent){
        animalNums[2].animal.style.display = "block"
        animalNums[2].animal.classList.add("animate");
        setTimeout(function(){animalNums[2].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[2].animal.textContent === findArray[1].div.textContent){
        animalNums[2].animal.style.display = "block"
        animalNums[2].animal.classList.add("animate");
        setTimeout(function(){animalNums[2].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[2].animal.textContent === findArray[2].div.textContent){
        animalNums[2].animal.style.display = "block"
        animalNums[2].animal.classList.add("animate");
        setTimeout(function(){animalNums[2].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[2].animal.style.display = "block"
        animalNums[2].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[2].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardFour(){
    if(animalNums[3].animal.textContent === findArray[0].div.textContent){
        animalNums[3].animal.style.display = "block"
        animalNums[3].animal.classList.add("animate");
        setTimeout(function(){animalNums[3].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[3].animal.textContent === findArray[1].div.textContent){
        animalNums[3].animal.style.display = "block"
        animalNums[3].animal.classList.add("animate");
        setTimeout(function(){animalNums[3].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[3].animal.textContent === findArray[2].div.textContent){
        animalNums[3].animal.style.display = "block"
        animalNums[3].animal.classList.add("animate");
        setTimeout(function(){animalNums[3].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[3].animal.style.display = "block"
        animalNums[3].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[3].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardFive(){
    if(animalNums[4].animal.textContent === findArray[0].div.textContent){
        animalNums[4].animal.style.display = "block"
        animalNums[4].animal.classList.add("animate");
        setTimeout(function(){animalNums[4].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[4].animal.textContent === findArray[1].div.textContent){
        animalNums[4].animal.style.display = "block"
        animalNums[4].animal.classList.add("animate");
        setTimeout(function(){animalNums[4].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[4].animal.textContent === findArray[2].div.textContent){
        animalNums[4].animal.style.display = "block"
        animalNums[4].animal.classList.add("animate");
        setTimeout(function(){animalNums[4].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[4].animal.style.display = "block"
        animalNums[4].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[4].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardSix(){
    if(animalNums[5].animal.textContent === findArray[0].div.textContent){
        animalNums[5].animal.style.display = "block"
        animalNums[5].animal.classList.add("animate");
        setTimeout(function(){animalNums[5].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[5].animal.textContent === findArray[1].div.textContent){
        animalNums[5].animal.style.display = "block"
        animalNums[5].animal.classList.add("animate");
        setTimeout(function(){animalNums[5].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[5].animal.textContent === findArray[2].div.textContent){
        animalNums[5].animal.style.display = "block"
        animalNums[5].animal.classList.add("animate");
        setTimeout(function(){animalNums[5].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[5].animal.style.display = "block"
        animalNums[5].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[5].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardSeven(){
    if(animalNums[6].animal.textContent === findArray[0].div.textContent){
        animalNums[6].animal.style.display = "block"
        animalNums[6].animal.classList.add("animate");
        setTimeout(function(){animalNums[6].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[6].animal.textContent === findArray[1].div.textContent){
        animalNums[6].animal.style.display = "block"
        animalNums[6].animal.classList.add("animate");
        setTimeout(function(){animalNums[6].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[6].animal.textContent === findArray[2].div.textContent){
        animalNums[6].animal.style.display = "block"
        animalNums[6].animal.classList.add("animate");
        setTimeout(function(){animalNums[6].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[6].animal.style.display = "block"
        animalNums[6].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[6].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardEight(){
    if(animalNums[7].animal.textContent === findArray[0].div.textContent){
        animalNums[7].animal.style.display = "block"
        animalNums[7].animal.classList.add("animate");
        setTimeout(function(){animalNums[7].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[7].animal.textContent === findArray[1].div.textContent){
        animalNums[7].animal.style.display = "block"
        animalNums[7].animal.classList.add("animate");
        setTimeout(function(){animalNums[7].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[7].animal.textContent === findArray[2].div.textContent){
        animalNums[7].animal.style.display = "block"
        animalNums[7].animal.classList.add("animate");
        setTimeout(function(){animalNums[7].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[7].animal.style.display = "block"
        animalNums[7].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[7].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardNine(){
    if(animalNums[8].animal.textContent === findArray[0].div.textContent){
        animalNums[8].animal.style.display = "block"
        animalNums[8].animal.classList.add("animate");
        setTimeout(function(){animalNums[8].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[8].animal.textContent === findArray[1].div.textContent){
        animalNums[8].animal.style.display = "block"
        animalNums[8].animal.classList.add("animate");
        setTimeout(function(){animalNums[8].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[8].animal.textContent === findArray[2].div.textContent){
        animalNums[8].animal.style.display = "block"
        animalNums[8].animal.classList.add("animate");
        setTimeout(function(){animalNums[8].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[8].animal.style.display = "block"
        animalNums[8].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[8].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardTen(){
    if(animalNums[9].animal.textContent === findArray[0].div.textContent){
        animalNums[9].animal.style.display = "block"
        animalNums[9].animal.classList.add("animate");
        setTimeout(function(){animalNums[9].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    if(animalNums[9].animal.textContent === findArray[1].div.textContent){
        animalNums[9].animal.style.display = "block"
        animalNums[9].animal.classList.add("animate");
        setTimeout(function(){animalNums[9].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    if(animalNums[9].animal.textContent === findArray[2].div.textContent){
        animalNums[9].animal.style.display = "block"
        animalNums[9].animal.classList.add("animate");
        setTimeout(function(){animalNums[9].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[9].animal.style.display = "block"
        animalNums[9].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[9].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardEleven(){
    if(animalNums[10].animal.textContent === findArray[0].div.textContent){
        animalNums[10].animal.style.display = "block"
        animalNums[10].animal.classList.add("animate");
        setTimeout(function(){animalNums[10].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    if(animalNums[10].animal.textContent === findArray[1].div.textContent){
        animalNums[10].animal.style.display = "block"
        animalNums[10].animal.classList.add("animate");
        setTimeout(function(){animalNums[10].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    if(animalNums[10].animal.textContent === findArray[2].div.textContent){
        animalNums[10].animal.style.display = "block"
        animalNums[10].animal.classList.add("animate");
        setTimeout(function(){animalNums[10].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[10].animal.style.display = "block"
        animalNums[10].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[10].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
function checkCardTwelve(){
    if(animalNums[11].animal.textContent === findArray[0].div.textContent){
        animalNums[11].animal.style.display = "block"
        animalNums[11].animal.classList.add("animate");
        setTimeout(function(){animalNums[11].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[11].animal.textContent === findArray[1].div.textContent){
        animalNums[11].animal.style.display = "block"
        animalNums[11].animal.classList.add("animate");
        setTimeout(function(){animalNums[11].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else if(animalNums[11].animal.textContent === findArray[2].div.textContent){
        animalNums[11].animal.style.display = "block"
        animalNums[11].animal.classList.add("animate");
        setTimeout(function(){animalNums[11].animal.classList.remove("animate");},1001)
        score += 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}` 
    }
    else{
        animalNums[11].animal.style.display = "block"
        animalNums[11].animal.classList.add("animate");
        setTimeout(function(){animalNums[0].animal.classList.remove("animate");
        animalNums[11].animal.style.display = "none";},1001
        )
        score -= 1
        document.getElementById("scoreP").innerHTML = `Score: ${score}`
    }
}
// THIS IS HOW YOU WOULD DO IT IF YOU KNEW HOW TO USE TARGET.EVENT/ THIS THE OTHER WAY IS TO DO EACH AND EVERY ONE INDIVIDUALLY
// function checkCard(){
//     for(let i = 0; i < 13; i++){
//         if(divArray[i].div.textContent === findArray[i].div.textContent)
//     }
// }

