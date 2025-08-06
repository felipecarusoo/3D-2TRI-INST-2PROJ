const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "",
        alternativas: [
            {
                texto:"",
                afirmação: ""
            },
            {
                texto: "",
                afirmação: ""
            }
        ]
    },
    {
        enunciado: "repete o padrao superior para todas perguntas",
    }
]

let atual = 0;
let perguntaAtual;
let histriaFinal =  "";

function mostraPergunta () {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas () {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    histriaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado () {
    caixaPerguntas.textContent = "Em 2026...";
    textoResultado.textContent = histriaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();