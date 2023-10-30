// JavaScript function to handle form submission
function userForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;

    // Construct the output message
    var outputMessage = "Full Name: " + firstName + " " + lastName + "<br>";
    outputMessage += "Email: " + email + "<br>";
    outputMessage += "Address: " + address + "<br>";
    outputMessage += "City: " + city + "<br>";
    outputMessage += "Province: " + province + "<br>";
    outputMessage += "Membership: " + membership;

    // Get the user info display container
    var userInfoDisplay = document.getElementById("userInfoDisplay");

    // Update the container with the user's information
    userInfoDisplay.innerHTML = outputMessage;
}

document.getElementById("main-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    userForm(); // Call the userForm function
});




document.getElementById("calculateButton").addEventListener("click", myExcelFuns);

var result = 0; // Declare a global variable to store the result

function myExcelFuns() {
    // Get the user input and remove extra spaces
    var numberStr = document.getElementById("numbers").value;
    numberStr = numberStr.trim();

    // Check if the input is empty
    if (numberStr === "") {
        alert("Please enter numbers separated by spaces.");
        return;
    }

    // Convert the trimmed string input into an array of numbers
    var numberArr = numberStr.split(" ");

    // Create a new array containing only valid numbers
    var finalNumericArray = [];

    for (var i = 0; i < numberArr.length; i++) {
        var num = parseFloat(numberArr[i]);

        if (!isNaN(num)) {
            finalNumericArray.push(num);
        }
    }

    // Check if there are valid numbers in the final array
    if (finalNumericArray.length === 0) {
        alert("Invalid input. Please enter valid numbers separated by spaces.");
        return;
    }

    // Get the selected Excel function
    var selectedFunction = document.querySelector('input[name="excelFunction"]:checked').value;

    // Use if-else blocks to perform the required calculations based on the selected function
    if (selectedFunction === "AutoSum") {
        // Calculate the total of all numbers
        result = finalNumericArray.reduce(function (acc, num) {
            return acc + num;
        }, 0);
    } else if (selectedFunction === "Average") {
        // Calculate the average of the numbers
        result = finalNumericArray.reduce(function (acc, num) {
            return acc + num;
        }, 0) / finalNumericArray.length;
    } else if (selectedFunction === "Max") {
        // Find the maximum number
        result = Math.max.apply(null, finalNumericArray);
    } else {
        // Find the minimum number
        result = Math.min.apply(null, finalNumericArray);
    }

    // Display the result
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Result: " + result;
}

// Toggle between dark and light themes
document.getElementById("darkThemeButton").addEventListener("click", function () {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
});

document.getElementById("lightThemeButton").addEventListener("click", function () {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
});

