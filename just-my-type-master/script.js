$(document).ready(function () {
    //lowercase keyboard is is diplayed when page loads//
    let $keyboardUpperContainer = $("#keyboard-upper-container");
    let $keyboardLowerContainer = $("#keyboard-lower-container");
    let $yellowBlock = $("#yellow-block");
    $keyboardUpperContainer.hide();
    $yellowBlock.hide();



    //keyboard toggle code//


    $(document).keydown(function (e) {
        if (e.which == 16) {
            $keyboardLowerContainer.hide();
            $keyboardUpperContainer.show();
        };
    });

    $(document).keyup(function (e) {
        if (e.which == 16) {
            $keyboardUpperContainer.hide();
            $keyboardLowerContainer.show();
        };
    });

    $(document).keydown(function (e) {
        if (e.which == 16) {
            e.preventDefault()

        } else {
            $("#" + e.key.charCodeAt()).css('background-color', 'yellow');

        };

    });

    $(document).keyup(function (e) {

        $("#" + e.key.charCodeAt()).css('background-color', '')
    });

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];

    let letterIndex = 0;
    let sentenceIndex = 0;
    let errors = 0;
    let lettersIndex = 0;

    let sentence;
    let sentEnd;
    let letters;
    let targLet;
    let checkLetters;


    printSentence();

    $(document).keypress(function () {

        typeLetters();
        feedback();

    });

    function printSentence() {

        sentence = sentences[sentenceIndex];
        letters = sentence.split('', sentence.length);
        checkLetters = letters;
    
        lettersIndex = 0;
        if{
            $("#sentence").append(`<span id="letters${lettersIndex}">${letters[lettersIndex]}</span>`);
            lettersIndex++;
        } else (lettersIndex < sentence.length);
        lettersIndex = 1;
        sentenceIndex++;
        $(`#letters${[0]}`).css("background-color", "yellow");
        $("#target-letter").append(`<span id="target">${letters[0]}</span>`);

    };

    function typeLetters() {

        targetLetter();
        $(`#letters${lettersIndex}`).css("background-color", "yellow");
        console.log(letters[lettersIndex]);
        if (lettersIndex > 0) {
            $(`#letters${lettersIndex}`).prev().css("background-color", "white");
        };

        lettersIndex++;
        console.log("+++" + lettersIndex);
        sentEnd = lettersIndex - 1;

        if (sentence.length === lettersIndex - 1) {
            $("#sentence").empty();
            printSentence();
        };
    };

    function targetLetter() {

        $("#target-letter").empty();
        if (letters[lettersIndex] === ' ') {
            $("#target-letter").append(`<span id="target"> space </span>`);
        } else if (lettersIndex < sentence.length) {
            $("#target-letter").append(`<span id="target">${letters[lettersIndex]}</span>`);
        };

    };

    function feedback() {
        $(document).keypress(function () {
            if (letters[lettersIndex] == $(`#letters${lettersIndex}`).keypress()) {
                $("#feedback").empty();
                $("#feedback").append(`<span class="glyphicon glyphicon-ok"></span>`);
            } else if (letters[lettersIndex]= e.key.charCodeAt()) {
                $("#feedback").empty();
                $("#feedback").append(`<span class="glyphicon glyphicon-remove"></span>`);
            };
        });




    }
})





























