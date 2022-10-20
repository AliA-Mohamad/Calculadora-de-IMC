const nunAltura = document.getElementById("nunAltura");
const nunPeso = document.getElementById("nunPeso");
const botaoCalcular = document.getElementById("botaoCalcular");
const nunResultado = document.getElementById("nunResultado");

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
});

// barra de progesso

let progressoCircular = document.querySelector(".progresMask"),
    valorProgresso = document.querySelector(".valorProgresso");

let valorProgressoAtual = 0,
    valorFinalProgresso = 100,
    velocidade = 50;

let progresso = setInterval(() => {
    valorProgressoAtual++;
    
    valorProgresso.textContent = valorProgressoAtual+"%";
    
    if(valorProgressoAtual === valorFinalProgresso){
        clearInterval(progresso)
    };
}, velocidade);