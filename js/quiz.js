class Quiz {
    constructor() {
        fetch('questions.json')
            .then(response => response.json())
            .then(questions => {
                this.questions = questions;
                this.showQuestion();
            })
            document.querySelector('.check').addEventListener('click', () => this.checkAnswer());
            document.querySelector('.next').addEventListener('click', () => this.showQuestion());
    }
    showQuestion() {
        const idx = Math.floor(Math.random() * this.questions.length);
        this.currQuestion = this.questions[idx];
        document.querySelector('.question').value = this.currQuestion.q;
        document.querySelector('.result').innerText = '';
        document.querySelector('.answer').value = '';
    }
    checkAnswer() {
         const answer = document.querySelector('.answer').value;
         document.querySelector('.result').innerText = 
         answer === this.currQuestion.answer1 ? "Ти - панк Жадан. Ти саме написав 'Депеш Мод' та витратив весь гонорар на пиво."
         : answer === this.currQuestion.answer2 ? "Ти - не Жадан. Ти - Кокотюха, тому будеш відповідати перед апостолом Петром за такі шедеври, як 'Мєнтовскій город'." 
         : answer === this.currQuestion.answer3 ? "Ти - філософський Жадан. І ти вже дістав своїх друзів своїм 'час працює на мене, він мене убиває'!"
         : answer === this.currQuestion.answer4 ? "Ти - закоханий Жадан. Час писати вірша про Натаху."
         : answer === this.currQuestion.answer5 ? "Ти - політичний Жадан. Ти все думаєш: 'Українська залізниця - гнуті рейки, стрьомні шпали. За...' Ну і далі по тексту."
         : answer === this.currQuestion.answer6 ? "Ти - не Жадан. Ти - Олег Король. І ти думаєш лише про непозбувну бентегу, невиразну будуччину та бездуховну каламуть."
         : "Будь ласка, вибери один із наведених у питанні варіантів";
         }
         
}
new Quiz ();