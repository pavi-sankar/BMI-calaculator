
document.getElementById("frm").addEventListener("submit", function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
        
        const Meters = height / 100;
        const bmi = weight / (Meters * Meters);
        
        document.getElementById("index").textContent = "your BMI is : "+ bmi.toFixed(2);

        if(bmi < 18.5){
            document.getElementById("condition").textContent = "Underweight " ;
        }
        else if( bmi < 25){
            document.getElementById("condition").textContent = "Normal ";
        }
        else if( bmi < 30){
            document.getElementById("condition").textContent = "overweight ";
        }
        else{
            document.getElementById("condition").textContent = "Obese" ;
         }

    } else {
        document.getElementById("index").textContent = "Please enter valid weight and height.";
    }
});