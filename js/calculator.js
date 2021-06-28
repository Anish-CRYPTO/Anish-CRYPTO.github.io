function calc() {
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    var calculate;

    if (operator =="add") {
        calculate = a + b;
    } else if (op = "min") {
        calculate = a - b;
    } else if (op = "div") {
        calculate = a / b;
    } else if (op = "mul") {
        calculate = a * b;
    }

    function myFunction() {
        var x = document.getElementById("myBtn");
        x.calculate = true;}

    document.querySelector("#result").innerHTML = calculate;
}

