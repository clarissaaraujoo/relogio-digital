function atualizarRelogio(){
    const agora = new Date()

    const hora = String(agora.getHours()).padStart(2, "0")
    const minuto = String(agora.getMinutes()).padStart(2, "0")
    const segundo = String(agora.getSeconds()).padStart(2, "0")

    document.querySelector("#horas").innerText = hora
    document.querySelector("#minutos").innerText = minuto
    document.querySelector("#segundos").innerText = segundo

}

function atualizarMensagem(){
    const agora = new Date()
    const hora = agora.getHours()

    let mensagem = "bom dia!"

    if(hora >11 && hora <16){
        mensagem = "boa tarde!"
    }else if(hora >=17){
        mensagem = "boa noite!"
    }

    document.querySelector("#mensagem_dia").innerText = mensagem

}

setInterval(atualizarRelogio, 1000)
setInterval(atualizarMensagem, 1000)



