// Task 1
function calculateCubeOrSquare() {
    const number = parseFloat(document.getElementById('numberInput').value);
    let result;

    if (number > 0) {
        result = Math.pow(number, 3); // Cube of the number
    } else {
        result = Math.pow(number, 2); // Square of the number
    }

    document.getElementById('result1').innerText = `Result: ${result}`;
}

// Task 2
function checkChairs() {
    const students = parseInt(document.getElementById('studentsInput').value);
    const chairs = parseInt(document.getElementById('chairsInput').value);
    let result;

    if (chairs >= students) {
        result = 'There are enough chairs';
    } else {
        result = 'Not enough chairs';
    }

    document.getElementById('result2').innerText = result;
}

// Task 3
function manipulateArray() {
    let users = ['John', 'Bob', 'Tom', 'Nick', 'Sam', 'Alex', 'Jack'];

    // Second last element
    const secondLast = users[users.length - 2];

    // Remove the first element
    users.shift();

    // Add a new element
    users.push('Landon');

    // Replace the fourth element
    users[3] = 'Den';

    // Remove the last element
    users.pop();

    const result = `
        Second last element: ${secondLast} <br>
        Array after changes: ${users.join(', ')}
    `;

    document.getElementById('result3').innerHTML = result;
}