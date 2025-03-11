const now = new Date();
const hour = now.getHours();
let greeting;

if (hour < 12) {
greeting = "Good Morning!";
} else if (hour < 18) {
     greeting = "Good Afternoon!";
} else {
     greeting = "Good Evening!";
}

alert(greeting);

 function calculateSum() {

 const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);

const sum = num1 + num2;

 document.getElementById('result').textContent = sum;
}