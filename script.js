let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;

let btn1 = document.getElementById("btn0");
let btn2 = document.getElementById("btn1");
let btn3 = document.getElementById("btn2");
let btn4 = document.getElementById("btn3");

//createQuestion
let pleaseWork = function(questionText, choice1, choice2, choice3, choice4, correctChoice){

    choice1 = document.getElementById("choice0");
    choice2 = document.getElementById("choice1");
    choice3 = document.getElementById("choice2");
    choice4 = document.getElementById("choice3");

    btn1.innerText = choice1;
    btn2.innerText = choice2;
    btn3.innerText = choice3;
    btn4.innerText = choice4;




};
//DoTheStuff
let justWork = function() {
    btn1.onclick = function (){
        checkCorrect(this)
    };
    btn2.onclick = function (){
        checkCorrect(this)
    };
    btn3.onclick = function (){
        checkCorrect(this)
    };
    btn4.onclick = function (){
        checkCorrect(this)
    };

    if(count === 0){
        createQuestion("Which of these creatures are real?", "Dinosaurs", "Aliens", "Unicorn", "Rubberducks" );
    }else if(count === 1){
        createQuestion("What do you call a pig that does karate?", "Stew", "Hamslice", "Porkchop", "Baconbits");
    }else if(count === 2){
        createQuestion("Which of these is a disney character?", "Garfield", "Rigby", "Ben Ten", "Mushu");
    }else if(count === 3){
        createQuestion("Who's team is the Cardinals (baseball)", "Indiana", "Missouri", "New Jersey", "Tennessee");
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got " + numRight + "correct out of " + numQuestions;
        document.getElementById("buttons").innerHTML = " ";
    }
    document.getElementById("progress").innerText = "Question " + (count + 1) + "of " + numQuestions;
};

let checkCorrect = function(button){
    if(button === correctOne){
        numRight++
    }
    count++;
    justWork();
};