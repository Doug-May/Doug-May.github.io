//Define global variables
var count = document.getElementById("count");


//The function will check the text field every ------- ms and add to the counter

var timer = setInterval(counter, 100);

function counter() {

    var textAreaStr = document.getElementById("textfield").value;
    var totalChar = textAreaStr.length;

    //Delete spaces at beginning and end if any
    textAreaStr = textAreaStr.trim();

    //Delete double spaces
    textAreaStr = textAreaStr.replace(/ +(?= )/g,'');

    //remove line breaks and replace with space
    textAreaStr = textAreaStr.replace(/\n\s*\n/g, '\n');
    textAreaStr = textAreaStr.replace(/\n/g, " ");


    //count the words and display
    var number = textAreaStr.split(" ").length;
    if (textAreaStr === "") {
        count.innerHTML = "Word Count: 0";
    } else {
        count.innerHTML = "Word Count: " + number;
    }

}
