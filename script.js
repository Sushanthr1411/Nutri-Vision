function showBMI() {
    document.getElementById("bmi-section").style.display = "block";
    document.getElementById("food-section").style.display = "none";
    document.getElementById("food-search").value = ''; // Clear the search field when switching to BMI section
    document.getElementById("food-result").innerHTML = ''; // Clear previous food search results
}

function showFood() {
    document.getElementById("food-section").style.display = "block";
    document.getElementById("bmi-section").style.display = "none";
    document.getElementById("weight").value = ''; // Clear the BMI input fields when switching to food section
    document.getElementById("height").value = ''; // Clear the BMI input fields when switching to food section
    document.getElementById("bmi-result").innerHTML = ''; // Clear previous BMI result
    document.getElementById("health-tips").innerHTML = ''; // Clear previous health tips
}

function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100;

    if (isNaN(weight) || isNaN(height) || height === 0) {
        alert("Please enter valid values.");
        return;
    }

    var bmi = weight / (height * height);
    document.getElementById("bmi-result").innerHTML = `Your BMI: ${bmi.toFixed(2)}`;

    var tips = [];
    if (bmi < 18.5) {
        tips = [
            'You are underweight. Eat nutrient-dense foods like fruits, vegetables, and proteins.',
            'Focus on healthy fats and try to gain weight through muscle mass.',
            'Increase your calorie intake by consuming more frequent meals and snacks.',
            'Try weight training to build muscle mass and improve strength.',
            'Ensure that you’re eating a variety of foods to get all the essential nutrients.',
            'Drink whole milk, smoothies, or high-protein drinks for extra calories.',
            'Consult a dietitian for personalized meal plans and weight gain strategies.',
            'Stay hydrated, but avoid excessive amounts of coffee or tea that may suppress appetite.'
        ];
    } else if (bmi >= 18.5 && bmi < 24.9) {
        tips = [
            'Your BMI is in the healthy range. Keep up the good work!',
            'Maintain a balanced diet with plenty of fruits, vegetables, and proteins.',
            'Include whole grains, legumes, and lean meats in your meals.',
            'Exercise regularly for at least 30 minutes a day to maintain a healthy weight.',
            'Stay hydrated by drinking plenty of water throughout the day.',
            'Limit processed foods, sugary snacks, and drinks.',
            'Manage stress with meditation, yoga, or deep breathing exercises.',
            'Sleep for at least 7–8 hours each night to support your overall health.'
        ];
    } else {
        tips = [
            'You are overweight. Try to incorporate regular physical activity.',
            'Reduce the intake of processed foods and focus on a balanced diet.',
            'Avoid sugary drinks and snacks high in refined sugars.',
            'Increase your intake of fiber-rich foods like fruits, vegetables, and whole grains.',
            'Aim for at least 150 minutes of moderate-intensity exercise per week.',
            'Consult a doctor or nutritionist for personalized weight loss plans.',
            'Practice mindful eating to avoid overeating and emotional eating.',
            'Stay consistent with your diet and exercise routine for long-term results.',
            'Get enough sleep—aim for 7-8 hours each night to regulate hunger hormones.',
            'Monitor your weight regularly to track progress and stay motivated.'
        ];
    } 
       
    var tipsList = document.getElementById("tips-list");
    tips.forEach(function(tip) {
        var li = document.createElement("li");
        li.textContent = tip;
        tipsList.appendChild(li);
    });
}

function searchFood() {
    var searchTerm = document.getElementById("food-search").value.toLowerCase();
    var foodResult = document.getElementById("food-result");

    // Food data (for demonstration, you can replace with actual data)
    var foodData = {
        "apple": { name: "Apple", calories: 52, image: "https://via.placeholder.com/100" },
        "banana": { name: "Banana", calories: 96, image: "https://via.placeholder.com/100" },
        "chocolate": { name: "Chocolate", calories: 550, image: "https://via.placeholder.com/100" },
        "biscuits": { name: "Biscuits", calories: 500, image: "https://via.placeholder.com/100" },
    };

    foodResult.innerHTML = ''; // Clear previous results

    for (var food in foodData) {
        if (food.includes(searchTerm)) {
            var foodItem = foodData[food];
            var div = document.createElement("div");
            div.className = "food-item";
            div.innerHTML = `<img src="${foodItem.image}" alt="${foodItem.name}" /><p><strong>${foodItem.name}</strong><br>Calories: ${foodItem.calories} kcal</p>`;
            foodResult.appendChild(div);
        }
    }
}
