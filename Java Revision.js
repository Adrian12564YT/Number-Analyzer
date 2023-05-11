function Clicking()
{
    a = document.getElementById("log").value
    var Number;
    Number = parseInt(a)

    if (Number === 0) {
        console.log("This Number is 0");
        document.getElementById("Analyzer").innerHTML = "This Number is 0"
    }
    else if (Number < 0) {
        console.log("This Number is A Negative Number");
        document.getElementById("Analyzer").innerHTML = "This Number is Negative"
    }
    else if (Number > 0) {
        console.log("Number is A Positive Number");
        document.getElementById("Analyzer").innerHTML = "This Number is Positive"
    }
}