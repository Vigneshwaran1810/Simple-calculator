const display = document.getElementById("display")

function appendNumber(number) {
    display.value += number
}

function appendOperation(operator) {
    const lastChar = display.value.slice(-1)
    if (["+", "-", "*", "/"].includes(lastChar)) {
        display.value = display.value.slice(0, -1)
    }
    display.value += operator
}

function calculate() {
    const result = math.evaluate(display.value)
    display.value = result
}

function clearDisplay() {
    display.value = ""
}
