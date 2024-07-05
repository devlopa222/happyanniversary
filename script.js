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
    if (q2.toLowerCase().includes("when we got home to madrid and went to pick up some lebanese food 40 minutes away, life with you just felt like peace".toLowerCase())) {
        answer2.textContent = "Correct!";
        score++;
    } else {
        answer2.textContent = "The correct answer is: When we got home to Madrid and went to pick up some Lebanese food 40 minutes away, life with you just felt like peace.";
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
    if (q4.toLowerCase() === "fortnite") {
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
    const q
