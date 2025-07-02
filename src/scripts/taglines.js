const taglines = [
  "See the Emissions. Shape the Future",
  "Climate Truth in Every Ton",
  "Tracking Carbon, Empowering Change",
  "Know the Numbers. Fuel the Movement",
  "From Data to Decisions: Powering Climate Action in the Philippines",
  "Every Ton Counts. Every Voice Matters",
  "Carbon Data, Clearer Decisions",
  "Transparency in Emissions, Trust in Action",
  "Turning Climate Data Into Climate Action",
  "Your Window Into the Philippines' Carbon Footprint"
];

let current = 0;
const taglineElement = document.getElementById("tagline");

function rotateTagline() {
  taglineElement.classList.remove("fade-in");
  taglineElement.classList.add("fade-out");

  setTimeout(() => {
    current = (current + 1) % taglines.length;
    taglineElement.textContent = taglines[current];
    taglineElement.classList.remove("fade-out");
    taglineElement.classList.add("fade-in");
  }, 500);
}

setInterval(rotateTagline, 5000); // Change every 5 seconds
