document.getElementById("saibaMais").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior: "smooth"
    });
});

function animarContador(id, valorFinal, velocidade) {
    let valor = 0;

    const contador = setInterval(() => {
        valor += Math.ceil(valorFinal / 100);

        if (valor >= valorFinal) {
            valor = valorFinal;
            clearInterval(contador);
        }

        document.getElementById(id).textContent =
            valor.toLocaleString('pt-BR');
    }, velocidade);
}

window.addEventListener("load", () => {
    animarContador("arvores", 50000, 30);
    animarContador("agua", 1000000, 20);
    animarContador("energia", 85, 40);
});
