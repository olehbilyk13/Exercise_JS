// Task 1
/*
let newWindow = window.open('', '_blank', 'width=300, height=300');

setTimeout(function() {
    newWindow.resizeTo(500, 500);
}, 2000);

setTimeout(function() {
    newWindow.moveTo(200, 200);
}, 4000);

setTimeout(function() {
    newWindow.close();
}, 6000);
*/

// Task 2
/*
let content = document.querySelector("#text");
let button = document.querySelector("#title");

button.addEventListener("click", function changeCSS() {
   content.style.color = "orange";
   content.style.fontSize = "20px";
   content.style.fontFamily = "Comic Sans MS";
});
*/

// Task 3

//let registerForm = document.querySelector("#registerForm");
/*
let button1 = document.getElementById("btn1");
let button2 = document.getElementById("btn2");
let button3 = document.getElementById("btn3");
let link1 = document.querySelector('a');

button1.addEventListener("click", function() {
    document.body.style.backgroundColor = 'blue';
});

button2.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
    document.body.style.backgroundColor = 'brown';
});
button3.addEventListener('mouseup', function() {
    document.body.style.backgroundColor = 'white';
});

link1.addEventListener('mouseover', function() {
     document.body.style.backgroundColor = 'yellow';
});
link1.addEventListener('mouseout', function() {
     document.body.style.backgroundColor = 'white';
});
*/

// Task 4
/*
let dropdown = document.querySelector("#dropdownlist");
let button = document.querySelector("#removed");
button.addEventListener("click", function(){
     const chosenItem=dropdown.selectedIndex;
     if (chosenItem !== -1) {
         dropdown.remove(chosenItem);
       }
 })
*/

// Task 5
/*
let button = document.querySelector('#title');
let message = document.querySelector('#text');

button.addEventListener("click", function(event){
    message.textContent="I was pressed!"
});
button.addEventListener("mouseover", function(event){
    message.textContent="Mouse on me!"
});
button.addEventListener("mouseout", function(event){
    message.textContent="Mouse is not on me!"
});
*/

// Task 6
/*
let setting = document.getElementById("hello");
window.addEventListener("resize", function(){
    setting.textContent = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
});
*/

// Task 7
/*
let citiesByCountry = {
    germany: ["Berlin", "Leipzig", "Munich", "Hamburg"],
    usa: ["New York", "Washington", "Boston", "Chicago"],
    ukraine: ["Lviv", "Kharkiv", "Donetsk", "Dnipro"]
};

let countryDropdown = document.getElementById('country');
let citiesDropdown = document.getElementById('cities');
let selectedInfo = document.getElementById('selectedInfo');

function getCities() {
    let selectedCountry = countryDropdown.value;
    citiesDropdown.innerHTML = '';

    if (selectedCountry in citiesByCountry) {
        citiesByCountry[selectedCountry].forEach(city => {
            let option = document.createElement('option');
            option.textContent = city;
            citiesDropdown.appendChild(option);
        });
    }

    const selectedCountryName = countryDropdown.options[countryDropdown.selectedIndex].text;
    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent = `Selected Country: ${selectedCountryName}, Selected City: ${selectedCity}`;
}

countryDropdown.addEventListener('change', getCities);

citiesDropdown.addEventListener('change', function() {
    const selectedCountryName = countryDropdown.options[countryDropdown.selectedIndex].text;
    const selectedCity = citiesDropdown.value;
    selectedInfo.textContent = `Selected Country: ${selectedCountryName}, Selected City: ${selectedCity}`;
});

getCities();
*/
