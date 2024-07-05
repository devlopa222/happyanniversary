document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

function checkAnswers() {
    let score = 0;
    const totalQuestions = 10;

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    const answer1 = document.getElementById('answer1');
    if (q1 && q1.value === 'correct') {
        answer1.textContent = "Correct!";
        score++;
    } else {
        answer1.textContent = "The correct answer is Charles University in Prague.";
    }
    answer1.style.display = "block";

    // Question 2
    const q2 = document.getElementById('q2').value;
    const answer2 = document.getElementById('answer2');
    if (q2.toLowerCase().trim() === "when we got home in madrid and went to pick up some lebanese food 40 minutes away, life with you just felt like peace. I remember that all of the troubles felt like they were washing away. You have a beautiful soul and bring this sort of serenity into my life that is really hard to explain".toLowerCase()) {
        answer2.textContent = "Correct!";
        score++;
    } else {
        answer2.textContent = "The correct answer is: When we got home to Madrid and went to pick up some Lebanese food 40 minutes away, life with you just felt like peace. I remember that all of the troubles felt like they were washing away. You have a beautiful soul and bring this sort of serenity into my life that is really hard to explain";
    }
    answer2.style.display = "block";

    // Question 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    const answer3 = document.getElementById('answer3');
    if (q3 && q3.value === 'correct') {
        answer3.textContent = "Correct!";
        score++;
    } else {
        answer3.textContent = "The correct answer is 9.";
    }
    answer3.style.display = "block";

    // Question 4
    const q4 = document.getElementById('q4').value;
    const answer4 = document.getElementById('answer4');
    if (q4.toLowerCase().trim() === "fortnite") {
        answer4.textContent = "Correct!";
        score++;
    } else {
        answer4.textContent = "The correct answer is: Fortnite.";
    }
    answer4.style.display = "block";

    // Question 5
    const q5 = document.getElementById('q5').value;
    const answer5 = document.getElementById('answer5');
    if (q5.toLowerCase().includes("ice cream cones in prague")) {
        answer5.textContent = "Correct!";
        score++;
    } else {
        answer5.textContent = "The correct answer is: Trick question, it’s those ice cream cones in Prague.";
    }
    answer5.style.display = "block";

    // Question 6
    const q6 = document.querySelector('input[name="q6"]:checked');
    const answer6 = document.getElementById('answer6');
    if (q6 && q6.value === 'correct') {
        answer6.textContent = "Correct!";
        score++;
    } else {
        answer6.textContent = "The correct answer is In a swamp.";
    }
    answer6.style.display = "block";

    // Question 7
    const q7 = document.getElementById('q7').value;
    const answer7 = document.getElementById('answer7');
    if (q7.toLowerCase().trim() === "trying to get into a casino in prague") {
        answer7.textContent = "Correct!";
        score++;
    } else {
        answer7.textContent = "The correct answer is: Trying to get into a casino in Prague.";
    }
    answer7.style.display = "block";

    // Question 8
    const q8 = document.getElementById('q8').value;
    const answer8 = document.getElementById('answer8');
    if (q8.toLowerCase().trim() === "almost dying at the edge of a cliff surrounded by sheep while bad bunny was playing") {
        answer8.textContent = "Correct!";
        score++;
    } else {
        answer8.textContent = "The correct answer is: Almost dying at the edge of a cliff surrounded by sheep while Bad Bunny was playing.";
    }
    answer8.style.display = "block";

    // Question 9
    const q9 = document.getElementById('q9').value;
    const answer9 = document.getElementById('answer9');
    if (q9.toLowerCase().trim() === "me") {
        answer9.textContent = "Correct!";
        score++;
    } else {
        answer9.textContent = "The correct answer is: ME.";
    }
    answer9.style.display = "block";

    // Question 10
    const q10 = document.getElementById('q10').value;
    const answer10 = document.getElementById('answer10');
    if (q10.toLowerCase().trim() === "your arms. I want to take a moment to thank you for the relationship and love that we share. I truly want the best for you and I am excited to begin to live and build a life with you. I am your #1 supporter and I can't wait to be by your side for every achievement and most importantly every time we fall down. You are determined, kind hearted, loving and also the funniest person I know. I am so in love with you.") {
        answer10.textContent = "Correct!";
        score++;
    } else {
        answer10.textContent = "The correct answer is: Your arms. I want to take a moment to thank you for the relationship and love that we share. I truly want the best for you and I am excited to begin to live and build a life with you. I am your #1 supporter and I can't wait to be by your side for every achievementand most importantly every time we fall down. You are determined, kind hearted, loving and also the funniest person I know. I am so in love with you.";
    }
    answer10.style.display = "block";

    // Display score
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Your score is ${score} out of ${totalQuestions}.`;
}
