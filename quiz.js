const quizData=[
    {
        question:"how old is priyanka?",
        a:'15',
        b:'16',
        c:'17',
        d:'18',
        correct:'d'
    },
    {
        question:"what is the best programming langauge in 2022?",
        a:'java',
        b:'javascript',
        c:'python',
        d:'c',
        correct:'a'
    },
    {
        question:'what is the best company to get placed?',
        a:'tcs',
        b:'amazon',
        c:'flipkart',
        d:'zoho',
        correct:'a'
    },
    {
        question:'what is the 1st level in interview?',
        a:'aptitude',
        b:'written_test',
        c:'hr',
        d:'coding round',
        correct:'a'
    },
    {
        question:'what is the highest package in 2022?',
        a:'25lpa',
        b:'26lpa',
        c:'27lpa',
        d:'28lpa',
        correct:'c'
    }
];

let score=0;

let currentQuestion=0;
const questionEl=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');
const quiz=document.getElementById("quiz");
loadQuiz();
function loadQuiz(){
    const currentQuizData=quizData[currentQuestion];
    questionEl.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
}
function getSelected(){
    const answerEls=document.querySelectorAll(".answer");
    let answer=undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener("click",()=>{
  
    const answer=getSelected();
    if(answer){
        if(answer===quizData[currentQuestion].correct){
            score++;
            currentQuestion++;
        if(currentQuestion<quizData.length){
        loadQuiz();
        }
           else{
            alert("you have finished test");
            quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions</h2>  <button onClick="location.reload()">Reload</button>`;
           }
        }
        else{
          currentQuestion++;
        if(currentQuestion<quizData.length){
        loadQuiz();
        }
       else{
        alert("You Finished Test");
        alert("view your score");
        quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions</h2>  <button onClick="location.reload()">Reload</button>`;
       }
    }

    }
    
});