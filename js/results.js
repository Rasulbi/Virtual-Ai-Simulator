// ==========================================
// Virtual Interview Simulator
// Member 3 - Results Management
// ==========================================

// Calculate the overall interview score
function calculateOverallScore(scores) {

    if (!Array.isArray(scores) || scores.length === 0) {
        return 0;
    }

    const total = scores.reduce(function (sum, score) {
        return sum + Number(score);
    }, 0);

    return Math.round(total / scores.length);
}


// Count attempted answers
function countAttemptedAnswers(answers) {

    if (!Array.isArray(answers)) {
        return 0;
    }

    return answers.filter(function (answer) {
        return answer &&
               typeof answer === "string" &&
               answer.trim().length > 0;
    }).length;
}


// Count skipped answers
function countSkippedAnswers(answers) {

    if (!Array.isArray(answers)) {
        return 0;
    }

    return answers.filter(function (answer) {
        return !answer ||
               typeof answer !== "string" ||
               answer.trim().length === 0;
    }).length;
}


// Generate overall performance
function getOverallPerformance(score) {

    if (score >= 80) {
        return "Excellent";
    }

    if (score >= 60) {
        return "Good";
    }

    if (score >= 40) {
        return "Average";
    }

    return "Needs Improvement";
}


// Generate suggestions
function getSuggestions(score) {

    if (score >= 80) {
        return [
            "Keep practicing advanced interview questions.",
            "Continue improving your communication skills."
        ];
    }

    if (score >= 60) {
        return [
            "Practice more technical questions.",
            "Try to give more detailed answers."
        ];
    }

    if (score >= 40) {
        return [
            "Review important technical concepts.",
            "Practice explaining your answers clearly."
        ];
    }

    return [
        "Review the interview topics again.",
        "Practice answering basic technical questions.",
        "Try speaking your answers aloud before interviews."
    ];
}


// Create the complete interview result
function createInterviewResult(
    candidateName,
    role,
    scores,
    answers
) {

    const overallScore = calculateOverallScore(scores);

    const attempted = countAttemptedAnswers(answers);

    const skipped = countSkippedAnswers(answers);

    const performance = getOverallPerformance(overallScore);

    const suggestions = getSuggestions(overallScore);

    return {
        candidateName: candidateName || "Candidate",
        role: role || "Not specified",
        totalQuestions: answers.length,
        attempted: attempted,
        skipped: skipped,
        overallScore: overallScore,
        performance: performance,
        suggestions: suggestions,
        scores: scores,
        answers: answers,
        date: new Date().toLocaleString()
    };
}


// Save interview result to localStorage
function saveInterviewResult(result) {

    localStorage.setItem(
        "interviewResult",
        JSON.stringify(result)
    );
}


// Get the saved interview result
function getSavedInterviewResult() {

    const savedResult = localStorage.getItem(
        "interviewResult"
    );

    if (!savedResult) {
        return null;
    }

    return JSON.parse(savedResult);
}


// Clear saved interview result
function clearInterviewResult() {

    localStorage.removeItem("interviewResult");
}