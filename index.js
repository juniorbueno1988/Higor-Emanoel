document.addEventListener('DOMContentLoaded', function () {
    // Pega a imagem com a classe "container__imagem"
    const imagem = document.querySelector('.container__imagem');

    // Adiciona um manipulador de evento para quando o mouse entra na imagem
    imagem.addEventListener('mouseover', function () {
        // Aumenta o tamanho da imagem quando o mouse passa por cima
        imagem.style.transform = 'scale(1.1)';
    });

    // Adiciona um manipulador de evento para quando o mouse sai da imagem
    imagem.addEventListener('mouseout', function () {
        // Retorna a imagem ao tamanho original quando o mouse sai
        imagem.style.transform = 'scale(1.0)';
    });

});