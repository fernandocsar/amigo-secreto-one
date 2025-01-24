let amigos = [];

function adicionarAmigo() {
  const capturaNome = document.getElementById("amigo");
  const nome = capturaNome.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome");
    return; 
  }
 
  if (amigos.includes(nome)) {
    alert("Já existe um amigo com esse nome");
    return;
  }

  amigos.push(nome);

  const lista = document.getElementById("listaAmigos");
  const li = document.createElement("li");
  li.textContent = nome;

  li.addEventListener("click", () => {
    const index = nome.indexOf(nome);
    amigos.splice(index, 1);
    li.remove();
  });

  lista.appendChild(li);
  capturaNome.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const li = document.createElement("li"); 
    li.textContent = amigos[index]; 
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há amigos para sortear, por favor, adicione amigos");	
    return;
  }

  const indexAleatorio = Math.floor(Math.random() * amigos.length);
  const nomeSorteio = amigos[indexAleatorio];

  const resultadoAmigo = document.getElementById("resultado");
  resultadoAmigo.textContent = `Seu amigo é ${nomeSorteio}`;
}
