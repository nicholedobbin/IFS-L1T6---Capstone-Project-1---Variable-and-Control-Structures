// In this program, the user inputs a metric and temperature they want converted, and the metric they want to convert to.
/* The program then converts the inputted metric and temperature to the selected metric's temperature, using
an 'if...else' statement.*/
//The program outputs a string stating both the inputted temperature and converted temerature, e.g. 0°C is 32°F.

let metricInput = String(prompt(`In which metric is the temperature you are converting?
C - Celsius
F - Fahrenheit
K - Kelvin`)).toUpperCase();  // '.toUpperCase' ensures user input is read as uppercase by the program.  
let tempInput = Number(prompt("Enter the number you want to convert: "));
let convertTo = String(prompt(`To which metric would you like to convert the temperature?
C - Celsius
F - Fahrenheit
K - Kelvin`)).toUpperCase(); 

if (metricInput === "C" && convertTo === "K") {
    kelvin = (tempInput + 273.15); 
    console.log(`${tempInput}°C is ${Math.round(kelvin)}°K.`); // 'Math.round()' rounds to a whole number for output.
}
else if (metricInput === "C" && convertTo === "F") {
    fahrenheit = (tempInput * (9/5) + 32);
    console.log(`${tempInput}°C is ${Math.round(fahrenheit)}°F.`);
}
else if (metricInput === "F" && convertTo === "K") {
    fahrenheit = ((tempInput + 459.67) * (5/9));
    console.log(`${tempInput}°F is ${Math.round(fahrenheit)}°K.`);
}
else if (metricInput === "F" && convertTo === "C") {
    celcius = ((tempInput - 32) * (5/9));
    console.log(`${tempInput}°F is ${Math.round(celcius)}°C.`);
}
else if (metricInput === "K" && convertTo === "F") {
    fahrenheit = (tempInput * (9/5) - 459.67);
    console.log(`${tempInput}°K is ${Math.round(fahrenheit)}°F.`);
}
else if (metricInput === "K" && convertTo === "C") {
    celcius = (tempInput - 273.15);
    console.log(`${tempInput} °K is ${Math.round(celcius)} °C.`);
}
else if (metricInput === "C" && convertTo === "C") {  // Final three 'else..if's respond to a conversion request for the same metric.
    celcius = (tempInput);
    console.log(`${tempInput}°C is ${tempInput}°C.`); // Without rounding, to ensure output equals user input.
}
else if (metricInput === "F" && convertTo === "F") {
    fahrenheit = (tempInput);
    console.log(`${tempInput}°F is ${tempInput}°F.`);
}
else if (metricInput === "K" && convertTo === "K") {
    kelvin = (tempInput);
    console.log(`${tempInput}°K is ${tempInput}°K.`);
}
else {
    console.log("Please try again."); // Defaults to 'try again' if the user enters any other key combination.
}


/* ======================== REFERENCES ======================================

How to convert userinput to uppercase with .toUpperCase():
    https://www.codecademy.com/forum_questions/5475a55f8c1ccc0f9d002649

How to stop the character Â° from printing to Chrome console, and retain only the degree symbol (°): 
    My HTML boilerplate code needed a declared encoding reference (<meta charset="UTF-8">).
    I added the reference to my HTML file (temperature.html, line 5) and resolved the issue.
    https://stackoverflow.com/questions/37847771/why-am-i-printing-%C3%82-instead-of

How to round user input and/or converted data to a whole number for temperature output:
    On MDN Web Docs, I found the .toFixed() method and the Math.round() method. 
    Both options work, but I went with Math.round for better code readability. 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round */
