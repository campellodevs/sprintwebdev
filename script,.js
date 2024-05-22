document.addEventListener('DOMContentLoaded', function() {
    // Manipulação de slides
    let imagens = ['img/imagem1.jpg', 'img/imagem2.jpg', 'img/imagem4.jpg'];
    let index = 0;
    let time = 3000;

    function slideShow() {
        document.getElementById("imgbanner").src = imagens[index];
        index++;

        if (index === imagens.length) {
            index = 0;
        }
        setTimeout(slideShow, time);
    }

    slideShow();

    // Validação de formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === 'admin123') {
            alert('Login bem-sucedido!');
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });
});
