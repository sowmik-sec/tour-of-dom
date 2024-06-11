const sections = document.querySelectorAll("section");
// console.log(sections);
for (const section of sections) {
  //   console.log(section);
  section.style.border = "1px solid grey";
  section.style.padding = "10px";
  section.style.marginBottom = "10px";
  section.style.borderRadius = "10px";
}

const placesContainer = document.getElementById("places");
console.log(placesContainer);
placesContainer.classList.add("yellow-bg");

// const placess = document.getElementsByClassName("place");
// for (const place of placess) {
//   place.classList.remove("place");
// }
