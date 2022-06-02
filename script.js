const quizDB = [
    {
        question: "01: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cashcading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer product",
        b: "Hypertext Test protocol",
        c: "Hey transfer Protocol",
        d: "Hypertext Transfer protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },


];

const question = document.querySelector('.question');
const question1 = document.querySelector('#question1');
const question2 = document.querySelector('#question2');
const question3 = document.querySelector('#question3');
const question4 = document.querySelector('#question4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;

let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.d;
    option4.innerText = questionList.a;
}


loadQuestion();


const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    })
    return answer;
}

const deselectAll = ()=>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswers = getCheckAnswer();
    console.log(checkedAnswers);

    if(checkedAnswers == quizDB[questionCount].ans){
        score++;
    };
      

    questionCount++;
    deselectAll();
    

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML =`
          <h3> you scored ${score}/${quizDB.length} 
          ✌️ </h3>
          <button class="btn" onclick="location.reload()">play again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
})
