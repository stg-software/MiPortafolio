input=document.getElementById("input");
res=document.getElementById("res");
btn = document.getElementById("btn");

function contarPuntos (word){
    var suma=0;
    wordAr = word.split("");
    wordAr.map(char => {
        switch (char.toUpperCase()){
            case 'A': case 'E': case'I': case'O': case'U': case'L': case'N': case'R': case'S': case'T': 
                suma++;
            break;
            case 'D': case 'G':  
                suma+=2;
            break;
            case 'B': case 'C': case'M': case'P': 
                suma+=3;
            break;
            case 'F': case 'H': case'V': case'W': case'Y':
                suma+=4;
            break;
            case 'K':
                suma+=5;
            break;
            case 'J': case 'X': 
                suma+=8;
            break;
            case 'Q': case 'Z': 
                suma+=10;
            break;
            
        }
    });
    return word + " suma " + suma + " puntos";
}
btn.addEventListener("click", () => {
    res.textContent=contarPuntos(input.value);
    document.write("hola" + suma);
});

        