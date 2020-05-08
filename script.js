
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const correctQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
let questionIndex=0;
let index=0;
let myArray=[];
let myArr=[];
let score=0;


const questions=[
    {
        q:'What should you wash your face with?',
        options:['With sponge','With hands','With fingers'],
        answer:1
    },
   {
        q:'What type of water is best used on the face?',
        options:['Hot water','Cold water','Lukewarm water'],
        answer:2
},

    {
       q:'How many hours of beauty sleep should be observed?',
       options:['8hrs','10hrs','12hrs'],
       answer:0
},


{
    q:'How many skin types are there?',
    options:['5','4','3'],
    answer:2
},


{
    q:'How often should you exfoilate in a week?',
    options:['2-3 times','5-6 times','You shouldnt exfoilate'],
    answer:0
}
]


totalQuestionSpan.innerHTML=questions.length;
function load(){
questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    index++;
}

function check(element){
    if(element.id==questions[questionIndex].answer){
       element.classList.add(correct);
       updateAnswerTracker("correct")
       score++;
       console.log("score:"+score)
    }
    else{
        element.classList.add(wrong);
        updateAnswerTracker("wrong")
    }
    disabledOptions()
}
function disabledOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.add(disabled);
        if(options[i].id==questions[questionIndex].answer){
    options[i].classList.add("correct");
 }
    
function enableOptions(){
for(let i=0; i<options.length; i++){
    options[i].classList.remove("disabled","correct","wrong");
    }
}
    }


function Validate(){
    if(!options[0].classList.contains("disabled")){
        alert("Please Select one option")
    }
    else{
        enableOptions();
        randomQuestion();
    }
}

function next(){
    Validate();
}

}

function randomQuestion (){
    let randomNumber=Math.floor(Math.random()*questions.length);
    let hitDuplicate=0;
    if(index==questions.length){
        quizOver();
    }
  else{
if(myArray.length>0){
for(let i=0; i<myArray.length; i++){
if(myArray[i]==randomNumber){
    hitDuplicate=1;
    break;
}
}
if(hitDuplicate==1){
    randomQuestion()
}
else{
    questionIndex=randomNumber;
    load();
    myArr.push(questionIndex)
}

}
if(myArray.length==0){
    questionIndex=randomNumber;
    load();
    myArr.push(questionIndex);
}
    console.log("myArr:"+myArr);
    myArray.push(randomNumber);
        

  }
    
}

function answerTracker(){
    for(let i=0; i<questions.length; i++){
        const div=document.createElement("div")
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(className)
{
    answerTrackerContainer.children[index-1].classList.add(className);
}

function quizOver()
{
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
}

function tryAgain(){
    window.location.reload();
}

window.onload=function(){
randomQuestion();
answerTracker();
} 