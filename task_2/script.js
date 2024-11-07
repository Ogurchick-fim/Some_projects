document.getElementById("calculateBtn").addEventListener("click", function(event) {
    event.preventDefault();

    const number1 = document.getElementById("number1").value.trim();
    const number2 = document.getElementById("number2").value.trim();
    const operation = document.getElementById("operation").value;

    const resultElement = document.getElementById("result");
    const errorElement = document.getElementById("error");

    resultElement.textContent = "";
    errorElement.textContent = "";

    if (number1 === "" || number2 === "") {
        errorElement.textContent = "Please enter both numbers.";
        errorElement.style.display = "block";
        return;
    } else {
        errorElement.style.display = "none";
    }

    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                errorElement.textContent = "Cannot divide by zero.";
                errorElement.style.display = "block";
                return;
            }
            result = num1 / num2;
            break;
        default:
            errorElement.textContent = "Invalid operation.";
            errorElement.style.display = "block";
            return;
    }

    resultElement.textContent = `Result: ${result}`;
    errorElement.style.display = "none";
});
