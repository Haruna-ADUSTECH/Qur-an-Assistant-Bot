const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

const responses = {
    "what is the quran": "The Quran is the holy book of Islam, believed to be the word of God as revealed to the Prophet Muhammad (PBUH).",
    "who is allah": "Allah is the Arabic word for God. Muslims believe in one God, who is the creator and sustainer of the universe.",
    "who is prophet muhammad": "Prophet Muhammad (PBUH) is the final messenger of God in Islam, sent to guide humanity with the teachings of the Quran.",
    "how many surahs in the quran": "There are 114 Surahs (chapters) in the Quran.",
    "what is islam": "Islam is a monotheistic religion that believes in one God (Allah) and follows the teachings of Prophet Muhammad (PBUH).",
    "default": "I'm still learning! Please ask a different question or try phrasing it differently."
};

function getResponse() {
    const input = userInput.value.toLowerCase();
    const response = responses[input] || responses["default"];
    
    // Display user's question
    displayMessage(input, "user");
    
    // Display bot's response
    setTimeout(() => {
        displayMessage(response, "bot");
    }, 500);
    
    // Clear input
    userInput.value = "";
}

function displayMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", `${type}-message`);
    
    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;
    
    messageDiv.appendChild(messageSpan);
    chatOutput.appendChild(messageDiv);
    
    // Scroll to the bottom
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
