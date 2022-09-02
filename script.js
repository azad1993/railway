var targetNum;

for (var i = 1; i < 41; i++) {
  var para = document.createElement("img");
  var nums = document.createElement("span");

  para.classList.add(`image-${i}`);
  nums.classList.add(`nums-${i}`);

  para.src = "./src/not_visit.png";
  para.style = "width: 50px; height:50px; border:none";
  nums.style.position = "absolute";
  nums.style.margin = "10px";
  nums.style.boxSizing = "content-box";

  var divi = document.createElement("span");

  nums.textContent = `${i}`;
  divi.appendChild(nums);
  divi.appendChild(para);

  document.getElementById("baby").appendChild(divi);

  para.addEventListener("click", (e) => {
    targetNum = e.target.className.match(/(\d+)/)[0];
    currentQuestion = availableQuestions[targetNum - 1];
    question.innerText = currentQuestion.question;
    qnumber.innerText = targetNum;
    choices.forEach((choice) => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
    iconNum = document.getElementsByClassName(`image-${targetNum}`);
    iconNum[0].src = "./src/unattempt.png";
  });
  
  nums.addEventListener("click", (e) => {
    targetNum = e.target.className.match(/(\d+)/)[0];
    currentQuestion = availableQuestions[targetNum - 1];
    question.innerText = currentQuestion.question;
    qnumber.innerText = targetNum;
    choices.forEach((choice) => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
    iconNum = document.getElementsByClassName(`image-${targetNum}`);
    iconNum[0].src = "./src/unattempt.png";
  });

  //para.innerHTML = '1'.toString()
  //const node = document.createTextNode("This is a paragraph.");

  //para.appendChild(node);
  //document.getElementById("baby").appendChild(nums);
  //document.getElementById("baby").appendChild(para);
}

//timer
const labelTimer = document.getElementById("min");
const containerApp = document.getElementById("saveSubmit");

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);

      containerApp.style.opacity = 1;
      containerApp.disabled = false;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 5400;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

startLogOutTimer();

const question = document.getElementById("quqest");
const qnumber = document.getElementById("qnum");
const saver = document.getElementById("saveMe");
const checkout = document.getElementById("checkOut");
let ele = document.getElementsByName("fav_language");
const markfor = document.getElementById("markfor");
const markedrev = document.getElementById("markedrev");
const markedAndAns = document.getElementById("markedAndAns");
const notVisit = document.getElementById("notVisit");
const answeredInfo = document.getElementById("answeredInfo");
const notAnswer = document.getElementById("notAnswer");
const choices = Array.from(document.getElementsByClassName("choice-text"));
let swicher = false;

let currentQuestion = {};
let acceptingAnswers = false;
let markforreview = 0;
let markforreviewAndCheck = 0;
let notAnswerCount = 0;
let answerCount = 0;
let notVisitCount = 40;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
var iconNum;
let questions = [
  {
    question:
      "Who is the Chief Election Commissioner of India as of November 2020?",
    choice1: "Sunil Arora",
    choice2: "Ashok Lavasa",
    choice3: "Ranjit Sinha",
    choice4: "Sushil Chandra",
  },
  {
    question: "Nipah is a:",
    choice1: "Computer program",
    choice2: "Virus",
    choice3: "Cyclone",
    choice4: "Fighter plane",
  },
  {
    question:
      "Who won the men's singles title of the French open 2020 tennis tournament?",
    choice1: "Dominic Thiem",
    choice2: "Rafael Nadal",
    choice3: "Roger Federer",
    choice4: "Pete Sampras",
  },
  {
    question: "EOS-01 is a:",
    choice1: "march for unity in India",
    choice2: "march for peace in Japan",
    choice3: "Satellite launched by India",
    choice4: "bullet train of France",
  },
  {
    question: "The dance form Kuchipudi originated in:",
    choice1: "Odisha",
    choice2: "Gujarat",
    choice3: "Andra Pradesh",
    choice4: "Maharashtra",
  },
  {
    question: "The new capital of Andra Pradesh is:",
    choice1: "Hyderabad",
    choice2: "Amaravati",
    choice3: "Machilipatnam",
    choice4: "Vizianagaram",
  },
  {
    question: "The Indian Statue of Unity is located near:",
    choice1: "Sardar Sarovar Dam",
    choice2: "Bhakra-Nangal Dam",
    choice3: "Hirakud Dam",
    choice4: "Tehri Dam",
  },
  {
    question: "The term pisciculture is related with:",
    choice1: "silk farming",
    choice2: "fish farming",
    choice3: "bee farming",
    choice4: "bird farming",
  },
  {
    question: "kilowatt hour (kW•h) is a unit of:",
    choice1: "power",
    choice2: "energy",
    choice3: "momentum",
    choice4: "force",
  },
  {
    question: "Lactic acid is mainly found in:",
    choice1: "Spinach",
    choice2: "Curd",
    choice3: "Vinegar",
    choice4: "Lemon",
  },
  {
    question: "Which vitamin helps the body absorb calcium?",
    choice1: "Vitamin A",
    choice2: "Vitamin B",
    choice3: "Vitamin C",
    choice4: "Vitamin D",
  },
  {
    question:
      "The audible frequency range of hearing for an average human beings is from about:",
    choice1: "0 Hz to 20 HZ",
    choice2: "20 Hz to 2000 HZ",
    choice3: "20 Hz to 20 KHzne",
    choice4: "0 Hz to 20 kHZ",
  },
  {
    question: "Which of the following is NOT a metal?",
    choice1: "Sodium",
    choice2: "Phosphorus",
    choice3: "Aluminium",
    choice4: "Mercury",
  },
  {
    question: "Who was the last Jain Tirthankara?",
    choice1: "Dharmanatha",
    choice2: "Sumatinatha",
    choice3: "Ajitanatha",
    choice4: "Mahavira",
  },
  {
    question: "Who was the first Governor General of Bengal ?",
    choice1: "William Bentinck",
    choice2: "Warren Hastings",
    choice3: "John Shore",
    choice4: "John Macpherson",
  },
  {
    question: "The battle of Plassey took place in:",
    choice1: "1726",
    choice2: "1750",
    choice3: "1757",
    choice4: "1796",
  },
  {
    question: "Who among the following was also known as the Frontier Gandhi?",
    choice1: "Subhash Chandra Bose",
    choice2: "Rabindranath Tagore",
    choice3: "Gopal Krishna Gokhale",
    choice4: "Khan Abdul Ghaffar Khan",
  },
  {
    question:
      "Who among the following was NOT a 'Navratna' of Mughal Emperor Akbar?",
    choice1: "Tansen",
    choice2: "Birbal",
    choice3: "Bairam Khan",
    choice4: "Abul Fazl",
  },
  {
    question:
      "Which of the following states does NOT share its border with Nepal?",
    choice1: "Uttar Pradesh",
    choice2: "Assam",
    choice3: "sikkim",
    choice4: "Uttarakhand",
  },
  {
    question:
      "With how many states of India does Jharkhand share its boundary?",
    choice1: "3",
    choice2: "4",
    choice3: "5",
    choice4: "6",
  },
  {
    question: "Which of the following dam is constructed on Krishna river?",
    choice1: "Sardar Sarovar",
    choice2: "Hirakud",
    choice3: "Nagarjuna Sagar",
    choice4: "Indira Sagar",
  },
  {
    question:
      "As per Census 2011, which state of India has the highest sex ratio?",
    choice1: "Tamil Nadu",
    choice2: "Manipur",
    choice3: "Kerala",
    choice4: "Chhattisgarh",
  },
  {
    question: "Tunisia is a country in:",
    choice1: "North America",
    choice2: "South America",
    choice3: "Africa",
    choice4: "Europe",
  },
  {
    question:
      "How many languages are included in the Eighth Schedule of the Constitution of India?",
    choice1: "22",
    choice2: "24",
    choice3: "28",
    choice4: "32",
  },
  {
    question:
      "How many members are nominated in the Rajya Sabha by the President of India?",
    choice1: "2",
    choice2: "4",
    choice3: "8",
    choice4: "12",
  },
  {
    question:
      "In the Constitution of India, Emergency provisions are given in Articles:",
    choice1: "324 to 329",
    choice2: "343 to 351",
    choice3: "352 to 360",
    choice4: "361 to 367",
  },
  {
    question: "PSLV is a:",
    choice1: "satellite of India",
    choice2: "satellite launch vehicle of India",
    choice3: "space mission of India",
    choice4: "satellite launch centre of India",
  },
  {
    question:
      "Which bombs were used by LAF during the air strikes in Balakot on 26th February 2019?",
    choice1: "Sudarshan laser-guided bombs",
    choice2: "Spice-2000 bombs",
    choice3: "Barrel bombs",
    choice4: "Cluster bombs",
  },
  {
    question:
      "NISAR satellite is designed to observe and take measurements of some of the Earth's most complex processes. It is a:",
    choice1: "project of ISRO alone",
    choice2: "project of NASA alone",
    choice3: "joint project between ISRO and NASA",
    choice4: "project of Canadian space agency",
  },
  {
    question:
      "What is the number of the Sustainable Development Goals (SDGs) set by UN 2030 Agenda for Sustainable Development?",
    choice1: "12",
    choice2: "15",
    choice3: "17",
    choice4: "19",
  },
  {
    question: "International Mother Earth Day is celebrated on:",
    choice1: "3rd March",
    choice2: "22nd April",
    choice3: "5th june",
    choice4: "23rd June",
  },
  {
    question:
      "As of October 2020, who among the following is an Indian member of the International Court of Justice?",
    choice1: "Nagendra Singh",
    choice2: "Dalveer Bhandari",
    choice3: "RS Pathak",
    choice4: "BN Rau",
  },
  {
    question: "In the domain of computers, CPU is the abbreviation of:",
    choice1: "Central Power Unit",
    choice2: "Central Processing Unit",
    choice3: "Computer Power Unit",
    choice4: "Core Processor Unit",
  },
  {
    question: "Which of the following is NOT a programming language?",
    choice1: "Python",
    choice2: "C#",
    choice3: "Java",
    choice4: "Linux",
  },
  {
    question: "One gigabyte (GB) is equal to(in binary):",
    choice1: "1000 kilobyte",
    choice2: "1024 kilobyte",
    choice3: "1,048,576 kilobyte",
    choice4: "1,073,741,824 kilobyte",
  },
  {
    question: "National Defence Academy is located at:",
    choice1: "Alipore (Kolkata)",
    choice2: "Wellington (Nilgiris)",
    choice3: "Khadakwasla (Pune)",
    choice4: "Ezhimala (Kannur)",
  },
  {
    question: "Head Office of erstwhile Allahabad Bank was located at:",
    choice1: "Prayagraj",
    choice2: "Kolkata",
    choice3: "Mumbai",
    choice4: "Vadodara",
  },
  {
    question: "Which of the following is India's longest railway tunnel?",
    choice1: "Sangaldan Railway Tunnel",
    choice2: "Pir Panjal Railway Tunnel",
    choice3: "Barcem Railway Tunnel",
    choice4: "Rapuru Railway Tunnel",
  },
  {
    question:
      "The aim of Swachh Bharat Mission (Gramin) was to achieve a clean and Open Defecation Free (ODF) India by:",
    choice1: "2nd October 2017",
    choice2: "2nd October 2018",
    choice3: "2nd October 2020",
    choice4: "2nd October 2019",
  },
  {
    question:
      "Government Of India, launched the HRIDAY scheme in 2015, with a focus on:",
    choice1: "cleanliness of river Ganga",
    choice2: "holistic development of heritage cities",
    choice3: "making National Highways railway crossing free",
    choice4: "making India heart disease free by 2030",
  },
];

//Constants
notVisit.innerText = notVisitCount;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (!targetNum) {
    var questionIndex = questionCounter;
  } else {
    var questionIndex = targetNum;
  }

  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  qnumber.innerText = Number(questionIndex) + 1;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  //right numbers

  iconNum = document.getElementsByClassName(`image-${Number(questionIndex) + 1}`);
  iconNum[0].src = "./src/unattempt.png";
  targetNum++;
  questionCounter++;
  //  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
  swicher = false;
};

