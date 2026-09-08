// ==========================================
// Virtual Interview Simulator
// Member 3 - Interview Controller
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const settingsData =
        localStorage.getItem("interviewSettings");

    if (!settingsData) {
        alert("Interview settings not found.");
        window.location.href = "index.html";
        return;
    }

    const settings = JSON.parse(settingsData);

    const questions = getQuestions(
        settings.role,
        settings.difficulty,
        settings.questionCount
    );

    if (!questions || questions.length === 0) {
        alert("No questions available.");
        window.location.href = "index.html";
        return;
    }

    let currentQuestionIndex = 0;
    let answers = [];
    let scores = [];
    let timeLeft = 60;
    let timer = null;

    const questionElement =
        document.getElementById("question");

    const answerElement =
        document.getElementById("answer");

    const progressElement =
        document.getElementById("progress");

    const timerElement =
        document.getElementById("timer");

    const progressBar =
        document.getElementById("progressBar");

    const nextBtn =
        document.getElementById("nextBtn");

    const clearBtn =
        document.getElementById("clearBtn");

    const voiceBtn =
        document.getElementById("voiceBtn");

    const voiceStatus =
        document.getElementById("voiceStatus");

    // -----------------------------
    // Load current question
    // -----------------------------

    function loadQuestion() {

        const currentQuestion =
            questions[currentQuestionIndex];

        questionElement.textContent =
            currentQuestion.question;

        answerElement.value = "";

        progressElement.textContent =
            "Question " +
            (currentQuestionIndex + 1) +
            "/" +
            questions.length;

        const progress =
            ((currentQuestionIndex) / questions.length) * 100;

        progressBar.style.width =
            progress + "%";

        startTimer();

        if (typeof clearAnswer === "function") {
            clearAnswer();
        }
    }


    // -----------------------------
    // Timer
    // -----------------------------

    function startTimer() {

        clearInterval(timer);

        timeLeft = 60;

        updateTimer();

        timer = setInterval(function () {

            timeLeft--;

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timer);

                submitCurrentAnswer();
            }

        }, 1000);
    }


    function updateTimer() {

        const seconds =
            String(timeLeft).padStart(2, "0");

        timerElement.textContent =
            "00:" + seconds;
    }


    // -----------------------------
    // Submit answer
    // -----------------------------

    function submitCurrentAnswer() {

        clearInterval(timer);

        if (typeof stopRecording === "function") {
            stopRecording();
        }

        const answer =
            answerElement.value.trim();

        const currentQuestion =
            questions[currentQuestionIndex];

        const score =
            calculateScore(
                answer,
                currentQuestion.keywords
            );

        answers.push(answer);

        scores.push(score);

        if (
            currentQuestionIndex <
            questions.length - 1
        ) {

            currentQuestionIndex++;

            loadQuestion();

        } else {

            finishInterview();
        }
    }


    // -----------------------------
    // Finish interview
    // -----------------------------

    function finishInterview() {

        clearInterval(timer);

        const result =
            createInterviewResult(
                settings.candidateName,
                settings.role,
                scores,
                answers
            );

        saveInterviewResult(result);

        window.location.href =
            "result.html";
    }


    // -----------------------------
    // Next button
    // -----------------------------

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            function () {

                submitCurrentAnswer();

            }
        );
    }


    // -----------------------------
    // Clear button
    // -----------------------------

    if (clearBtn) {

        clearBtn.addEventListener(
            "click",
            function () {

                if (typeof clearAnswer === "function") {
                    clearAnswer();
                } else {
                    answerElement.value = "";
                }

            }
        );
    }


    // -----------------------------
    // Voice button
    // -----------------------------

    if (voiceBtn) {

        voiceBtn.addEventListener(
            "click",
            function () {

                if (
                    typeof isSpeechRecognitionSupported ===
                    "function" &&
                    isSpeechRecognitionSupported()
                ) {

                    if (
                        typeof startRecording ===
                        "function"
                    ) {

                        startRecording();

                        voiceStatus.textContent =
                            "Listening... Speak your answer.";

                        voiceBtn.textContent =
                            "⏹️ Stop Voice";
                    }

                } else {

                    alert(
                        "Speech recognition is not supported. Please use Google Chrome or type your answer."
                    );
                }

            }
        );
    }


    // -----------------------------
    // Keyboard shortcut
    // -----------------------------

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter" &&
                event.ctrlKey
            ) {

                submitCurrentAnswer();

            }

        }
    );


    // Start first question
    loadQuestion();

});