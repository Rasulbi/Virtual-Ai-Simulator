// ==========================================
// Virtual Interview Simulator
// Member 3 - Voice Recorder
// ==========================================

// Check whether the browser supports Speech Recognition
const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = null;
let isRecording = false;
let currentTranscript = "";

// Create Speech Recognition only if the browser supports it
if (SpeechRecognition) {
    recognition = new SpeechRecognition();

    // Continue listening while the candidate is speaking
    recognition.continuous = true;

    // Return the best available result
    recognition.interimResults = true;

    // English language for interview answers
    recognition.lang = "en-US";

    // When speech is recognized
    recognition.onresult = function (event) {
        let transcript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
        }

        currentTranscript = transcript.trim();

        // Display the answer if the element exists
        const answerBox = document.getElementById("answer");

        if (answerBox) {
            answerBox.value = currentTranscript;
        }
    };

    // When recording starts
    recognition.onstart = function () {
        isRecording = true;
        console.log("Voice recording started.");
    };

    // When recording stops
    recognition.onend = function () {
        isRecording = false;
        console.log("Voice recording stopped.");
    };

    // Handle microphone/speech recognition errors
    recognition.onerror = function (event) {
        console.error("Speech recognition error:", event.error);
        isRecording = false;
    };
}

// Start voice recording
function startRecording() {
    if (!recognition) {
        alert(
            "Speech recognition is not supported in this browser. Please type your answer manually."
        );
        return;
    }

    if (!isRecording) {
        currentTranscript = "";

        try {
            recognition.start();
        } catch (error) {
            console.error("Could not start recording:", error);
        }
    }
}

// Stop voice recording
function stopRecording() {
    if (recognition && isRecording) {
        recognition.stop();
    }
}

// Get the current answer
function getAnswer() {
    const answerBox = document.getElementById("answer");

    if (answerBox && answerBox.value.trim() !== "") {
        return answerBox.value.trim();
    }

    return currentTranscript.trim();
}

// Clear the current answer
function clearAnswer() {
    currentTranscript = "";

    const answerBox = document.getElementById("answer");

    if (answerBox) {
        answerBox.value = "";
    }
}

// Check whether speech recognition is available
function isSpeechRecognitionSupported() {
    return SpeechRecognition !== undefined;
}