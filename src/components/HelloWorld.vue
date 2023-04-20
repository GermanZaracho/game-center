<template>
  <div class="container">

    <div class="footballBall"></div>

    <header>
      <nav>

        <div id="menu-icon" @click="displayMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>

        <img class="logo" src="../assets/img/logo.png" alt="Logo Game Center">

        <ul class="menu">
          <li class="active"><a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 8L16 12L10 16L10 8Z" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              Game Center</a></li>
          <li><a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 4L5 4C3.89543 4 3 4.89543 3 6L3 20C3 21.1046 3.89543 22 5 22L19 22C20.1046 22 21 21.1046 21 20L21 6C21 4.89543 20.1046 4 19 4Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3 10L21 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="11" y="13" width="2" height="2" rx="1" fill="white" />
                <rect x="7" y="13" width="2" height="2" rx="1" fill="white" />
                <rect x="15" y="13" width="2" height="2" rx="1" fill="white" />
                <rect x="11" y="17" width="2" height="2" rx="1" fill="white" />
                <rect x="7" y="17" width="2" height="2" rx="1" fill="white" />
                <rect x="15" y="17" width="2" height="2" rx="1" fill="white" />
              </svg>
              Your Results</a></li>
          <li><a href="#">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 3C6 2.44772 6.44772 2 7 2L17 2C17.5523 2 18 2.44772 18 3V10C18 13.3137 15.3137 16 12 16V16C8.68629 16 6 13.3137 6 10L6 3Z"
                  stroke="white" stroke-width="2" />
                <path
                  d="M8 21.2C8 19.4327 9.43269 18 11.2 18H12.8C14.5673 18 16 19.4327 16 21.2V21.2C16 21.6418 15.6418 22 15.2 22H8.8C8.35817 22 8 21.6418 8 21.2V21.2Z"
                  stroke="white" stroke-width="2" />
                <path d="M2 6C2 4.89543 2.89543 4 4 4H6L6 10V10C3.79086 10 2 8.20914 2 6V6Z" stroke="white"
                  stroke-width="2" />
                <path d="M18 4L20 4C21.1046 4 22 4.89543 22 6V6C22 8.20914 20.2091 10 18 10V10V4Z" stroke="white"
                  stroke-width="2" />
              </svg>
              Event LB</a></li>
          <li><a href="#">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.51 16L12.51 12" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M12.51 8L12.5 8" stroke="white" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              Game Info</a></li>
        </ul>

        <svg class="cross" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path d="M18 6L6 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </svg>

      </nav>
    </header>

    <div class="content">
      <aside class="contestInfo">
        <div class="titleDescription">

          <div>

            <div class="jerseys">
              <img class="" src="../assets/img/Liverpool@6x.png" alt="Liverpool jersey">
              <img class="arsenal" src="../assets/img/Arsenal@6x.png" alt="Arsenal jersey">
            </div>

            <h1>Liverpool vs arsenal</h1>
            <p>Answer all 8 game questions correctly and take the jackpot home!</p>

          </div>

          <div class="timeLimit">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 8V12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 16H12.01" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Ends in 01D:07H:30M:40S</p>
          </div>



        </div>


        <hr>
        <h3>Make your pick & tap next to start the game!</h3>
        <hr>

        <div class="paytable">

          <h2>Paytable</h2>

          <div class="prizeTable">

            <div class="prizeContainer">

              <div class="prize">
                <div>
                  <span>8/8</span>
                </div>
                <p>$50,000</p>
              </div>

              <div class="prize">
                <div>
                  <span>6/8</span>
                </div>
                <p>$250</p>
              </div>

            </div>

            <div class="prizeContainer">

              <div class="prize">
                <div>
                  <span>7/8</span>
                </div>

                <p>$1,000</p>
              </div>

              <div class="prize">
                <div>
                  <span>TOP</span>
                  <span class="halfTheSize">score</span>
                </div>

                <p>Jersey</p>

              </div>

            </div>

          </div>

        </div>

      </aside>


      <section class="deckGame">

        <div class="deckContainer">

          <div class="cardContainer">

            <div class="qCard">

              <div class="deck">

                <div v-for="(question, index) in gameQuestions" :key="index" :class="'card' + ' card' + (index + 1)">

                  <div class="matchInfo">

                    <div class="eplInfo">

                      <h5>EPL 2022 | WEEK 6</h5>

                      <div class="dateContainer">

                        <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 1.5V5.5" stroke="#2388FB" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M13 1.5V5.5" stroke="#2388FB" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M1 9.5H17" stroke="#2388FB" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <rect x="1" y="3.5" width="16" height="14" rx="2" stroke="#2388FB" stroke-width="2" />
                        </svg>
                        <p class="date">17 APR 2022 </p>
                        <div>
                          <p> <span>18:15</span> </p>
                        </div>

                      </div>

                    </div>

                    <div class="ballIcon"></div>

                  </div>

                  <div class="courtWithTeams">
                    <div>
                      <img class="" src="../assets/img/Liverpool@6x.png" alt="Liverpool jersey">
                      <p>Liverpool</p>
                    </div>
                    <div class="separator">
                      <hr>
                      <img src="../assets/img/Circle.png" alt="Salah Mohamed icon">
                    </div>
                    <div>
                      <img class="arsenal" src="../assets/img/Arsenal@6x.png" alt="Arsenal jersey">
                      <p>Arsenal</p>
                    </div>
                  </div>

                  <div class="questionContainer">
                    <p class="question">{{ question.question }}</p>
                    <p class="curious-fact">{{ question.curiousFact }}</p>
                  </div>

                  <div class="options">

                    <div class="hola" v-for="(group, i) in Math.ceil(question.options.length / 3)" :key="i">

                      <label class="optionContainer"
                        v-for="(option, position) in question.options.slice(i * 3, (i * 3) + 3)" :key="position">

                        <input type="radio" :name="'question-' + index"
                          :id="'question-' + index + '-option-' + ((i * 3) + position)" :value="option"
                          @change="updateSelectedOption">

                        <span :class="{ 'selected': selectedOption === option }">{{ option }}</span>

                      </label>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <button @click="saveChoice">
              <p>Next</p>
            </button>

          </div>

          <section class="participatedDone">

            <p>Thanks for Participate</p>
            <span>Insertar imagen</span>

          </section>

          <section class="tryOptions">

            <button id="try-again-btn">
              <p>Try Again</p>
            </button>

            <button id="finish-attempt-btn">
              <p>Finish Attempt</p>
            </button>

          </section>

          <div class="predictor">

            <div>
              <p>liverpool vs arsenal</p>
              <p>$50,000</p>
            </div>

            <div class="progressBar">
              <span class="progress"></span>
            </div>

          </div>

        </div>

        <div class="jackpot">

          <div id="number" v-if="mostrarNumero" :data-number="numero">${{ numero }},{{ numero1 }}{{ numero1 }}{{ numero1
          }}
          </div>

        </div>

      </section>


    </div>

  </div>
