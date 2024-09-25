const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

// Define the questions and responses with keywords as keys
const responses = {
    "quran": "The Quran is the holy book of Islam, revealed to the Prophet Muhammad (PBUH) over a span of 23 years.",
    "allah": "Allah is the Arabic word for God, and in Islam, He is the only God, the Creator of the universe.",
    "tafsir": "Tafsir refers to the interpretation or explanation of the Quran. Scholars provide tafsir to help understand the deeper meanings of Quranic verses.",
    "ummah": "Ummah refers to the global community of Muslims, united by their faith in Islam.",
    "masjid al-haram": "Masjid al-Haram is the largest mosque in the world, located in Mecca. It surrounds the Kaaba and is Islam's most sacred site.",
    "masjid al-nabawi": "Masjid al-Nabawi, also known as the Prophet's Mosque, is located in Medina and is one of the holiest sites in Islam.",
    "sahaba": "The Sahaba are the companions of Prophet Muhammad (PBUH), who played a vital role in spreading Islam and preserving its teachings.",
    "zakat al-fitr": "Zakat al-Fitr is a charity given to the poor at the end of Ramadan before the Eid al-Fitr prayer.",
    "hadith qudsi": "Hadith Qudsi are special sayings of Prophet Muhammad (PBUH) where the Prophet conveys Allah's words, but they are not part of the Quran.",
    "ar-rahman": "'Ar-Rahman' means 'The Most Merciful' and is one of the 99 names of Allah.",
    "ar-rahim": "'Ar-Rahim' means 'The Most Compassionate' and is another of the 99 names of Allah.",
    "shirk": "Shirk refers to the sin of associating partners with Allah, which is considered the greatest sin in Islam.",
    "tawhid": "Tawhid is the concept of monotheism in Islam, the belief in the oneness of Allah.",
    "idolatry": "In Islam, idolatry is strictly forbidden, as it goes against the principle of Tawhid (the oneness of Allah).",
    "fitnah": "Fitnah refers to trials, tribulations, or tests of faith that a person may face in their lifetime.",
    "nasheed": "A nasheed is a form of vocal music popular in the Islamic world, typically focused on religious themes.",
    "qari": "A Qari is a person who recites the Quran with proper pronunciation and melody, following the rules of Tajweed.",
    "tajweed": "Tajweed is the set of rules governing how the Quran should be properly pronounced during recitation.",
    "juz": "A Juz is one of 30 equal sections into which the Quran is divided, used to help Muslims read the Quran over the course of a month.",
    "tarawih": "Tarawih are additional prayers performed by Sunni Muslims at night during the month of Ramadan.",
    "umrah": "Umrah is a pilgrimage to Mecca that can be undertaken at any time of the year, unlike Hajj which has specific dates.",
    "munafiq": "A Munafiq is a hypocrite in Islam, someone who outwardly practices Islam but inwardly disbelieves.",
    "shura": "Shura in Islam refers to the concept of consultation, particularly in decision-making among leaders and scholars.",
    "ayat": "An Ayah is a verse from the Quran, with the Quran containing over 6,000 Ayat.",
    "nubuwwah": "Nubuwwah refers to the concept of prophethood in Islam, including the belief in the line of prophets sent by Allah.",
    "seal of the prophets": "Prophet Muhammad (PBUH) is known as the 'Seal of the Prophets', meaning he is the last and final prophet in Islam.",
    "bismillah": "Bismillah means 'In the name of Allah', and it is a phrase that Muslims say before beginning any action, seeking blessings from Allah.",
    "fard": "Fard refers to obligatory duties in Islam that every Muslim must perform, such as the five daily prayers.",
    "mustahabb": "Mustahabb refers to recommended actions in Islam that are not obligatory but carry spiritual rewards if performed.",
    "makruh": "Makruh refers to actions that are discouraged but not sinful if performed in Islam.",
    "khutbah": "A Khutbah is a sermon, typically delivered during the Friday prayer or on special Islamic occasions.",
    "ihram": "Ihram is the sacred state a Muslim enters when performing Hajj or Umrah, involving special clothing and behavior.",
    "mihrab": "A Mihrab is a niche in the wall of a mosque that indicates the direction of the Qibla, towards Mecca.",
    "minbar": "The Minbar is the pulpit in a mosque from which the Imam delivers sermons.",
    "haram": "In Islam, 'Haram' refers to things or actions that are prohibited and considered sinful.",
    "halal": "Halal refers to things or actions that are permissible under Islamic law.",
    "dhikr": "Dhikr refers to the remembrance of Allah, often through repeated phrases or prayers.",
    "asma ul husna": "Asma ul Husna refers to the 99 names of Allah, each describing an attribute of God.",
    "ruqyah": "Ruqyah refers to the Islamic practice of reciting Quranic verses and prayers to seek healing or protection.",
    "madinah": "Madinah, also known as Medina, is the second holiest city in Islam and the burial place of Prophet Muhammad (PBUH).",
    "ashura": "Ashura is an important day in the Islamic calendar, particularly for Shia Muslims, who commemorate the martyrdom of Imam Husayn.",
    "adhan": "The Adhan is the Islamic call to prayer, traditionally recited from a mosque's minaret.",
    "muezzin": "A Muezzin is the person who calls Muslims to prayer from the mosque.",
    "sirat al-mustaqim": "Sirat al-Mustaqim refers to the 'Straight Path' in Islam, the path of righteousness and obedience to Allah.",
    "khadijah": "Khadijah was the first wife of Prophet Muhammad (PBUH) and the first person to accept Islam.",
    "al-isra wal miraj": "Al-Isra wal Miraj refers to the miraculous night journey of Prophet Muhammad (PBUH) from Mecca to Jerusalem and his ascension to the heavens.",
    "ismail": "Ismail was the son of Prophet Ibrahim (Abraham) and Hagar, and he is considered an important prophet in Islam.",
    "ibrahim": "Prophet Ibrahim (Abraham) is a key figure in Islam, known for his unwavering faith in Allah and his willingness to sacrifice his son Ismail.",
    "idris": "Prophet Idris (Enoch) is mentioned in the Quran as a prophet and is regarded as one of the earliest prophets sent by Allah.",
    "musa": "Prophet Musa (Moses) is a major prophet in Islam, known for leading the Israelites out of Egypt and receiving the Torah from Allah.",
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
