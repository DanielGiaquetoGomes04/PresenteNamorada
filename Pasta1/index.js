function abreLink(){
    var entrada = document.getElementById('entrada');
    var senha = document.getElementById('senha');

    if ((entrada.value == 'laura' || entrada.value == "Laura") && senha.value == '07112020') {
        localStorage.setItem("acesso", true);
        window.location.href = "../Pasta2/pag2.html"
    }else {
        alert("Usuário ou senha não aceitas bb")
    }
}
