//let cont=0;

let selMenu = document.getElementById("menu");
let text = document.getElementById("pelicula");
let pelis = document.getElementById("pelis");
let lista = [];

selMenu.addEventListener("change", () => {
    addToList (parseInt(selMenu.value), text.value);
    crearElemto();
    selMenu.value=0;
});

function addToList (op,nombre){
    switch (op){
        case 1:
            lista.unshift(nombre);
        break;
        case 2:
            lista.push(nombre);
        break;
        case 3:
            lista.shift();
        break;
        case 4:
            lista.pop();
        break;
    }
    text.value="";
    text.focus();
};

function crearElemto (){
    pelis.innerHTML="";
    lista.map(element => {
        // crear Li
        let newLi = document.createElement("li");
        let newSpan = document.createElement("span");
        let newBtn = document.createElement("button");
        
        newSpan.textContent=element;
        newBtn.textContent="X";

        newBtn.classList.add("btn", "btn-primary", "px-4", "mx-2");

        newLi.appendChild(newSpan);
        newLi.appendChild(newBtn);
        pelis.appendChild(newLi)

        newBtn.addEventListener("click", () => {
            newLi.remove();
            ind = lista.indexOf(element);
            console.log (ind);
            console.log (lista[ind]);
            lista.splice(ind,1);
            console.log (lista);
        });
    });    
    

    console.log(lista);
}
