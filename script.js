var allQuestions = [];
allQuestions[0] = {
    question: "which one is the apple product?",
    choices: ["Yes", "No", "earpods","google"],
    correctAnswer: 2
};
allQuestions[1] = {
    question: "what is the colour os sky?",
    choices: ["blue", "Ghostbusters", "You","322"],
    correctAnswer: 1
};
allQuestions[2] = {
    question: "Who won Super Bowl 48 this year?",
    choices: ["Denver Broncos", "Seattle Seahawks", "Denver Broncos","hamburger"],
    correctAnswer: 0
};
allQuestions[3] = {
    question: "what is dual core processor mean?",
    choices: ["Denver Broncos", "tow processors", "Denver Broncos","hamburger"],
    correctAnswer: 1
};
allQuestions[4] = {
    question: "what is android?",
    choices: ["robot", "operating systems", "Denver Broncos","hamburger"],
    correctAnswer: 1
};
allQuestions[5] = {
    question: "'OS' computer abbreviation usually means ?",
    choices: ["Order of Significance", "Seattle Seahawks", "Open Software","Operating System"],
    correctAnswer: 3
};
allQuestions[6] = {
    question: "In which decade with the first transatlantic radio broadcast occur?",
    choices: ["Denver Broncos", "Seattle Seahawks", "Denver Broncos","hamburger"],
    correctAnswer: 0
};
allQuestions[7] = {
    question: "Who won Super Bowl 48 this year?",
    choices: ["1950", "1960", "1970","1900"],
    correctAnswer: 0
};
allQuestions[8] = {
    question: "The speed of your net access is defined in terms of...",
    choices: ["gb", "kbps", "tb","mbps"],
    correctAnswer: 1
};
allQuestions[9] = {
    question: "Experts say the healthiest way to view a computer monitor is by...",
    choices: ["Placing it 18 to 30 inches away from your eyes", "Viewing from a darkened room", "Adjusting the screen for maximum contrast","Using special glasses that filter out UV rays"],
    correctAnswer: 0
};
allQuestions[10] = {
    question: "Name the terminals of a BJT.",
    choices: ["Drain, Gate, Source", "Positive, Negative, Neutral", "Anode, Cathode, Triode","Emitter, Base, Collector"],
    correctAnswer: 3
};
allQuestions[11] = {
    question: "A dual-layer DVD is valued because it:",
    choices: ["Can hold more data", "Contains a backup of the data stored", "Uses a second layer to offer a speed increase","Creates alternative sound tracks"],
    correctAnswer: 0
};
allQuestions[12] = {
    question: "A JPG is...",
    choices: ["A Jumper Programmed Graphic", "A format for an image file", "A type of hard disk","A unit of measure for memory"],
    correctAnswer: 1
};
allQuestions[13] = {
    question: "Your computer has gradually slowed down. What's the most likely cause?",
    choices: ["Overheating", "Your processor chip is just getting old", "Adware/spyware is infecting your PC","You dropped a sandwich in your computer"],
    correctAnswer: 2
};
allQuestions[14] = {
    question: "In a Digital circuit, what is 1 'AND' 1?",
    choices: ["0", "1", "2","4"],
    correctAnswer: 1
};

document.getElementById("question").textContent = allQuestions[0].question;

document.getElementById("choice0").textContent = allQuestions[0].choices[0];

document.getElementById("choice1").textContent = allQuestions[0].choices[1];

document.getElementById("choice2").textContent = allQuestions[0].choices[2];

document.getElementById("choice3").textContent = allQuestions[0].choices[3];
var userScore = 0;

var questionNum = 0;

  $("#next").click(function() {
   
  if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
    userScore++;
  }
  
    if (questionNum == (allQuestions.length - 1)) {
    document.getElementsByTagName("form")[0].style.display = "none";
      
    document.getElementById("question").textContent ="Your score is " + userScore + " out of 15.";
    }
  
    questionNum++;
  
    document.getElementById("question").textContent = allQuestions[questionNum].question;

    document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

    document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

    document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];

    document.getElementById("choice3").textContent = allQuestions[questionNum].choices[3];
});