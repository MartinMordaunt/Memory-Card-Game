
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

function findCardsInPlace(){
    for(let i =0; i < 3; i++){
        findArray[i].div.append(findAnimalNums[i].animal);
    }
}

function clearFindDivs(){ 
    for(let i = 0; i < 3; i++){
        findArray[i].div.innerHTML = "";
    } 
}

// START BUTTON FUNCTION
  start.addEventListener("click",startGame)
let value = 10;
function startGame(){
    shuffle(animalNums);
    cardsInPlace();
    clearFindDivs();
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



// CREATING CARD MATCHING
let score = 0;

divArray[0].div.addEventListener("click",checkCard);
divArray[1].div.addEventListener("click",checkCard)
divArray[2].div.addEventListener("click",checkCard)
divArray[3].div.addEventListener("click",checkCard)
divArray[4].div.addEventListener("click",checkCard)
divArray[5].div.addEventListener("click",checkCard)
divArray[6].div.addEventListener("click",checkCard)
divArray[7].div.addEventListener("click",checkCard)
divArray[8].div.addEventListener("click",checkCard)
divArray[9].div.addEventListener("click",checkCard)
divArray[10].div.addEventListener("click",checkCard)
divArray[11].div.addEventListener("click",checkCard)


function checkCard(e){
    if (
        findArray
            .slice(0, 3)
            .some(elt => elt.div.textContent === e.target.children[0].textContent)
        ) {
        score += 1;
        } else {
        score -= 1;
        setTimeout(function(){e.target.children[0].style.display = "none";},1001)
        }
    
        e.target.children[0].style.display = "block";
        e.target.children[0].classList.add("animate");
        setTimeout(function() {
        e.target.children[0].classList.remove("animate");
        }, 1001);
        document.getElementById("scoreP").innerHTML = `Score: ${score}`;
}
    

