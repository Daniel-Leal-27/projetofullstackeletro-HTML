let numeropremiado = prompt("Digite o número da sorte! Você pode GANHAR uma bicicleta AGORA!");

let nome_usuario = prompt("Para atendê-los melhor, desejamos saber o seu nome: ").toLowerCase();
alert("Seja muito bem-vindo(a) ao ALL BIKES, " + nome_usuario + "!");

if ((numeropremiado == 27 && nome_usuario == "daniel") || (nome_usuario == "afonso")) {
    alert ("Parabéns, " + nome_usuario + "! Você acertou o número premiado a acabou de ganhar uma bicicleta.");
}
else {
    alert (nome_usuario + ", você não teve tanta sorte hoje, mas APROVEITE as OPORTUNIDADES disponíveis em nosso site!")
}