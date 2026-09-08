// ==========================================
// Virtual Interview Simulator
// Member 3 - Application Controller
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const startBtn = document.getElementById("startBtn");
    const themeBtn = document.getElementById("themeBtn");

    // Theme button
    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️";
            } else {
                themeBtn.textContent = "🌙";
            }
        });
    }

    // Start interview
    if (startBtn) {

        startBtn.addEventListener("click", function () {

            const candidateName =
                document.getElementById("candidateName").value.trim();

            const role =
                document.getElementById("role").value;

            const difficulty =
                document.getElementById("difficulty").value;

            const questionCount =
                Number(document.getElementById("questionCount").value);

            if (candidateName === "") {
                alert("Please enter your name.");
                return;
            }

            // Save interview settings
            const interviewSettings = {
                candidateName: candidateName,
                role: role,
                difficulty: difficulty,
                questionCount: questionCount
            };

            localStorage.setItem(
                "interviewSettings",
                JSON.stringify(interviewSettings)
            );

            // Open interview page
            window.location.href = "interview.html";
        });
    }
});