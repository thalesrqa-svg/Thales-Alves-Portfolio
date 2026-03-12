
// script.js
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio real do formulário

    const nome = document.getElementById('nome').value;
    const status = document.getElementById('statusEnvio');

    // Comentário: Validação simples e simulação de resposta assíncrona
    status.innerText = "Validando dados...";
    
    setTimeout(() => {
        status.innerHTML = `<strong>Obrigado ${nome}! sua mensagem foi enviada com sucesso.</strong>`;
        status.style.color = "green";
        this.reset(); // Limpa os campos
    }, 1500);
});