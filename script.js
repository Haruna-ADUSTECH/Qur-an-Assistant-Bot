const chatOutput = document.getElementById("chat-output");
const userInput = document.getElementById("user-input");

// Define the questions and responses with keywords as keys
const responses = {
     "juz": "A Juz is one of thirty equal divisions of the Quran, which are used to facilitate its recitation over a month.",
    "madinah": "Madinah, also known as Medina, is the city where Prophet Muhammad (PBUH) migrated during the Hijrah and where he is buried.",
    "mecca": "Mecca is the holiest city in Islam and the birthplace of Prophet Muhammad (PBUH). It is the destination for the Hajj pilgrimage.",
    "kaaba": "The Kaaba is the most sacred site in Islam, located in Mecca. Muslims face its direction during prayer (Qibla).",
    "abubakar": "Abu Bakr was the first Caliph after the death of Prophet Muhammad (PBUH) and one of his closest companions.",
    "umar": "Umar ibn al-Khattab was the second Caliph of Islam and played a crucial role in the expansion of the Islamic empire.",
    "uthman": "Uthman ibn Affan was the third Caliph of Islam and is credited with compiling the Quran into a single book format.",
    "ali": "Ali ibn Abi Talib, the cousin and son-in-law of Prophet Muhammad (PBUH), was the fourth Caliph of Islam.",
    "isra": "The Isra refers to Prophet Muhammad’s (PBUH) miraculous night journey from Mecca to Jerusalem.",
    "mi'raj": "The Mi'raj refers to Prophet Muhammad’s (PBUH) ascension to the heavens, where he met with Allah.",
    "islamic calendar": "The Islamic calendar is a lunar calendar consisting of 12 months and is used to determine the dates of Islamic events and holidays.",
    "al-fatiha": "Surah Al-Fatiha is the opening chapter of the Quran, recited in every unit of the Muslim prayer (Salah).",
    "adhan": "The Adhan is the Islamic call to prayer, traditionally called by a muezzin from a mosque’s minaret.",
    "tawhid": "Tawhid refers to the oneness of Allah, the central concept of monotheism in Islam.",
    "hijab": "Hijab refers to the modest dress code prescribed for Muslim women and is often associated with the headscarf.",
    "ramadan": "Ramadan is the ninth month of the Islamic calendar, during which Muslims fast from dawn to sunset.",
    "eid": "Eid refers to the Islamic festivals, primarily Eid al-Fitr (after Ramadan) and Eid al-Adha (during Hajj).",
    "tawaf": "Tawaf is the act of circumambulating the Kaaba seven times in a counterclockwise direction during Hajj and Umrah.",
    "shirk": "Shirk refers to the sin of associating partners with Allah, considered the gravest sin in Islam.",
    "ummah": "Ummah refers to the global Muslim community bound by the shared faith of Islam.",
    "dua": "Dua is the personal supplication or prayer made to Allah for guidance, help, or forgiveness.",
    "qiyamah": "Qiyamah refers to the Day of Judgment in Islam, when all souls will be resurrected and judged by Allah.",
    "halal": "Halal refers to anything permissible under Islamic law, often used in the context of food and lifestyle choices.",
    "haram": "Haram refers to anything prohibited in Islam, such as certain foods, actions, and behaviors.",
    "dhikr": "Dhikr is the remembrance of Allah, often through repetitive recitations of His names or praises.",
    "bismillah": "'Bismillah' means 'In the name of Allah' and is commonly recited before starting any task in Islam.",
    "asr prayer": "Asr is the afternoon prayer in Islam, the third of the five daily prayers.",
    "isha prayer": "Isha is the night prayer in Islam, the fifth and last of the five daily prayers.",
    "fajr prayer": "Fajr is the dawn prayer in Islam, the first of the five daily prayers.",
    "zakat": "Zakat is the obligatory charity that Muslims must give, usually 2.5% of their wealth, to help the poor and needy.",
    "adhan time": "The Adhan, or call to prayer, occurs five times a day before each of the daily prayers.",
    "juz amma": "Juz Amma refers to the 30th Juz of the Quran, which contains short Surahs commonly recited in prayer.",
    "istikhara": "Istikhara is a special prayer Muslims perform when seeking guidance from Allah regarding important decisions.",
    "tajweed": "Tajweed is the set of rules governing the correct pronunciation and recitation of the Quran.",
    "qari": "A Qari is someone skilled in the recitation of the Quran, often leading prayers or competitions.",
    "ibadah": "Ibadah refers to acts of worship in Islam, encompassing everything done to please Allah, from prayer to charity.",
    "taqwa": "Taqwa is the consciousness and fear of Allah, leading to piety and righteous living.",
    "qibla": "The Qibla is the direction Muslims face during prayer, which is toward the Kaaba in Mecca.",
    "wudu": "Wudu is the ritual purification performed before prayers, involving the washing of specific body parts.",
    "ghusl": "Ghusl is a full-body ritual purification performed after certain events, such as after intercourse or menstruation.",
    "nisab": "Nisab refers to the minimum amount of wealth a Muslim must have before being obligated to pay Zakat.",
    "hadith qudsi": "A Hadith Qudsi is a special category of Hadith where Allah speaks directly through Prophet Muhammad (PBUH).",
    "ismail": "Ismail, the son of Prophet Ibrahim (Abraham), is considered a prophet in Islam and is associated with the Hajj rituals.",
    "musa": "Prophet Musa (Moses) is one of the most important prophets in Islam, known for leading the Israelites out of Egypt.",
    "isa": "Prophet Isa (Jesus) is a revered prophet in Islam, believed to have been born miraculously and will return before the Day of Judgment.",
    "zakariya": "Prophet Zakariya (Zachariah) is a prophet mentioned in the Quran, known for being the father of Prophet Yahya (John the Baptist).",
    "yahya": "Prophet Yahya (John the Baptist) is a prophet in Islam, known for his righteousness and calling people to repentance.",
    "al-hamdulillah": "'Al-Hamdulillah' means 'All praise is due to Allah' and is often said to express gratitude or contentment.",
    "subhanallah": "'Subhanallah' means 'Glory be to Allah' and is used to express amazement or praise of Allah.",
    "fiqh": "Fiqh is Islamic jurisprudence, the understanding of Sharia law and its application in daily life.",
    "bilal": "Bilal ibn Rabah was one of the most trusted companions of Prophet Muhammad (PBUH) and the first Muezzin of Islam.",
    "hijrah": "The Hijrah refers to the migration of Prophet Muhammad (PBUH) and his followers from Mecca to Medina, marking the start of the Islamic calendar.",
    "israfil": "Israfil is the angel who will blow the trumpet to announce the Day of Judgment in Islamic belief.",
    "jannah": "Jannah is the Islamic concept of paradise, where believers are rewarded for their faith and good deeds.",
    "jahannam": "Jahannam is the Islamic concept of hell, where sinners are punished for their wrongdoings.",
    "sadaqah": "Sadaqah refers to voluntary charity given by Muslims to those in need, beyond the obligatory Zakat.",
    "usul al-fiqh": "Usul al-Fiqh is the study of the principles of Islamic jurisprudence, which forms the basis for understanding Sharia law.",
    "sharia": "Sharia is the Islamic legal system derived from the Quran and Hadith, guiding Muslims in various aspects of life.",
    "imam": "An Imam is the leader of prayer in a mosque and a spiritual leader in the Muslim community.",
    "ahlul bayt": "Ahlul Bayt refers to the family of Prophet Muhammad (PBUH), particularly revered in Shia Islam.",
    "rasul": "Rasul refers to a messenger in Islam, someone who is given a specific message from Allah to deliver to their people.",
    "nabi": "A Nabi is a prophet in Islam, someone chosen by Allah to guide humanity, though not necessarily with a new message.",
    "da'wah": "Da'wah refers to the act of inviting others to understand and follow Islam.",
    "qadr": "Qadr refers to divine destiny or predestination in Islam, the belief that Allah has ordained everything that happens.",
    "halaqah": "A Halaqah is a gathering or study circle where Muslims come together to learn about Islam, often focusing on the Quran or Hadith.",
    "kufr": "Kufr refers to disbelief or rejection of Allah and His message in Islam.",
    "hypocrisy": "Hypocrisy, or Nifaq in Islam, is a major sin where someone outwardly displays belief but inwardly disbelieves.",
    "iblis": "Iblis is the name of Satan in Islam, who refused to bow to Adam and was cast out of paradise.",
    "akhirah": "Akhirah refers to the afterlife in Islam, where souls will be judged and sent to either Jannah (paradise) or Jahannam (hell).",
    "jibril": "Jibril (Gabriel) is the angel who delivered Allah's revelations to the prophets, including the Quran to Prophet Muhammad (PBUH).",
    "malik": "Malik is the angel who guards the gates of Jahannam (hell) in Islamic belief.",
    "malaikah": "Malaikah refers to angels in Islam, who are created by Allah to carry out various duties in the universe.",
    "qira'at": "Qira'at refers to the different methods of reciting the Quran, all of which are authentic and approved.",
    "hajj": "Hajj is the annual pilgrimage to Mecca that all Muslims must perform at least once in their lifetime if they are able.",
    "eid al-adha": "Eid al-Adha is the festival of sacrifice, celebrated during the Hajj, commemorating Prophet Ibrahim's willingness to sacrifice his son for Allah.",
    "eid al-fitr": "Eid al-Fitr is the festival celebrated at the end of Ramadan, marking the conclusion of fasting.",
    "shaytan": "Shaytan is the term used for Satan in Islam, who seeks to lead humans astray from Allah's path.",
    "tasbih": "Tasbih refers to the act of glorifying Allah, often through the recitation of specific phrases like 'Subhanallah', 'Alhamdulillah', and 'Allahu Akbar'.",
    "sunna": "The Sunna refers to the practices and teachings of Prophet Muhammad (PBUH) that serve as a model for Muslims to follow.",
    "harut and marut": "Harut and Marut are two angels mentioned in the Quran who were sent to Babylon to test the people.",
    "laylat al-qadr": "Laylat al-Qadr, or the Night of Power, is the night when the first verses of the Quran were revealed to Prophet Muhammad (PBUH).",
    "badr": "The Battle of Badr was the first significant battle in Islamic history, where a small Muslim army defeated a larger Meccan force.",
    "uhud": "The Battle of Uhud was a significant battle in Islamic history, where the Muslims faced a setback against the Quraysh of Mecca.",
    "khandaq": "The Battle of Khandaq, also known as the Battle of the Trench, was a key defensive battle fought by the Muslims in Medina.",
    "dhul hijjah": "Dhul Hijjah is the 12th month of the Islamic calendar, during which the Hajj pilgrimage and Eid al-Adha take place.",
    "safa and marwah": "Safa and Marwah are two hills near the Kaaba in Mecca, and walking between them is part of the Hajj and Umrah rituals.",
    "zamzam": "Zamzam is the name of a sacred well in Mecca, believed to have been provided by Allah to Hagar and her son Ismail.",
    "ashura fasting": "Fasting on the day of Ashura is recommended in Islam, especially in commemoration of Prophet Musa's (Moses) victory over Pharaoh.",
    "rafidhah": "Rafidhah is a term historically used to describe Shia Muslims, but it has been a source of division between sects.",
    "muttaqin": "Muttaqin refers to those who have Taqwa (consciousness and fear of Allah) and strive to live righteously.",
    "muharram": "Muharram is the first month of the Islamic calendar and is considered one of the four sacred months in Islam.",
    "masjid al-aqsa": "Masjid al-Aqsa is the third holiest site in Islam, located in Jerusalem, where Prophet Muhammad (PBUH) ascended to the heavens during Al-Isra wal-Miraj.",
    "niyyah": "Niyyah refers to the intention in Islam, which is necessary before performing any act of worship.",
    "dawah": "Dawah is the duty of calling others to Islam, inviting them to understand the faith.",
    "muslim": "A Muslim is someone who submits to the will of Allah and follows the teachings of Islam.",
    "islam": "Islam is a monotheistic religion based on the teachings of the Quran and the life of Prophet Muhammad (PBUH).",
    "umrah ritual": "The rituals of Umrah include entering the state of Ihram, performing Tawaf around the Kaaba, and walking between Safa and Marwah.",
    "fasting": "Fasting, or Sawm, is one of the Five Pillars of Islam, and Muslims fast during the month of Ramadan from dawn until sunset.",
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
