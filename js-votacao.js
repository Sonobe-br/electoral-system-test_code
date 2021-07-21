function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function votar() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var eleitor = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(eleitor) !== null) {
        votos = parseInt(sessionStorage.getItem(eleitor)) + 1;
        sessionStorage.setItem(eleitor, votos);
    } else {
        sessionStorage.setItem(eleitor, 1);
    }
    alert("Confirmado voto no candidato" + eleitor)
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}

function resultado() {
    document.getElementById("resultado").innerHTML= ""
    for(i=0; i<100; i++) {
        if (sessionStorage.getItem(i) !== null) {
            //alert(i);
            document.getElementById("resultado").innerHTML += "eleitor "+i+" tem"
            +sessionStorage.getItem(i)+ "votos<br/>"; 
        }
    }
}