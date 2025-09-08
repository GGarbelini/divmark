function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const contact = document.getElementById("contact").value;
    const assunto = document.getElementById("assunto").value;
    const mensagem = document.getElementById("mensagem").value;
    const telefone = "351924785438";

    const texto = `Olá! Me chamo ${nome}. Meu contato é ${contact}. Gostaria de falar sobre ${assunto}. ${mensagem}. `;

    const msgFormatada =encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    console.log(url)
    window.open(url, "_blank");

    document.getElementById("nome").value = '';
    document.getElementById("contact").value = '';
    document.getElementById("assunto").value = '';
    document.getElementById("mensagem").value = '';

}

function toggleMenu() {
    const menu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');

   
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.menu-link, .menu-contato').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu').classList.remove('active');
        document.querySelector('.hamburger').classList.remove('active');
    });
});