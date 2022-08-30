let input = document.getElementById("input");
let result = document.getElementById("result");
let consultar = document.getElementById("consultar");
let mail = document.getElementById("mail");
let back = document.getElementById("back");
let d = new Array();
let horas = "";

input.addEventListener('change', function (){
    readXlsxFile(input.files[0]).then(function(data){
        for (i=0;i<=(data.length-1);i++){
            for (j=0;j<=2;j++){
                d.push(data[i][j]);
            }
        }
    });
});

consultar.addEventListener("click", function () {
    mail.style.display="none";
    back.style.display="block";
    consultar.style.display="none";
    document.getElementById("wellc").style.display="none";
    document.getElementById("txt-consulta").style.display="none";
    ind = d.indexOf(mail.value);
    if(ind!=-1){
        if (d[ind+2]!=0){
            result.value = "Hola " + d[ind+1] + " tienes " + d[ind+2] + " horas de servicio registradas";
            document.getElementById("imagen").src="./smile.jpg";
        }else{
            result.value = "Hola " + d[ind+1] + ", al parecer no tienes horas de servicio registradas";
            document.getElementById("imagen").src="./zero-h.gif";
        }
    }else{
        result.value = "lo siento no encontre tu correo electronico"
        document.getElementById("imagen").src="./not-found.gif";
    }
    
});





