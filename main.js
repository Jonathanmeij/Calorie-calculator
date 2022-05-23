// For women, BMR = 655.1 + (9.563 x weight in kg) + (1.850 x height in cm) - (4.676 x age in years)
// For men, BMR = 66.47 + (13.75 x weight in kg) + (5.003 x height in cm) - (6.755 x age in years)

// Sedentary (little or no exercise): AMR = BMR x 1.2
// Lightly active (exercise 1–3 days/week): AMR = BMR x 1.375
// Moderately active (exercise 3–5 days/week): AMR = BMR x 1.55
// Active (exercise 6–7 days/week): AMR = BMR x 1.725
// Very active (hard exercise 6–7 days/week): AMR = BMR x 1.9

const button = document.getElementById("btn");
const h = document.getElementById("calories");

button.onclick = () => {
  const isMale =
    document.querySelector('input[name="gender"]:checked').id == "male";

  const age = document.getElementById("age").value;
  const length = document.getElementById("length").value;
  const weight = document.getElementById("weight").value;
  const activity = document.getElementById("activity").value;

  let calories;

  if (isMale) {
    calories = 66.47 + 13.75 * weight + 5.003 * length - 6.755 * age;
  } else {
    calories = 655.1 + 9.563 * weight + 1.85 * length - 4.676 * age;
  }

  calories *= activity;
  h.innerHTML = Math.round(calories);
};
ad;
