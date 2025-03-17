# 🎁 Amigo Secreto - Sorteador de Nomes

Este projeto é uma aplicação simples de **Amigo Secreto**, onde os usuários podem inserir nomes em uma lista e, posteriormente, realizar um sorteio aleatório para selecionar um participante.  

## 📌 Funcionalidades

- Adicionar nomes à lista.
- Exibir os nomes adicionados na interface.
- Sortear aleatoriamente um nome entre os participantes.
- Exibir o nome sorteado na tela.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da página.  
- **CSS3** → Estilização e layout.  
- **JavaScript** → Lógica do sorteio e manipulação do DOM.  

---

## 📜 Código Explicado

### 📌 Array para Armazenar os Nomes

O código utiliza um **array** para armazenar os nomes inseridos pelos usuários.

```javascript
const listaAmigos = []; // Armazena os nomes inseridos
```
📌 Funções Utilizadas
adicionarAmigo()

Essa função adiciona o nome digitado pelo usuário ao array listaAmigos e atualiza a exibição na tela.
```javascript
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Obtém o nome digitado e remove espaços extras

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    listaAmigos.push(nome); // Adiciona o nome ao array
    atualizarLista(); // Atualiza a exibição na tela
    inputAmigo.value = ""; // Limpa o campo de entrada
}
```
✔ Verifica se o nome é válido antes de adicionar.
✔ Adiciona o nome ao array `listaAmigos`.
✔ Atualiza a lista exibida na tela.

`atualizarLista()`

Essa função exibe os nomes adicionados na interface do usuário.
```javascript
function atualizarLista() {
    listaNomes.innerHTML = ""; // Limpa a lista antes de atualizar

    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}
```
✔ Limpa a lista antes de adicionar novos itens.
✔ Cria elementos `<li>` para cada nome armazenado no array.

`sortearAmigo()`
Essa função seleciona aleatoriamente um nome da lista.
```javascript
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado];

    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>!</li>`;
}
```
✔ Verifica se há nomes na lista antes de sortear.
✔ Gera um índice aleatório dentro do array.
✔ Exibe o nome sorteado na tela.

📌 Melhorias Futuras

Adicionar opção para remover nomes da lista.

📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e compartilhar!

💡 Feito com dedicação! 🎉
```javascript

Esse `README.md` fornece uma explicação detalhada do projeto, estrutura, funcionalidades e código. Você pode copiá-lo e adicioná-lo ao seu repositório. 🚀
```

## 👨‍💻 Desenvolvedor

Feito com ❤️ por [Ramon Lima]  
## 🐙 Meu Octocat
<img src="assets/octocat-1742243640618.png" alt="Meu Octocat" width="250">
 
🐙 GitHub: [github.com/ra-lim-so](https://github.com/ra-lim-so)  
🚀 LinkedIn: [linkedin.com/in/ramon-lima-a91729235/](https://www.linkedin.com/in/ramon-lima-a91729235/)  
