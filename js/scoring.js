// ==========================================
// Virtual Interview Simulator
// Member 3 - Answer Scoring
// ==========================================

// Calculate the score based on matching keywords
function calculateScore(answer, keywords) {

    // Make sure the answer is a string
    if (!answer || typeof answer !== "string") {
        return 0;
    }

    // Make sure keywords exist
    if (!Array.isArray(keywords) || keywords.length === 0) {
        return 0;
    }

    // Convert the answer to lowercase
    const normalizedAnswer = answer.toLowerCase();

    // Count how many keywords were found
    let matchedKeywords = 0;

    keywords.forEach(function (keyword) {

        const normalizedKeyword = keyword.toLowerCase().trim();

        if (
            normalizedKeyword !== "" &&
            normalizedAnswer.includes(normalizedKeyword)
        ) {
            matchedKeywords++;
        }
    });

    // Calculate percentage
    const score = Math.round(
        (matchedKeywords / keywords.length) * 100
    );

    return score;
}


// Get the number of keywords matched
function getMatchedKeywordCount(answer, keywords) {

    if (!answer || !Array.isArray(keywords)) {
        return 0;
    }

    const normalizedAnswer = answer.toLowerCase();

    let matchedKeywords = 0;

    keywords.forEach(function (keyword) {

        const normalizedKeyword = keyword.toLowerCase().trim();

        if (
            normalizedKeyword !== "" &&
            normalizedAnswer.includes(normalizedKeyword)
        ) {
            matchedKeywords++;
        }
    });

    return matchedKeywords;
}


// Get performance level from score
function getPerformanceLevel(score) {

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


// Generate feedback based on score
function getFeedback(score) {

    if (score >= 80) {
        return "Excellent answer. You demonstrated strong understanding.";
    }

    if (score >= 60) {
        return "Good answer. Keep practicing to improve further.";
    }

    if (score >= 40) {
        return "Average answer. Try to include more important concepts.";
    }

    return "Needs improvement. Review the topic and practice your answer.";
}


// Check whether the candidate attempted the answer
function isAnswerAttempted(answer) {

    if (!answer || typeof answer !== "string") {
        return false;
    }

    return answer.trim().length > 0;
}