let entrada1, entrada2, saida

function defineCampos(){
    entrada1 = document.getElementById("entrada1")
    entrada2 = document.getElementById("entrada2")
    saida = document.getElementById("resposta")
}
function LOGIN(){   
    defineCampos()
    var usuario = entrada1.value
    var senha = entrada2.value
    if (usuario != "admin"){
        saida.innerHTML = "Usuário ou senha incorreto"
    }
        else{
    saida.innerHTML = "Login efetuado!"
}
    if (senha != "123"){
        saida.innerHTML = "Usuário ou senha incorreto"
    }
else{
    saida.innerHTML = "Login efetuado!"
}
}
