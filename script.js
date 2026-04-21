const formularioTarefa = document.querySelector("#form-tarefa");
const listaTarefa = document.querySelector("#tarefas");
const textoTarefa = document.querySelector("#texto-tarefa");

formularioTarefa.addEventListener("submit", (event) => {
  event.preventDefault();

  const tituloTarefa = textoTarefa.value;

  if (tituloTarefa.trim() === "") {
    window.alert("Impossível adicionar tarefa vazia.");
    return;
  }

  const novaTarefa = document.createElement("li");

  const texto = document.createElement("span");
  texto.innerText = tituloTarefa;

  const botaoConcluir = document.createElement("button");
  botaoConcluir.textContent = "Concluir Tarefa";
  botaoConcluir.classList.add("botao-concluir");
  botaoConcluir.addEventListener("click", () => {
    novaTarefa.classList.toggle("concluida");

    if (novaTarefa.classList.contains("concluida")) {
      listaTarefa.appendChild(novaTarefa);
    }
  });

  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir Tarefa";
  botaoExcluir.classList.add("botao-excluir");
  botaoExcluir.addEventListener("click", () => {
    novaTarefa.remove();
  });

  novaTarefa.appendChild(texto);
  novaTarefa.appendChild(botaoConcluir);
  novaTarefa.appendChild(botaoExcluir);

  listaTarefa.appendChild(novaTarefa);

  textoTarefa.value = "";
});
