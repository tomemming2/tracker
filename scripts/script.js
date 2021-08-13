
// Form 
window.addEventListener("load", function() {
  document.getElementById('input-form').addEventListener("submit", function(e) {
    e.preventDefault(); // before the code

    // Get the required information
    var height = document.getElementById("height").value; // Height
    var weight = document.getElementById("weight").value; // Weight
    var age = document.getElementById("age").value; // Age

    // Work through the form elements to define the selected gender and activity;
    var formElements = document.getElementById('input-form').elements;
    var selectedGender = formElements['gender'].value;
    var selectedActivity = formElements['activity'].value;

    // Calculate BMI and display
    var BMI = CalcBMI(height, weight);
    if ( BMI < 18.5 ) {
        document.getElementById("bmi-value").innerHTML = (BMI + " (Underweight)");
        document.getElementById("bmi-value").style.color = "orange";
    } else if ( BMI > 18.5 && BMI < 25 ) {
    document.getElementById("bmi-value").innerHTML = (BMI + " (Healthy)");
    document.getElementById("bmi-value").style.color = "green";
    } else if ( BMI > 25 && BMI < 30 ) {
        document.getElementById("bmi-value").innerHTML = (BMI + " (Overweight)");
        document.getElementById("bmi-value").style.color = "orange";
    } else if ( BMI > 30 ) {
        document.getElementById("bmi-value").innerHTML = (BMI + " (Obese)");
        document.getElementById("bmi-value").style.color = "red";
    }

    // Calculate BMR and display
    var BMR = CalcBMR(height, weight, age, selectedGender);
    document.getElementById("bmr-value").innerHTML = BMR;

    // Calculate TDEE and display
    var TDEE = CalcTDEE(BMR, selectedActivity)
    document.getElementById("tdee-value").innerHTML = TDEE;

    document.getElementById("result").style.display = 'flex';

  })
});

function CalcBMI(height, weight) {
    return Math.round((100 * 100 * weight) / (height * height) * 10) / 10;
}

function CalcBMR(height, weight, age, gender) {
    if (gender == "male") {
        return Math.round(66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
    } else {
        return Math.round(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
    }
}

function CalcTDEE(bmr, activity) {
    return Math.round(bmr * activity);
}


