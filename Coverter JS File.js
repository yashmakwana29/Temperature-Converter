function convert() {
    var value = parseFloat(document.getElementById('deg').value);
    console.log(value);

    var choice = document.getElementById('select-input').value;
    console.log(choice);

    var convert_choice = document.getElementById('selectConversionType').value;
    console.log(convert_choice);

    var result = document.getElementById('result'); // Assuming you have a div with id 'result' to display the output.

    if (choice === 'C') {
        if (convert_choice === 'F') {
            convertCelsiusToFahrenheit(value, result);
        } else if (convert_choice === 'K') {
            convertCelsiusToKelvin(value, result);
        } else if (convert_choice === 'C') {
            result.innerHTML = value+`&deg;C`;
        }
    }
    else if (choice === 'F') {
        if (convert_choice === 'C') {
            convertFahrenheitToCelsius(value, result);
        } else if (convert_choice === 'K') {
            convertFahrenheitToKelvin(value, result);
        } else if (convert_choice === 'F') {
            result.innerHTML = value+`&deg;F`;
        }
    }
    else if (choice === 'K') {
        if (convert_choice === 'C') {
            convertKelvinToCelsius(value, result);
        } else if (convert_choice === 'F') {
            convertKelvinToFahrenheit(value, result);
        } else if (convert_choice === 'K') {
            result.innerHTML = value+`&deg;K`;
        }
    }
    else {
        result.innerHTML = "Please select valid input units (C, F, or K).";
    }
}

function convertCelsiusToFahrenheit(celsius, resultElement) {
    let fahrenheit = ((celsius * 9 / 5) + 32).toFixed(2);
    resultElement.innerHTML = `${fahrenheit}&deg;F`;
}

function convertCelsiusToKelvin(celsius, resultElement) {
    let kelvin = (celsius + 273.15).toFixed(2);
    resultElement.innerHTML = `${kelvin}&deg;K`;
}

function convertFahrenheitToCelsius(fahrenheit, resultElement) {
    let celsius = ((fahrenheit - 32) * 5 / 9).toFixed(2);
    resultElement.innerHTML = `${celsius}&deg;C`;
}

function convertFahrenheitToKelvin(fahrenheit, resultElement) {
    let kelvin = ((fahrenheit - 32) * 5 / 9 + 273.15).toFixed(2);
    resultElement.innerHTML = `${kelvin}&deg;K`;
}

function convertKelvinToCelsius(kelvin, resultElement) {
    let celsius = (kelvin - 273.15).toFixed(2);
    resultElement.innerHTML = `${celsius}&deg;C`;
}

function convertKelvinToFahrenheit(kelvin, resultElement) {
    let fahrenheit = ((kelvin - 273.15) * 9 / 5 + 32).toFixed(2);
    resultElement.innerHTML = `${fahrenheit}&deg;F`;
}










// var Cel = document.getElementById('Degree_Celsius');
// var Fah = document.getElementById('Fahrenheit');

// Cel.addEventListener('input', function(){
//     console.log("Cel changed");
//     let C = this.value;      
//     let F = (C * 9/5) + 32;          //Celcius maathi Fahrenheit maa convert
//     if(!Number.isInteger(F)){
//         F = F.toFixed(2);
//     }
//     Fah.value=F;
// });

// Fah.addEventListener('input', function(){
//     console.log("Fah changed");
//     let F = this.value;
//     let C = (F - 32) * 5/9;          //Fahrenheit maathi Celcius maa convert
//     if(!Number.isInteger(C)){
//         C = C.toFixed(2);
//     }
//     Cel.value=C;
// });

//     let F = (C * 9/5) + 32;          //Celcius maathi Fahrenheit maa convert
//     let K = (C + 273.15);            //Celcius maathi Kelvin maa convert


//     let C = (F - 32) * 5/9;                    //Fahrenheit maathi Celcius maa convert
//     let K = (F − 32) × 5/9 + 273.15;          //Fahrenheit maathi Celcius maa convert

//     let C = (K − 273.15);                        //Kelvin maathi Celcius maa convert
//     let C = ((K − 273.15) × 9/5 + 32);          //Kelvin maathi Fahrenheit maa convert