saver.addEventListener("click", () => {
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked && answerCount < 40 && notVisitCount >= 1) {
      answerCount++;
      answeredInfo.innerText = answerCount;
      notVisitCount--;
      notVisit.innerText = notVisitCount;
      swicher = true;
      iconNum[0].src = "./src/attempt.png";
    }
  }
  if (!swicher && notAnswerCount < 40 && notVisitCount >= 1) {
    notAnswerCount++;
    notAnswer.innerText = notAnswerCount;
    notVisitCount--;
    notVisit.innerText = notVisitCount;
    swicher = true;
  }

  getNewQuestion();
});

checkout.addEventListener("click", () => {
  for (var i = 0; i < ele.length; i++) ele[i].checked = false;
  swicher = false;
});

markfor.addEventListener("click", () => {
  for (var i = 0; i < ele.length; i++) {
    if (ele[i].checked && markforreviewAndCheck < 40 && notVisitCount >= 1) {
      markforreviewAndCheck++;
      markedAndAns.innerText = markforreviewAndCheck;
      notVisitCount--;
      notVisit.innerText = notVisitCount;
      swicher = true;
      iconNum[0].src = "./src/ans_and_mark_for_review-removebg-preview.png";
    }
  }
  if (!swicher && markforreview < 40 && notVisitCount >= 1) {
    markforreview++;
    markedrev.innerText = markforreview;
    notVisitCount--;
    notVisit.innerText = notVisitCount;
    swicher = true;
    iconNum[0].src = "./src/mark_for_review.png";
  }

  getNewQuestion();
});

startGame();
