const placeList = document.getElementById("places-list");

const li = document.createElement("li");
li.innerText = "Paglarhut bazar";
// add the child
placeList.appendChild(li);

// where to add
const mainContainer = document.getElementById("main-container");
console.log(mainContainer);

const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Apple Juice";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Fruit Juice";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Mango Juice";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
    <h1>My Dress section</h1>
    <ul>
        <li>Lungi</li>
        <li>T-Shirt</li>
        <li>Pant</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);
