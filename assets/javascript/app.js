        var triviaqs = [{
                question: "What is the former name of Ho Chi Minh City, Vientam?",
                options: ["Hanoi", "Saigon", "Dalat"],
                correct: "Saigon"
            },
            {
                question: "In which city the Leanning Tower is located ?",
                options: ["Florence", "Rome", "Pisa"],
                correct: "Pisa"
            },
            {
                question: "What city is the capital of Australia?",
                options: ["Sydney", "Canberra", "Melbourne"],
                correct: "Canberra"
            },
            {
                question: "Which world capital is closest to the North Pole?",
                options: ["Reykjavík, Iceland", "Oslo, Norway", "Helsinki, Finland"],
                correct: "Reykjavík, Iceland"
            },
            {
                question: "On which continent Victoria Falls are located?",
                options: ["South America", "North America", "Africa"],
                correct: "Africa"
            },
            {
                question: " Which city is present in Asia and Europe? ",
                options: ["Istambul, Turkey", "Bucharest, Romania", "Jerusalem, Israel"],
                correct: "Istambul, Turkey"
            }
        ];


        var questionCounter = 0;
        var correctCounter = 0;
        var inCorrectCounter = 0;

        var time = 60;
        var intervalId;

        //  When the start button gets clicked, execute the run function.
        $("#start").on("click", run);
        $("#display").text("Time: 60 sec ");

        //  When the stop button gets clicked, run the stop function.
        $("#done").on("click", stop);


        //  The run function sets an interval
        //  that runs the decrement function once a second.
        //  *****BUG FIX******** 
        //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        //  The decrement function.
        function decrement() {
            time--;

            //  Show the number in the #show-number tag.
            $("#display").html("<h2> Time left: " + time + " sec </h2>");

            //  Once number hits zero...
            if (time === 0) {
                stop();
                alert("Time Up!");
            }
        }

        //  The stop function
        function stop() {
            clearInterval(intervalId);
        }

        //  Execute the run function.
        // run();

        $("#start").on("click", function () {
            $(this).hide();
            $("#rules").hide();

        });


        //===============================

        // window.onload = function () {
        //     $("#start").on("click", start);
        //     $("#done").on("click", stop);
        // };

        //============    game  ===========


        // function newGame() {
        //     $("#finalMessage").empty();
        //     $("#correct").empty();
        //     $("#incorrect").empty();
        //     $('#unanswered').empty();

        //     correct = 0;
        //     incorrect = 0;
        //     unanswered = 0;
        //     createtriviaqs();
        // }

        function createtriviaqs() {
            // answered = true;

            // $(".question").html("<h2>");
            for (var i = 0; i < triviaqs.length; i++) {
                var question = $("<div>");
                question.text(triviaqs[i].question);
                $(".question").append(question);

                for (var j = 0; j < triviaqs[i].options.length; j++) {
                    // var options = $("<input type = 'radio' name = 'option' value = 'a' >" + "a");
                    // options.text(triviaqs[i].options[j]);
                    // options.addClass("options");
                    $(".question").append("<input type = 'radio' name = 'option' value = '" + triviaqs[i].options[j] + "' >" + triviaqs[i].options[j]);

                    // <input type="radio"></input>
                    // <input type="radio" name="gender" value="male"> Male<br>
                    // </br>
                }
                //       =================
                //    if target radio value  triviaqs[i].correct 
            };
        };
        createtriviaqs();