function validarForm() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if (num2 <= num1) {
        alert("O valor do Campo 2 deve ser maior que o valor do Campo 1!");
        return false;
    } else { 
        alert("Formulário enviado com sucesso!");
        return true;
    }
}
