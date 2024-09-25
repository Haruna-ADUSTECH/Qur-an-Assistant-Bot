const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

// Define the questions and responses with keywords as keys
const responses = {
    "quran": "The Quran is the holy book of Islam, revealed to the Prophet Muhammad (PBUH) over a span of 23 years.",
    "allah": "Allah is the Arabic word for God, and in Islam, He is the only God, the Creator of the universe.",
    "muhammad": "Prophet Muhammad (PBUH) is the last and final messenger of Allah, sent to guide humanity with the message of Islam.",
    "surah": "There are 114 Surahs (chapters) in the Quran, each of which has its own distinct message.",
    "hijrah": "The Hijrah refers to the migration of Prophet Muhammad (PBUH) and his followers from Mecca to Medina in 622 CE.",
    "laylatul qadr": "Laylatul Qadr, also known as the 'Night of Power', is the night the Quran was first revealed to Prophet Muhammad (PBUH).",
    "five pillars": "The five pillars of Islam are Shahada (Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage to Mecca).",
    "hajj": "Hajj is the pilgrimage to Mecca, a mandatory religious duty for Muslims that must be carried out at least once in their lifetime if they are physically and financially capable.",
    "ramadan": "Ramadan is the ninth month of the Islamic calendar, during which Muslims fast from dawn to sunset.",
    "eid": "Eid al-Fitr and Eid al-Adha are two major Islamic festivals. Eid al-Fitr is celebrated at the end of Ramadan, while Eid al-Adha commemorates the willingness of Ibrahim (Abraham) to sacrifice his son as an act of obedience to God.",
    "zakat": "Zakat is the third pillar of Islam and refers to the obligatory charity that Muslims must give to those in need, typically 2.5% of their savings.",
    "salah": "Salah, or prayer, is the second pillar of Islam and is performed five times a day by Muslims around the world.",
    "sawm": "Sawm refers to fasting during the month of Ramadan, where Muslims abstain from food, drink, and other physical needs from dawn until sunset.",
    "jannah": "Jannah is the Islamic concept of paradise, where those who have lived righteous lives will be rewarded in the afterlife.",
    "jahannam": "Jahannam is the Islamic concept of Hell, where those who have committed evil deeds will face punishment in the afterlife.",
    "prophets": "Islam recognizes many prophets, including Adam, Noah, Abraham, Moses, Jesus, and Muhammad (PBUH), who is the final prophet.",
    "qibla": "The Qibla is the direction that Muslims face during prayer, which is towards the Kaaba in Mecca.",
    "hadith": "Hadith refers to the sayings, actions, and approvals of Prophet Muhammad (PBUH). They serve as an important source of guidance for Muslims, alongside the Quran.",
    "kaaba": "The Kaaba is a cube-shaped building in Mecca, Saudi Arabia, considered the most sacred site in Islam.",
    "islam": "Islam is a monotheistic religion that believes in one God, Allah, and follows the teachings of the Prophet Muhammad (PBUH).",
    "imam": "An Imam is a leader of prayer in a mosque, and in some cases, a community leader.",
    "masjid": "A Masjid, or mosque, is a place where Muslims gather for worship and communal prayers.",
    "sharia": "Sharia is Islamic law, derived from the Quran and the Hadith, and covers all aspects of a Muslim's life.",
    "sunnah": "Sunnah refers to the practices of the Prophet Muhammad (PBUH) that Muslims are encouraged to follow.",
    "jihad": "Jihad in Islam refers to the struggle or effort in the way of God. It can include personal struggles for righteousness and larger struggles to protect the Muslim community.",
    "halal": "Halal means 'permissible' in Arabic and refers to food or actions that are allowed in Islam according to Sharia law.",
    "haram": "Haram means 'forbidden' in Arabic and refers to actions or foods that are prohibited in Islam.",
    "day of judgment": "The Day of Judgment is the day when all humans will be resurrected and judged by Allah for their deeds in this life.",
    "shahada": "Shahada is the Islamic declaration of faith: 'There is no god but Allah, and Muhammad is His Messenger'.",
    "angels": "Angels in Islam are spiritual beings created from light. They serve various roles, including delivering revelations to prophets and recording human deeds.",
    "al-fatiha": "Al-Fatiha is the first chapter (Surah) of the Quran, consisting of seven verses, and is recited in every unit of prayer.",
    "iblis": "Iblis is the Islamic name for Satan, who refused to bow to Adam and was expelled from Paradise.",
    "barzakh": "Barzakh is the period between a person’s death and their resurrection on the Day of Judgment.",
    "dua": "Dua is a personal prayer or supplication made by Muslims to communicate with Allah.",
    "tahajjud": "Tahajjud is an optional night prayer that is highly recommended for Muslims seeking closeness to Allah.",
    "salat ul-jumuah": "Salat ul-Jumuah is the congregational prayer that Muslims perform every Friday in place of the regular midday prayer (Dhuhr).",
    "zabur": "Zabur is the holy book given to Prophet Dawood (David), and it is one of the four major Islamic scriptures.",
    "injil": "Injil is the Arabic name for the Gospel, the holy book given to Prophet Isa (Jesus).",
    "torah": "The Torah is the holy book given to Prophet Musa (Moses), and it is one of the four major Islamic scriptures.",
    "mahdi": "The Mahdi is an awaited figure in Islamic eschatology who will appear before the Day of Judgment to restore justice and righteousness.",
    "dajjal": "Dajjal is the false messiah in Islamic eschatology, who will appear before the Day of Judgment and deceive many before being defeated by Prophet Isa (Jesus).",
    "fajr": "Fajr is the first of the five daily prayers in Islam, performed at dawn.",
    "zuhr": "Zuhr is the second of the five daily prayers, performed just after midday.",
    "asr": "Asr is the third of the five daily prayers, performed in the late afternoon.",
    "maghrib": "Maghrib is the fourth of the five daily prayers, performed just after sunset.",
    "isha": "Isha is the fifth and final prayer of the day, performed at night.",
    "qadar": "Qadar refers to divine predestination in Islam, the belief that Allah has knowledge and control over everything that happens.",
};

// Function to get a relevant response based on keywords in the user's input
function getResponse() {
    const input = userInput.value.trim().toLowerCase();  // Convert input to lowercase
    if (!input) return;  // If input is empty, return

    // Display user's question
    displayMessage(input, "user");

    // Check for any matching keyword in the input
    let found = false;
    for (const [keyword, response] of Object.entries(responses)) {
        const keywordRegex = new RegExp(keyword, 'i');  // Case-insensitive keyword match
        if (keywordRegex.test(input)) {
            setTimeout(() => {
                displayMessage(response, "bot");
            }, 500);
            found = true;
            break;  // Stop once a relevant response is found
        }
    }

    if (!found) {
        // Default response when no match is found
        setTimeout(() => {
            displayMessage("I'm sorry, I don't have the answer to that. Try asking something else about Islam or the Quran.", "bot");
        }, 500);
    }

    // Clear input field after response
    userInput.value = "";
}

// Function to display messages in the chat box
function displayMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", `${type}-message`);

    const messageSpan = document.createElement("span");
    messageSpan.textContent = message;

    messageDiv.appendChild(messageSpan);
    chatOutput.appendChild(messageDiv);

    // Scroll to the bottom of the chat output
    chatOutput.scrollTop = chatOutput.scrollHeight;
            }
