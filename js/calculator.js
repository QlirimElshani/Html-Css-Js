function calculate(event) {
    let firstInp = Number(document.getElementById("firstInp").value);
    let lastInp = Number(document.getElementById("lastInp").value);
    let result;

    if(event.value === "+") {
        result = firstInp + lastInp;
    } else if(event.value === "-") {
        result = firstInp - lastInp;
    } else if(event.value === "*") {
        result = firstInp * lastInp;
    } else if(event.value === "/") {
        result = firstInp / lastInp;
    }
    document.getElementById("result").innerHTML = result;
}
