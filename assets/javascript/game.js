var counter = setInterval(countDown, 1000) // setting setInterval and is calling the countDown function 
var count = 30;
var gameOver = false;
var answerOne;
var answerTwo;
var answerThree;
var answerFour;
var correctAnswer = 0;
var correctAnswerCounter = 0;
var incorrectAnswerCounter = 0;


//variable objects




var answer = {
    answerOne: "Boston Celtics",
    answerTwo: "Kobe Bryant",
    answerThree: "16",
    answerFour: "Minneapolis"
}


$("#boston").on("click", function () {
    answerOne = $(this).attr("value")
    if (answerOne === answer.answerOne) {
        correctAnswerCounter++;
        console.log(correctAnswerCounter)
    }
});


$("#kobe").on("click", function () {
    answerTwo = $(this).attr("value")
    if (answerTwo === answer.answerTwo) {
        correctAnswerCounter++;
        console.log(correctAnswerCounter)
    }
});

$("#16").on("click", function () {
    answerThree = $(this).attr("value")
    if (answerThree === answer.answerThree) {
        correctAnswerCounter++;
        console.log(correctAnswerCounter)
    }
});

$("#minny").on("click", function () {
    answerFour = $(this).attr("value")
    if (answerFour === answer.answerFour) {
        correctAnswerCounter++;
        console.log(correctAnswerCounter)
    }
});





//FINISH BUTTON: $("finish").click()





function countDown() {
    count--;
    $("#stopwatch").text(count);
    if (count === 0) {
        gameOver = true;
        endGame();
    }
};





function startGame() {
    $(".container, p, img, #last, #quiz, #finish,#reset-button").hide();
    $(document).ready(function () {
        $("#start").on('click', function () {
            $(".container, p, img, #quiz, #finish").show();
            $("#start, #laker-gif").hide();

        })
    })
}

function endGame() {
    $(document).ready(function () {
        $("#finish").on('click', function () {
            $(".container, p, img, #quiz, #finish, #laker-gif").hide();
            $("#last, #laker-gif,#reset-button").show();   
            $("#last").text("You got " + correctAnswerCounter + " correct!");
        })
    })
}

$("#reset-button").on('click',function(){
    $("#laker-gif,#last,#reset-button").hide();
    $("#start").show()
}) 

function reset() {
    counter = 30;
    $(document).ready(function () {
        $("#finish").on('click', function () {
            $(".container, p, img, #quiz, #finish, #laker-gif").hide();
            $("#last, #laker-gif").show();
        })
    })
    $(document).ready(function () {
        $("#start").on('click', function () {
            $(".container, p, img, #quiz, #finish").show();
            $("#start, #laker-gif,#reset-button").hide();

        })
    })
}



reset();
startGame();
endGame();