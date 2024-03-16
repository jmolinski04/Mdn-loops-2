const admit = document.querySelector(".admit");
const refuse = document.querySelector(".refuse");
const checkBtn = document.querySelector(".check-btn");
const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

admit.textContent = "Admit: ";
refuse.textContent = "Refuse: ";

const checkGuestList = () => {
  people.forEach((person) => {
    if (person === "Phil" || person === "Lola") {
      refuse.textContent += `${person} `;
    } else {
      admit.textContent += `${person} `;
    }
  });
};

checkBtn.addEventListener("click", checkGuestList);