</template>

<script>

export default {

  name: 'HelloWorld',
  props: {
    msg: String
  },

  mounted() {
    const liActive = document.querySelectorAll('ul li');
    // Styles by click on the menu
    liActive.forEach(li => {
      li.addEventListener('click', () => {
        // Remove the .active class from all li elements
        liActive.forEach(li => {
          li.classList.remove('active');
        });
        // Add the .active class to the li element that was clicked
        li.classList.add('active');
      });
    });

    this.mostrarNumero = true;
    this.incrementarNumero();
    ///////////////////////////////////////////
    // State for incomplete questionnaire
    const answers = JSON.parse(localStorage.getItem("myAnswers"));
    this.myAnswers = answers ? answers : [];

    if (this.myAnswers && this.myAnswers.length !== 0) {
      const lastAnswer = this.myAnswers[this.myAnswers.length - 1].answer;
      const lastIndex = lastAnswer.length;
      console.log('The setCardClassess function will be called');
      this.setCardClassess(lastIndex);
      this.theAnswer = lastAnswer;
      this.myQuestionAnswered = lastIndex;
      this.progressBarWidth = (lastIndex * 12.5) - 12.5;
      this.updateProgressBar();

    }

    this.questionsAnswered = this.myQuestionAnswered >= 0 ? this.myQuestionAnswered : 0;
    this.answer = this.theAnswer;

  },
  data() {
    return {
      message: 'Hello Vue!',
      contador: 0,
      selectedOption: '',
      numero: 0,
      valorVariable: 50,
      numero1: 0,
      valorVariable1: 0,
      mostrarNumero: false,
      numeroDiv: document.getElementById("numero"),
      gameQuestions: [
        {
          question: 'what will mohamed salah do first in this match?',
          options: ['Default', 'Assist', 'Card', 'Offside', 'Neither', 'XYZ',],
          answer: '',
          curiousFact: 'salah scored 19 times this season!',
        },
        {
          question: 'what will gabriel martinelli do first in this match?',
          options: ['Default', 'Assist', 'Card', 'Offside', 'Neither', 'XYZ',],
          answer: '',
          curiousFact: 'insert you fun fact here 2',
        },
        {
          question: 'How many yellow cards will there be in the match?',
          options: ['0', '1', '2', '3', '4', '5+',],
          answer: '',
          curiousFact: 'insert you fun fact here 3',
        },
        {
          question: "who will be Liverpool's first change?",
          options: ['Diaz', 'Jota', 'Matip', 'Salah', 'Neither'],
          answer: '',
          curiousFact: 'insert you fun fact here 4',
        },
        {
          question: "who will be Arsenal's first change?",
          options: ['Saka', 'Jesus', 'Partey', 'Martinelli', 'Gabriel', 'Neither'],
          answer: '',
          curiousFact: 'insert you fun fact here 5',
        },
        {
          question: "Who will be the first one to shoot at the goal?",
          options: ['Núñez', 'Jota', 'Salah', 'Martinelli', 'Jesus', 'Neither',],
          answer: '',
          curiousFact: 'insert you fun fact here 6',
        },
        {
          question: "when will be the first goal of the match?",
          options: ["1'", "2'-20'", "21'-45'+", "46'-75'", "76'-90+'", 'Neither'],
          answer: '',
          curiousFact: 'insert you fun fact here 7',
        },
        {
          question: "how will the game end?",
          options: ['Liverpool wins', 'Arsenal wins', 'Draw',],
          answer: '',
          curiousFact: 'insert you fun fact here 8',
        },
      ],
      answer: [],
      questionsAnswered: 0,
      attempts: 0,
      myAttempts: [],
      myAnswers: [],
      myQuestionAnswered : 0,
      theAnswer :[],
      progressBarWidth : 0,
    }
  },
  created: function () {
    const attempts = JSON.parse(localStorage.getItem("myAttempts"));
    this.myAttempts = attempts ? attempts : [];

    // localStorage.removeItem('myAnswer');
    // this.answer = [];

  },
  methods: {
    saveAttempts: function () {
      const myAttemptsString = localStorage.getItem('myAttempts');
      const mySavedAttempts = myAttemptsString ? JSON.parse(myAttemptsString) : [];

      //This is to get the number of attempts saved
      const lastAttempt = mySavedAttempts.length > 0 && mySavedAttempts[mySavedAttempts.length - 1].attempt ? mySavedAttempts[mySavedAttempts.length - 1].attempt : 0;

      this.attempts = lastAttempt;

      this.attempts++;

      const newAttempt = {
        attempt: this.attempts,
        answer: this.answer,
        questionsAnswered: this.questionsAnswered,
      };

      this.finishAttempt();

      this.myAttempts.push(newAttempt);
      console.log(this.myAttempts, 'Mis intentos actuales');

      localStorage.setItem("myAttempts", JSON.stringify(this.myAttempts));

      this.answer = [];
      /////////////////////////////////////
      // This is for the state of answers
      this.myAnswers = [];

      localStorage.setItem("myAnswers", JSON.stringify(this.myAnswers));
      const mySavedAnswer = localStorage.getItem('myAnswers');
      console.log(mySavedAnswer, 'esto es myAnswers del LS', 'deberia estar vacio');

      // This is in case i need to clear my LS

      // localStorage.removeItem('myAttempts');
      // this.myAttempts = [];
      // localStorage.removeItem('myAnswer');
      // console.log('LS was deleted');

    },

    setCardClassess(number) {
      let cardList = document.querySelectorAll(".card");
      cardList.forEach((card, index) => {
        console.log(card, index);
        const currentNumber = parseInt(card.classList[1].replace("card", ""));
        const nextNumber = currentNumber === number
          ? cardList.length
          : currentNumber - number < 0
            ? cardList.length + (currentNumber - number)
            : currentNumber - number;
        card.classList.remove(`card${currentNumber}`);
        card.classList.add(`card${nextNumber}`);
      });
      console.log('setCardClassess function has completed');

    },

    saveAnswer() {
      const newAnswer = {
        questionsAnswered: this.questionsAnswered,
        answer: this.answer,
      };

      this.myAnswers.push(newAnswer);
      localStorage.setItem("myAnswers", JSON.stringify(this.myAnswers));

      console.log(this.myAnswers, 'The answer is saved in LS');

    },

    // When the option is clicked, its content is saved in a variable
    updateSelectedOption(event) {
      this.selectedOption = event.target.nextElementSibling.innerText;
    },

    // This function is called after giving a response
    saveChoice() {
      const myChoice = this.selectedOption;
      if (myChoice !== '') {
        this.answer.push(myChoice);
        console.log(this.answer, 'The answer was pushed');
        this.selectedOption = '';
        this.questionsAnswered++;
        console.log('The questionAnswered was increased');
        this.saveAnswer();
        console.log(this.questionsAnswered, 'answer');
        console.log(this.answer);
        console.log(this.myAnswers);
        this.updateProgressBar();
        this.changeCard();
        console.log('The funcion changeCard was called correctly');
        // localStorage.removeItem('myAttempts');
        // this.myAttempts = [];
        // console.log('it got deleted');
      }

    },

    // Check if you need to change the question or end the attempt
    changeCard() {
      if (this.questionsAnswered <= 7) {
        console.log(this.questionsAnswered, 'fas');
        this.nextCard();
      }
      else {
        console.log('ya respondiste a todas las preguntas');
        this.saveAttempts();
      }

    },

    // This function changes the class of the cards to modify their z-index
    nextCard() {
      let cardList = document.querySelectorAll(".card");

      cardList.forEach((card, index) => {
        console.log(card, index);
        const currentNumber = parseInt(card.classList[1].replace("card", ""));
        const nextNumber = currentNumber === 1 ? cardList.length : currentNumber - 1;
        card.classList.remove(`card${currentNumber}`);
        card.classList.add(`card${nextNumber}`);
      });

    },

    finishAttempt() {
      if (this.questionsAnswered > 7) {
        console.log(this.attempts, 'intento');
        this.questionsAnswered = 0;
        this.updateProgressBar();
        this.tryOptions();
      }

    },

    updateProgressBar() {
      // This will increase the width 12.5% at a time
      let progressBar = document.querySelector('.progress');
      // let width = parseFloat(progressBar.style.width) || 0;
      let step = 12.5;
      let newWidth = this.progressBarWidth + step;

      if (newWidth <= 100) {
        progressBar.style.width = `${newWidth}%`;
      }
      else if (newWidth > 100) {
        newWidth = 0;
        progressBar.style.width = `${newWidth}%`;
      }

      this.progressBarWidth = newWidth;

    },

    // This function is to give options at the end of the questions
    tryOptions() {
      const tryAgainBtn = document.getElementById("try-again-btn");
      const finishAttemptBtn = document.getElementById("finish-attempt-btn");
      const tryOptionsSection = document.querySelector(".tryOptions");
      const participatedDoneSection = document.querySelector(".participatedDone");
      const cardContainer = document.querySelector(".cardContainer");
      const progressBarContainer = document.querySelector(".predictor");
      const self = this;

      cardContainer.style.display = "none";
      progressBarContainer.style.display = "none";
      tryOptionsSection.style.display = "flex";

      tryAgainBtn.addEventListener("click", function () {
        tryOptionsSection.style.display = "none";
        cardContainer.style.display = "flex";
        progressBarContainer.style.display = "block";

        self.nextCard();
      });

      finishAttemptBtn.addEventListener("click", function () {
        tryOptionsSection.style.display = "none";
        participatedDoneSection.style.display = "flex";
      });

    },

    // This function is for the $50,000 animation
    incrementarNumero() {
      if (this.numero < this.valorVariable) {
        setTimeout(() => {
          this.numero += 1;
          this.incrementarNumero();
        }, 2);
      }
    },

    displayMenu() {
      const btn = document.querySelector(".menu");
      btn.classList.toggle("real");
      console.log('hello');
    },

  }

}

</script>


<style lang="scss">
@import '../assets/scss/style.scss';
@import '../assets/scss/game-questions.scss';

.card {
  background-color: white;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}

.question {
  font-weight: bold;
  font-size: 1.2em;
}

.curious-fact {
  font-style: italic;
  margin-bottom: 10px;
}

.options label {
  display: block;
  margin-bottom: 5px;
}

.options span {
  cursor: pointer;
}
</style>
