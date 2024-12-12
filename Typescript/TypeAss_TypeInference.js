function sum(num1, num2, print, msg) {
    if (print) {
        console.log("Sum of", num1 + num2, msg);
    }
    return num1 + num2;
}
sum(5, 44, true, "total");
