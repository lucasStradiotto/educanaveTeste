document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocorreu um problema ao enviar o formulário.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Obrigado! Sua mensagem foi enviada com sucesso.');
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
    });
});