async function enviaFormulario() {
//recuperar as informaçoesdo formulario e colocar em objeto JSON
  const carroDTO = {
    "marca": document.querySelectorAll("input")[0].value,
    "modelo": document.querySelectorAll("input")[1].value,
    "ano": number(document.querySelectorAll("input")[2].value),
    "cor": document.querySelectorAll("input")[3].value,
  }

  try {
    const respostaServidor = await fetch("https://localhost:3333/novo/carro", {
   method: "POST",
   headers:{
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(carroDTO)
});

if(!respostaServidor.ok) {
    throw new Error("Erro ao enviar os dados para o servidor, contate o administrador do sistema");
}
alert("carro cadastrado com sucesso!");
} catch (error) {
    console.log(error);
    alert(`Erro ao se comunicar com o servidor. ${error}`);
 }

}