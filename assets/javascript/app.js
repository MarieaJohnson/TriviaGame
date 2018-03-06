// Trivia Game
$(document).ready(function () {
  console.log("ready!");

  var interval;
  var timeLeft = 15;
  var correct = 0;
  var incorrect = 0;

  $("#start").on("click", function () {
    $("#start").hide();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append("<h2>" + questions[i].question + "</h2>")
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#subwrapper").append("<input type = 'radio' name='question-" + i + " ' value=' " + questions[i].answers[j] + " '> " + questions[i].answers[j])
      }
    }
    interval = setInterval(timer, 1000);
  })

  // Start Countdown Timer
  function timer() {
    timeLeft--;

    $("#timer").html(timeLeft);
    if (timeLeft === 0) {
      clearInterval(interval)
      $("#subwrapper").prepend('<h1>"Time is up!"</h1>')
    }
  }

  // Display trivia question
  // Be sure only one answer can be submitted
  var questions = [
    {
      question: "Who was the legendary Benedictine monk who invented champagne?",
      answers: ["Charles Krug", "Dom Perignon", "Moët & Chandon", "Veuve Clicquot"],
      correctAnswer: "Dom Perignon"
    },

    {
      question: "Name the largest freshwater lake in the world?",
      answers: ["Flathead Lake", "Lake Superior", "Lake George", "Black Lake"],
      correctAnswer: "Lake Superior"
    },

    {
      question: "Where would you find the Sea of Tranquility?",
      answers: ["Egypt", "Africa", "The Moon", "Australia"],
      correctAnswer: "The Moon"
    },

    {
      question: "What is someone who shoes horses called?",
      answers: ["Cobbler", "Hoovesman", "Shoemaker", "Farrier"],
      correctAnswer: "Farrier"
    },

    {
      question: "What item of clothing was named after its Scottish inventor?",
      answers: ["A Macintosh", "The Kilt", "The Tartan", "The Shawl"],
      correctAnswer: "A Macintosh"
    }
  ]

  // Check for right/wrong/incomplete answers
  done.function(); {
    $.each($("input[name = 'question-0']:checked"), function () {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-1']:checked"), function () {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-2']:checked"), function () {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-3']:checked"), function () {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-4']:checked"), function () {
      if ($().val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name = 'question-5']:checked"), function () {
      if ($().val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    result();
  }

  // Display how many questions were right
  // Display how many questions were wrong

  function result() {
    clearInterval(interval);
    $("#subwrapper h2").remove();

    $('#subwrapper').append("<h3>Correct Answers: " + correct + " </h3>");

    $('#subwrapper').append("<h3>Incorrect Answers: " + incorrect + " </h3>");

    $('#subwrapper').append("<h3>Unanswered Questions: " + (questions.length - (incorrect + correct)) + "</h3>");
  }

  $('#subwrapper').append('<button id="end">DONE</button>');

});