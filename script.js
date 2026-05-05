document.getElementById("formContato").addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
    let msgRetorno = document.getElementById("msgRetorno");

    if(nome === "" || email === "" || mensagem === ""){
        alert("Preencha todos os campos!");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Digite um e-mail válido!");
        return;
    }

    msgRetorno.innerText = "Mensagem enviada com sucesso!";
    msgRetorno.style.color = "green";

    document.getElementById("formContato").reset();
});
