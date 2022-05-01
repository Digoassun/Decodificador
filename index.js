var passos = document.querySelector('#passos')
var select = document.querySelector('#select')
var radio = document.querySelector('#radio')
var encode = document.querySelector('#encode')
var decode = document.querySelector('#decode')
var btn = document.querySelector('#btn')

//Função para aparecer os passos
select.addEventListener('click', function (event) {
    if (select.value == '3') {
        passos.style.display = 'flex'
    } else {
        passos.style.display = 'none'
    }
})


//Funções para butões
radio.addEventListener('click', function (event) {
    if (encode.checked) {
        btn.innerHTML = `<input class="btnInput" id="btnEncoder" type="button" value="Codificar mensagem" onclick="encoder()">`
    } else if (decode.checked) {
        btn.innerHTML = `<input class="btnInput" id="btnDecoder" type="button" value="Decodificar mensagem" onclick="decoder()">`
    }
})

//Base64 e Cesar ENCODE
// var btnEncoder = document.querySelector('#btnEncoder')
// var btnDecoder = document.querySelector('#btnDecoder')
var enterTxt = document.querySelector('#txt')
var txtValue;
var outTxt = document.querySelector('#finalTxt')

function encoder() {
    if (select.value == '2' && encode.checked) {
        txtValue = enterTxt.value
        outTxt.value = btoa(txtValue)
    }
}

//Base64 e Cesar DECODE

function decoder() {
    if (select.value == '2' && decode.checked) {
        txtValue = enterTxt.value
        outTxt.value = atob(txtValue)
    }
}