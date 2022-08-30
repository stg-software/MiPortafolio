//const URL = "./heroes.json";

// API Profetas https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json


const URL2 = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

mainContainer = document.getElementById("main-container");

fetch (URL2)
    .then (respuest  => respuest.json())
    .then (promesa => {
        console.log (promesa);
        promesa.prophets.forEach(element => {
            //crear elementos
            card = document.createElement("div");
            prophetName = document.createElement("h2");
            birthDate = document.createElement("p");
            birthPlace = document.createElement("p");
            divImg = document.createElement("div");
            prophetImg = document.createElement("img");
            
            //asignacion de datos a los elementos
            prophetName.textContent = element.name + ' ' + element.lastname;
            birthDate.textContent = "Birth date: " + element.birthdate;
            birthPlace.textContent = "Birth place: " + element.birthplace;
            prophetImg.src = element.imageurl;
            
            //agregar elementos
            card.appendChild(prophetName);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            divImg.appendChild(prophetImg);
            card.appendChild(divImg);   

            //agregar clases 
            card.classList.add("d-flex","flex-column","py-3","bg-secondary","bg-opacity-25","col-lg-3","col-md-4","col-sm-6","col-xs-12", "rounded-4", "align-items-center", "cardWidth");
            divImg.classList.add("w-75","m-auto");
            prophetImg.classList.add("w-100");


            //agragar card al mainContainer
            mainContainer.appendChild(card);
         });
     })




