 function compute()
{
    let userChoice;
            let number, converter;


            userChoice = document.getElementById("choice").value * 1;
            number = document.getElementById("num").value * 1;


            console.log(userChoice);
            console.log(number);


            if (userChoice == 1)
            {
                converter = (number - 32) * (5 / 9); // Fahrenheit to Celsius
            }
            else if (userChoice == 2)
            {
                converter = (number * 9 / 5) + 32; // Celsius to Fahrenheit
            }
            else if (userChoice == 3)
            {
                converter = number * 3.281; // Meter to Feet
            }
            else
            {
                converter = number * 0.3048; // Feet to Meters
            }


            document.getElementById("convertLabel").innerHTML = 'The converted value of ' + number + ' is:';
            document.getElementById("convertedVal").value = converter.toFixed(3);  
}


function convert() 
    {

        //on key up
        document.getElementById("num").addEventListener("keyup",()=>{

            compute();

        });

        //button click
        document.getElementById("converbtn").addEventListener("click",()=>{

            compute();
            
            });
    }

        //Main

        (() => {
            convert();
        })();

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // Toggle the active class on the menu
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
