//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const listaAmigos = []; // Array para armazenar os nomes
const inputAmigo = document.getElementById("amigo");
const listaNomes = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() { // Função para adicionar um amigo à lista
    const nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista(); // Atualiza a lista de amigos exibidos
    inputAmigo.value = "";
}

function atualizarLista() {
    listaNomes.innerHTML = "";

    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

function sortearAmigo() { // Função para sortear um amigo
    if (listaAmigos.length === 0) {
        alert("É necessário adicionar pelo menos um nome antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}