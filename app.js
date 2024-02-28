var result = document.getElementById('result');

function insert(num) {
    result.innerHTML += num;
}

function clean() {
    result.innerHTML = "";
}

function back() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}

function calculate() {
    var expression = result.innerHTML;

    if (expression) {
        try {
            result.innerHTML = eval(expression);
        } catch (error) {
            result.innerHTML = 'Error';
        }
    }
}

// Add event listeners to the document to capture keyboard input
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is a number, operator, or special key
    var keyPressed = event.key;
    if(/[0-9\/\*\-\+=\.\r\n]/.test(keyPressed)) {
        // If it's a valid key, insert it into the calculator
        insert(keyPressed);
    } else if (event.key === 'Escape') {
        // If 'Escape' key is pressed, clear the calculator
        clean();
    } else if (event.key === 'Backspace') {
        // If 'Backspace' key is pressed, remove the last character
        back();
    }
});

function toggleTheme() {
    var body = document.body;
    body.classList.toggle('dark-theme');
}
