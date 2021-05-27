// Create some vars
let slide = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slide.value; // Display the default slider value
// console.log(slide.value);

// Update the current slide value (each time you drag the slider handle)
slide.oninput = function() {
  output.innerHTML = this.value;
}