// function convert() {
//     var value = document.getElementById('deg').value;
//     console.log(value);

//     var choice = document.getElementById('select-input').value;
//     console.log(choice);

//     var convert_choice = document.getElementById('selectConversionType').value;
//     console.log(convert_choice);

//     if ((choice === 'C' && convert_choice === 'F') || (choice === 'C' && convert_choice === 'K') || (choice === 'C' && convert_choice === 'C')) 
//     {
//         // Do something for Celsius to Fahrenheit, Celsius to Kelvin, and Celsius to Celsius conversions.
//         let F = (value * 9/5) + 32;          //Celcius maathi Fahrenheit maa convert
//         let K = (value + 273.15);            //Celcius maathi Kelvin maa convert
//         let C = (value*1);
//     } 
//     else if ((choice === 'F' && convert_choice === 'F') || (choice === 'F' && convert_choice === 'K') || (choice === 'F' && convert_choice === 'C')) 
//     {
//         // Do something for Fahrenheit to Fahrenheit, Fahrenheit to Kelvin, and Fahrenheit to Celsius conversions.
//         let C = (value - 32) * 5/9;                    //Fahrenheit maathi Celcius maa convert
//         let K = (value - 32) * 5/9 + 273.15;          //Fahrenheit maathi Celcius maa convert
//         let F = (value*1);
//     } 
//     else if ((choice === 'K' && convert_choice === 'F') || (choice === 'K' && convert_choice === 'K') || (choice === 'K' && convert_choice === 'C')) 
//     {
//         // Do something for Kelvin to Fahrenheit, Kelvin to Kelvin, and Kelvin to Celsius conversions.
//         let C = (value - 273.15);                        //Kelvin maathi Celcius maa convert
//         let F = ((value - 273.15) * 9/5 + 32);          //Kelvin maathi Fahrenheit maa convert
//         let K = (value*1);

//     } 
//     else 
//     {
//         document.write("Please Select Anyone");
//     }
// }


/*function convert() {
    var value = parseFloat(document.getElementById('deg').value);
    console.log(value);
    
    var choice = document.getElementById('select-input').value;
    console.log(choice);
    
    var convert_choice = document.getElementById('selectConversionType').value;
    console.log(convert_choice);

    var result = document.getElementById('result'); // Assuming you have a div with id 'result' to display the output.
     
   // result.innerHTML='hello';

    if ((choice === 'C' && convert_choice === 'F') || (choice === 'C' && convert_choice === 'K') || (choice === 'C' && convert_choice === 'C')) 
    {
        // Celsius to Fahrenheit, Kelvin, or Celsius conversion
        let F = (value * 9/5) + 32;          // Celsius to Fahrenheit
        let K = value + 273.15;             // Celsius to Kelvin
         
        // Display the results
        result.innerHTML = `Converted value: ${F} Fahrenheit or ${K} Kelvin or ${value} Celsius`;
    } 
    else if ((choice === 'F' && convert_choice === 'F') || (choice === 'F' && convert_choice === 'K') || (choice === 'F' && convert_choice === 'C')) 
    {
        // Fahrenheit to Fahrenheit, Kelvin, or Celsius conversion
        let C = (value - 32) * 5/9;          // Fahrenheit to Celsius
        let K = (value - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin

        // Display the results
        result.innerHTML = `Converted value: ${C} Celsius or ${K} Kelvin or ${value} Fahrenheit`;
    } 
    else if ((choice === 'K' && convert_choice === 'F') || (choice === 'K' && convert_choice === 'K') || (choice === 'K' && convert_choice === 'C')) 
    {
        // Kelvin to Fahrenheit, Kelvin, or Celsius conversion
        let C = value - 273.15;               // Kelvin to Celsius
        let F = (value - 273.15) * 9/5 + 32;  // Kelvin to Fahrenheit

        // Display the results
        result.innerHTML = `Converted value: ${C} Celsius or ${F} Fahrenheit or ${value} Kelvin`;
    } 
    else 
    {
        result.innerHTML = "Please Select Anyone";
    }
}*/






