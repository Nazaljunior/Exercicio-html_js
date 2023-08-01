document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obter os valores dos campos A e B
    const campoA = parseInt(document.getElementById("campoA").value);
    const campoB = parseInt(document.getElementById("campoB").value);

    // Validar o formulário
    if (campoB > campoA) {
        exibirMensagemPositiva();
    } else {
        exibirMensagemNegativa();
    }
});

function exibirMensagemPositiva() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = "Formulário válido! B é maior que A.";
    mensagem.style.color = "green";
}

function exibirMensagemNegativa() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerText = "Formulário inválido! B deve ser maior que A.";
    mensagem.style.color = "red";
}
