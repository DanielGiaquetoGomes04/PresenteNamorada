function sorteio(){
    let listaNomeFilme = [ "2001: uma odisseia no espaço", "The departed", "The pianist", "Brothers", "Come and See", "La Haine", "The GodFather", "SchindlersList", "Prisoners", "Scarface", 
    "Sobre Meninos e Lobos", "O brilho eterno de uma mente sem lembraças", "Amores expressos", "Her", "Taxi Driver", "Whiplash", "Querido Menino",
    "The Hunt", "O abutre", "A vida é bela", "A teoria de tudo", "A procura da felicidade", "Escritores da Liberdade", "Estrelas Além do Tempo", "A Sociedade dos Poetas mortos", "Passageiros", "É o fim", "Se beber não case", "Boa noite mamae",
    "A espreita do Mal", "Yara", "Estomago", "Fratura", "Sete minutos depois da meia-noite ", "OldBoy", "O operário", "Cisne Negro",
    "Trainspotting - Sem limites"]

    let sorteio = Math.floor(Math.random() * listaNomeFilme.length);
    console.log(listaNomeFilme[sorteio]);
}

var botao = document.getElementById("buscar");
botao.addEventListener("click",sorteio);

