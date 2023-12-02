// Function to get a random term
function getRandomTerm() {
    var termsArray = [
        'termsExperiment.html',
        'termsControl.html'
    ];
    return termsArray[Math.floor(Math.random() * termsArray.length)];
}

// Function to navigate to the terms page
function navigateToTerms() {
    // Get a random term
    var termsSelection = getRandomTerm();

    // Redirect based on the selected term
    if (termsSelection === 'termsExperiment.html') {
        window.location = 'termsExperiment.html';
    } else {
        window.location = 'termsControl.html';
    }
}

// Function to navigate to the forms page
function navigateToForms() {
    // Get the radio buttons
    var radioButton = document.getElementsByName('radioGroup');

    // Check which radio button is selected
    for (var i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            // Redirect based on the selected value
            if (radioButton[i].value === "Agree") {
                window.location = 'forms.html';
            } else {
                window.location = 'index.html';
            }
            return; // Exit the loop after redirecting
        }
    }

    // Handle the case when no radio button is checked (add your logic here)
    alert("Please select an option");
    // Alternatively, redirect to a default page
    // window.location = 'default.html';
}
