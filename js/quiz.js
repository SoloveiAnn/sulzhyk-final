class Quiz {
    constructor() {
        fetch('questions.json')
            .then(response => response.json())
            .then(questions => {
                this.questions = questions;
                this.showQuestion();
            })
            document.querySelector('.check')
    }
    showQuestion() {
        const idx = Math.floor(Math.random() * this.questions.length);
        this.currQuestion = this.questions[idx];
        document.querySelector('.question').value = this.currQuestion.q;
    }
}
new Quiz ();