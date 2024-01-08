const btnFormulario = document.getElementById("btn-formulario");
const formulario = document.getElementById("formulario");
const btnApresentacao = document.getElementById("btn-apresentacao");
const apresentacao = document.getElementById("apresentacao");
const main = document.getElementById("main");

btnFormulario.addEventListener("click", () => {
  apresentacao.style.display = "none";
  formulario.style.display = "block";
  formulario.innerHTML = `
  <h1>Formulário de requisição de serviço</h1>
  <br />
  
  <form method="post" action="https://65282114931d71583df1ebce.mockapi.io/api/atvada/users">
  <label for="nome">Nome</label><br />
  
  <input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" required /><br /><br />
  
  <label for="email">E-mail</label><br />
  <input type="email" name="email" id="email" placeholder="Digite seu e-mail" required /><br /><br />
  
  <label for="servico">Serviço</label><br />
  <input type="checkbox" name="interesse1" id="interesse1" value="HTML">HTML<br />
  <input type="checkbox" name="interesse2" id="interesse2" value="CSS">CSS<br />
  <input type="checkbox" name="interesse3" id="interesse3" value="JavaScript">JavaScript<br /><br />
  
  <label for="data">Data de entrega</label><br />
  <input type="date" name="data" id="data" required><br /><br />
  
  <label for="imagem">Ideia do serviço</label><br />
  <input type="file" name="arquivo" id="arquivo"><br /><br />
  
  <label for="ideia">Conte a ideia do serviço que será prestado:</label><br />
  <textarea name="ideia" id="ideia" cols="50" rows="10"></textarea><br /><br />
  
  <input type="submit" value="Enviar">
  </form>
  `;
});

btnApresentacao.addEventListener("click", () => {
  formulario.style.display = "none";
  apresentacao.style.display = "block";
});
