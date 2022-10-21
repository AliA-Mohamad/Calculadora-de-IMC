const nunAltura = document.getElementById("nunAltura");
const nunPeso = document.getElementById("nunPeso");
const botaoCalcular = document.getElementById("botaoCalcular");
const nunResultado = document.getElementById("nunResultado");
const progressoCircular = document.querySelector(".progresMask"),
      valorProgresso = document.querySelector(".valorProgresso");

nunAltura.addEventListener('keypress', () => {
    let nunAlturalengt = nunAltura.value.length;
    if (nunAlturalengt === 1){
        nunAltura.value += "."
    }
})

nunPeso.addEventListener('keypress', () => {
    let nunPesolengt = nunPeso.value.length;
    if (nunPesolengt === 2){
        nunPeso.value += "."
    }
})

botaoCalcular.addEventListener("click", () => {
    nunResultado.value = parseFloat(nunPeso.value) / (parseFloat(nunAltura.value) ** 2)
    nunResultado.value = parseFloat(nunResultado.value).toFixed(2)
    progressoCircular.style.background = "conic-gradient(#ffffff00 0deg , #201b2d 0deg)"
    valorProgresso.textContent = "-"
    valorProgresso.pointer = "all"
    valorProgresso.style.color = "white"
    if(nunResultado.value != ""){roda()}
});

// barra de progesso

function roda(){

    let valorProgressoAtual = 0,
        mediaPeso = parseFloat(nunResultado.value).toFixed(2) * 9,
        npeso = parseFloat(nunResultado.value).toFixed(2),
        valorMaximo = 360,
        velocidade = 1;

    let progresso = setInterval(() => {
        valorProgressoAtual = valorProgressoAtual + 1;
            
        progressoCircular.style.background = "conic-gradient(#ffffff00 " + (valorProgressoAtual) + "deg , #201b2d 0deg)"
            
        if(valorProgressoAtual == valorMaximo || mediaPeso < valorProgressoAtual){

            if(npeso < 18.5){
                valorProgresso.textContent = "Abixo do peso";
                valorProgresso.style.color = "yellow"
            } if(18.5 <= npeso & npeso < 24.9){
                valorProgresso.textContent = "Peso normal";
                valorProgresso.style.color = "lime"
            } if(25.0 <= npeso & npeso < 29.9){
                valorProgresso.textContent = "Sobre peso";
                valorProgresso.style.color = "yellow"
            } if(30.0 <= npeso & npeso < 34.9){
                valorProgresso.textContent = "Obesidade Classe I";
                valorProgresso.style.color = "red"
            } if(35.0 <= npeso & npeso < 39.9){
                valorProgresso.textContent = "Obesidade Classe II";
                valorProgresso.style.color = "red"
            } if(npeso >= 40){
                valorProgresso.textContent = "Obesidade Classe III";
                valorProgresso.style.color = "red"
            }

            clearInterval(progresso)
        };
    }, velocidade);
}

document.get