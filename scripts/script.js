// Form 
window.addEventListener("load", function() {
  document.getElementById('input-form').addEventListener("submit", function(e) {
    e.preventDefault(); // before the code

    // Get the required information
    var height = document.getElementById("heightOutput").value; // Height
    var weight = document.getElementById("weightOutput").value; // Weight
    var age = document.getElementById("ageOutput").value; // Age

    // Work through the form elements to define the selected gender and activity;
    var formElements = document.getElementById('input-form').elements;
    var selectedGender = formElements['gender'].value;
    var selectedActivity = formElements['activity'].value;

    // Calculate BMI and display
    var BMI = CalcBMI(height, weight);
    if ( BMI < 18.5 ) {
        document.getElementById("bmi-value").innerHTML = (BMI + " (Underweight)");
        document.getElementById("bmi-result-card").style.backgroundColor = "orange";
        document.getElementById("bmi-result-text").innerHTML = "Your weight is way too low. This is not good for your health. Contact your doctor to determine the possible cause."
    } else if ( BMI > 18.5 && BMI < 25 ) {
    document.getElementById("bmi-value").innerHTML = (BMI + " (Healthy)");
    document.getElementById("bmi-result-card").style.backgroundColor = "green";
    document.getElementById("bmi-result-text").innerHTML = "Your weight is healthy. Good! Continue to eat healthy and get enough exercise to keep it that way.\
    The BMI does not say everything about your health. Your waist circumference is also important for optimal advice."
    } else if ( BMI > 25 && BMI < 30 ) {
        document.getElementById("bmi-value").innerHTML = (BMI + " (Overweight)");
        document.getElementById("bmi-result-card").style.backgroundColor = "orange";
        document.getElementById("bmi-result-text").innerHTML = "Your weight is too high. We recommend that you have your blood pressure,\
         cholesterol and blood sugar measured by your doctor. This partly determines how important losing weight is for your health.\
         Based on this, your doctor will give advice or refer you for help."
    } else if ( BMI > 30 ) {
        document.getElementById("bmi-value").innerHTML = (BMI + " (Obese)");
        document.getElementById("bmi-result-card").style.backgroundColor = "red";
        document.getElementById("bmi-result-text").innerHTML = "Your weight is way too high. It is better for your health to lose weight.\
        We strongly recommend that you have your blood pressure, cholesterol and blood sugar measured by your doctor. This partly determines how important losing weight is for your health.\
        Based on this, the GP will refer you for help."

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


