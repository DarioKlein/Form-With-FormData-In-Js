const dados = {
  nome: "Ada Lovelace",
  email: "ada@email.com",
  telefones: [
    {
      numero: "(11) 99123-4567",
      tipo: "casa",
    },
  ],
  endereco: {
    logradouro: "Rua das programadoras",
    cidade: "Vale do silício",
    estado: "Codefornia",
    cep: "10100-100",
    pais: "Programaland",
  },
}

const formulario = document.querySelector("form")

formulario.addEventListener("submit", (event) => {
  event.preventDefault()
  const formData = new FormData(formulario)

  function atualizarCampo(nomeCampo, objeto, propriedade) {
    const valorCampo = formData.get(nomeCampo)
    if (valorCampo) {
      objeto[propriedade] = valorCampo
    }
  }

  atualizarCampo("nome", dados, "nome")
  atualizarCampo("email", dados, "email")
  atualizarCampo("telefone", dados.telefones[0], "numero")
  atualizarCampo("tipoTell", dados.telefones[0], "tipo")
  atualizarCampo("logradouro", dados.endereco, "logradouro")
  atualizarCampo("cidade", dados.endereco, "cidade")
  atualizarCampo("estado", dados.endereco, "estado")
  atualizarCampo("cep", dados.endereco, "cep")
  atualizarCampo("pais", dados.endereco, "pais")

  console.log(JSON.stringify(dados, null, 2))
})