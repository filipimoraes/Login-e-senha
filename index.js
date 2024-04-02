const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Validação de email e senha (Exemplo simples)
    if (email === '' || password === '') {
        alert('Preencha todos os campos!');
        return;
    }

    // Simulação de login (substitua por API real)
    if (email === 'usuario@email.com' && password === '123456') {
        alert('Login realizado com sucesso!');
        // Redirecionar para a página principal
        window.location.href = 'index.html';
    } else {
        alert('Email ou senha incorretos!');
    }
});